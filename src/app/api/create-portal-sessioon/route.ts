import { stripe } from "@/config/stripe";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (!dbUser?.stripeCustomerID) {
      return new NextResponse("No Stripe CustomerId", { status: 400 });
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: dbUser?.stripeCustomerID,
      return_url: `${process.env.BASE_URL}/dashboard/settings`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
