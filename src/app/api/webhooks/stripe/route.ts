import { stripe } from "@/config/stripe";
import { prisma } from "@/lib/prisma";
import { SubscriptionStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let event;
  const body = await request.text();
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // エンドポイントが正しいか確認
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

      // セッションのメタデータとサブスクリプションが存在するか確認
      if (!session.metadata || !session.subscription) {
        return new NextResponse("Session Error", { status: 500 });
      }
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string,
        { expand: ["items.data"] }
      );
      // アイテムの取得とチェック
      const item = subscription.items.data[0];
      if (!item || !item.current_period_end) {
        console.error(
          "subscription.items.data が空、または current_period_end が欠落:",
          subscription
        );
        return new NextResponse("Subscription item error", { status: 500 });
      }

      const periodEnd = item.current_period_end;
      const priceId = item.price.id;

      let subscriptionStatus: SubscriptionStatus = "FREE";

      switch (priceId) {
        case "price_1Rfg81CjQk4bcqCwb0PUwQCO":
          subscriptionStatus = "STARTER";
          break;
        case "price_1Rfg8OCjQk4bcqCwZOFSmzcR":
          subscriptionStatus = "PRO";
          break;
        case "price_1Rfg8dCjQk4bcqCws1DnkJMU":
          subscriptionStatus = "ENTERPRISE";
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
              stripeCurrentPeriodEnd: new Date(periodEnd * 1000),
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
