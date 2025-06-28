"use server";

import { decrementUserCredits } from "@/lib/credit";
import { generateImageState, RemoveBackgroundState } from "@/types/actions";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function generateImage(
  state: generateImageState,
  formData: FormData
): Promise<generateImageState> {
  const keyword = formData.get("keyword");
  const user = await currentUser();
  if (!user) {
    return {
      status: "error",
      error: "ユーザーが見つかりません",
    };
  }

  if (!keyword || typeof keyword !== "string") {
    return {
      status: "error",
      error: "キーワードを入力してください",
    };
  }
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/generate-image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword }),
    });
    const data = await res.json();
    await decrementUserCredits(user.id);
    revalidatePath("/dashboard");
    return {
      status: "success",
      imageUrl: data.imageUrl,
      keyword: keyword,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: "画像の生成に失敗しました",
    };
  }
}

export async function removeBackground(
  state: RemoveBackgroundState,
  formData: FormData
): Promise<RemoveBackgroundState> {
  const image = formData.get("image") as File;

  if (!image) {
    return {
      status: "error",
      error: "画像ファイルを選択してください",
    };
  }
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/remove-background`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("背景の削除に失敗しました");
    }
    const data = await res.json();
    return {
      status: "success",
      processedImage: data.imageUrl,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: "背景の削除に失敗しました",
    };
  }
}
