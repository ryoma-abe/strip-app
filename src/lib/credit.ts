import "server-only";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export async function getUserCredits() {
  try {
    const user = await currentUser();
    if (!user) {
      return 0;
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
      select: {
        credits: true,
      },
    });
    return dbUser?.credits || 0;
  } catch (error) {
    console.error("Error getting user credits:", error);
    return 0;
  }
}
export async function decrementUserCredits(clerkId: string) {
  try {
    const user = await prisma.user.update({
      where: { clerkId },
      data: {
        credits: {
          decrement: 1,
        },
      },
      select: {
        credits: true,
      },
    });
    return user?.credits || 0;
  } catch (error) {
    console.error("Error decrement user credits:", error);
    return new Error("Error decrement user credits");
  }
}
