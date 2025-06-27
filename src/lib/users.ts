import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

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

    return NextResponse.json({ user, status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}
