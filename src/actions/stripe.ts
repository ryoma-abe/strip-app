"use server";
import { prisma } from "@/lib/prisma";
import { StripeState } from "@/types/actions";
import { currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";
// ストライプの初期化
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createStripeSession(
  prevState: StripeState,
  formData: FormData
): Promise<StripeState> {
  const priceId = formData.get("priceId");
  const user = await currentUser();
  if (!user) {
    throw new Error("認証が必要です");
  }
  try {
    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });
    let customerId = dbUser?.stripeCustomerID;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
        metadata: {
          clerkId: user.id,
        },
      });
      await prisma.user.update({
        where: { clerkId: user.id },
        data: {
          stripeCustomerID: customer.id,
        },
      });
      customerId = customer.id;
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: priceId as string,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.BASE_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/dashboard?canceled=true`,
    });

    if (!session.url) {
      throw new Error("セッションの作成に失敗しました");
    }

    return {
      status: "success",
      error: "",
      redirectUrl: session.url,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: "決済エラーが発生しました",
      redirectUrl: "",
    };
  }
}
