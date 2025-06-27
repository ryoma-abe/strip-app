import { prisma } from "@/lib/prisma";

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

export async function deleteUser(clerkId: string) {
  try {
    const user = await prisma.user.delete({
      where: { clerkId },
    });

    return user;
  } catch (error) {
    console.error("削除に失敗しました:", error);
    throw error;
  }
}
