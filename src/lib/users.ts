import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ユーザー作成
export async function createUser(clerkId: string, email: string) {
  try {
    const user = await prisma.user.create({
      data: {
        clerkId,
        email,
        credits: 5,
        subscriptionStatus: "FREE",
      },
    });

    return user;
  } catch (error) {
    console.error("ユーザーの作成に失敗しました", error);
    throw error;
  }
}

// ユーザー更新
export async function updateUser(clerkId: string, email: string) {
  try {
    const user = await prisma.user.update({
      where: { clerkId },
      data: {
        email,
      },
    });

    return user;
  } catch (error) {
    console.error("アップデートに失敗しました", error);
    throw error;
  }
}

// ユーザー削除
export async function deleteUser(clerkId: string) {
  try {
    const user = await prisma.$transaction(async (tx) => {
      await tx.subscription.deleteMany({
        where: { user: { clerkId } },
      });

      const user = await tx.user.delete({
        where: { clerkId },
      });

      return user;
    });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("削除に失敗しました", error);
    throw error;
  }
}
