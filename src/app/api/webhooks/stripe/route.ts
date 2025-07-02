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
    // ========================================
    // 初回サブスクリプション登録時の処理
    // ========================================
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("📧 checkout.session.completed event received", {
        sessionId: session.id,
        customerId: session.customer,
        metadata: session.metadata,
      });

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

      // プランに応じたステータスとクレジット数を設定
      let subscriptionStatus: SubscriptionStatus = "FREE";
      let credits = 5; // デフォルトクレジット

      switch (priceId) {
        case "price_1Rfg81CjQk4bcqCwb0PUwQCO": // STARTERプラン
          subscriptionStatus = "STARTER";
          credits = 50;
          break;
        case "price_1Rfg8OCjQk4bcqCwZOFSmzcR": // PROプラン
          subscriptionStatus = "PRO";
          credits = 120;
          break;
        case "price_1Rfg8dCjQk4bcqCws1DnkJMU": // ENTERPRISEプラン
          subscriptionStatus = "ENTERPRISE";
          credits = 300;
          break;
      }
      console.log("💳 Subscription details:", {
        priceId,
        subscriptionStatus,
        credits,
      });
      // 初回登録時にサブスク情報とクレジットを更新
      try {
        const updatedUser = await prisma.user.update({
          where: {
            clerkId: session.metadata.clerkId,
          },
          data: {
            stripeCustomerID: session.customer as string, // 重要: customer.subscription.updatedで使用するため必須
            subscriptionStatus: subscriptionStatus,
            credits: credits, // 初回登録時にプランに応じたクレジットを付与
            subscription: {
              create: {
                stripeSubscriptionID: subscription.id,
                stripePriceID: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(periodEnd * 1000),
              },
            },
          },
        });
        console.log("✅ User updated successfully:", {
          userId: updatedUser.id,
          clerkId: updatedUser.clerkId,
          credits: updatedUser.credits,
          subscriptionStatus: updatedUser.subscriptionStatus,
        });
      } catch (error) {
        console.error("❌ Error updating user:", error);
        return new NextResponse("Database update error", { status: 500 });
      }
      break;
    // ========================================
    // サブスクリプション更新時の処理（毎月の更新等）
    // ========================================
    case "customer.subscription.updated":
      const subscriptionSession = event.data.object;
      console.log("🔄 customer.subscription.updated event received", {
        subscriptionId: subscriptionSession.id,
        customerId: subscriptionSession.customer,
        status: subscriptionSession.status,
      });
      // アクティブなサブスクリプションの場合のみクレジットを更新
      if (subscriptionSession.status === "active") {
        let credits = 5;
        const priceId = subscriptionSession.items.data[0].price.id;

        // プランに応じたクレジット数を設定
        switch (priceId) {
          case "price_1Rfg81CjQk4bcqCwb0PUwQCO": // STARTER
            credits = 50;
            break;
          case "price_1Rfg8OCjQk4bcqCwZOFSmzcR": // PRO
            credits = 120;
            break;
          case "price_1Rfg8dCjQk4bcqCws1DnkJMU": // ENTERPRISE
            credits = 300;
            break;
        }
        try {
          // stripeCustomerIDでユーザーを検索（checkout.session.completedで保存済み）
          const user = await prisma.user.findUnique({
            where: { stripeCustomerID: subscriptionSession.customer as string },
          });

          if (!user) {
            console.error(
              "❌ User not found for stripeCustomerID:",
              subscriptionSession.customer
            );
            return new NextResponse("User not found", { status: 404 });
          }

          // クレジットを更新（毎月の更新時にクレジットをリセット）
          const updatedUser = await prisma.user.update({
            where: { stripeCustomerID: subscriptionSession.customer as string },
            data: {
              credits: credits, // プランに応じたクレジットに更新
            },
          });
          console.log("✅ Credits updated for subscription renewal:", {
            userId: updatedUser.id,
            oldCredits: user.credits,
            newCredits: updatedUser.credits,
          });
        } catch (error) {
          console.error("❌ Error updating credits:", error);
          return new NextResponse("Database update error", { status: 500 });
        }
      }
      break;
  }

  return new NextResponse("Success", { status: 200 });
}
