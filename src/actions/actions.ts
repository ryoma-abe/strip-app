"use server";

import { generateImageState } from "@/types/actions";

export async function generateImage(
  state: generateImageState,
  formData: FormData
): Promise<generateImageState> {
  const keyword = formData.get("keyword");

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
  state: generateImageState,
  formData: FormData
): Promise<generateImageState> {
  const keyword = formData.get("keyword");

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
