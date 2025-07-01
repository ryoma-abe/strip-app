import { stripe } from "@/config/stripe";
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
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      break;
    case "payment_method.attached":
      const paymentMethod = event.data.object;

      break;
    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  response.send();
}
