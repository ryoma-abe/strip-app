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
    console.error("Error creating user:", error);
    throw error;
  }
}
