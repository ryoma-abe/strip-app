import { stripe } from "@/config/stripe";
import { prisma } from "@/lib/prisma";
import { SubscriptionStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let event;
  const body = await request.text();
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (endpointSecret) {
    const signature = request.headers.get("stripe-signature") as string;
    try {
      event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
    } catch {
      console.log(`⚠️  Webhook signature verification failed.`);
      return new NextResponse("Webhook error", { status: 400 });
    }
  }

  if (!event) {
    return new NextResponse("WebhookEvent error", { status: 500 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      // エラーハンドリング
      if (!session.metadata || !session.subscription) {
        return new NextResponse("Session Error", { status: 500 });
      }
      const subscription = (await stripe.subscriptions.retrieve(
        session.subscription as string
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      )) as any;

      let subscriptionStatus: SubscriptionStatus = "FREE";

      switch (subscription.items.data[0].price.id) {
        case "price_1Rfg81CjQk4bcqCwb0PUwQCO":
          subscriptionStatus = "FREE";
          break;
        case "price_1Rfg8OCjQk4bcqCwZOFSmzcR":
          subscriptionStatus = "BASIC";
          break;
        case "price_1Rfg8dCjQk4bcqCws1DnkJMU":
          subscriptionStatus = "PRO";
          break;
      }
      // 初回はサブスク情報の登録のみ
      await prisma.user.update({
        where: {
          clerkId: session.metadata.clerkId,
        },
        data: {
          subscriptionStatus: subscriptionStatus,
          subscription: {
            create: {
              stripeSubscriptionID: subscription.id,
              stripePriceID: subscription.items.data[0].price.id,
              stripeCurrentPeriodEnd: new Date(
                subscription.current_period_end * 1000
              ),
            },
          },
        },
      });
      break;
    case "payment_method.attached":
      // Payment method attached - implement logic as needed
      break;
    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  return new NextResponse("Success", { status: 200 });
}
