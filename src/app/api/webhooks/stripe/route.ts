import { stripe } from "@/config/stripe";
import {
  handleSubscriptionCreated,
  handleSubscriptionDeleted,
  handleSubscriptionUpdated,
} from "@/lib/subscription";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
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
        return NextResponse.json(
          { error: "Webhook signature verification failed" },
          { status: 400 }
        );
      }
    }

    if (!event) {
      return NextResponse.json(
        { error: "WebhookEvent error" },
        { status: 500 }
      );
    }
    const subscription = event.data.object as Stripe.Subscription;

    switch (event.type) {
      case "customer.subscription.created": {
        await handleSubscriptionCreated(subscription);
        break;
      }
      case "customer.subscription.updated": {
        await handleSubscriptionUpdated(subscription);
        break;
      }
      case "customer.subscription.deleted": {
        await handleSubscriptionDeleted(subscription);
        break;
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
