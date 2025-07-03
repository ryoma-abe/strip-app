import Stripe from "stripe";
import { prisma } from "./prisma";
import { SubscriptionStatus } from "@prisma/client";

function getSubscriptionStatus(subscription: Stripe.Subscription) {
  const priceId = subscription.items.data[0].price.id;
  let status: SubscriptionStatus = "FREE";
  let credits = 5;
  switch (priceId) {
    case process.env.STRIPE_PRICE_ID_STARTER:
      status = "STARTER";
      credits = 50;
      break;
    case process.env.STRIPE_PRICE_ID_PRO:
      status = "PRO";
      credits = 120;
      break;
    case process.env.STRIPE_PRICE_ID_ENTERPRISE:
      status = "ENTERPRISE";
      credits = 300;
      break;
  }
  return { priceId, status, credits };
}

// サブスクリプション作成
export const handleSubscriptionCreated = async (
  subscription: Stripe.Subscription
) => {
  const { priceId, status, credits } = getSubscriptionStatus(subscription);
  return prisma.user.update({
    where: {
      stripeCustomerID: subscription.customer as string,
    },
    data: {
      subscriptionStatus: status,
      credits: credits,
      subscription: {
        create: {
          stripeSubscriptionID: subscription.id,
          stripePriceID: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscription.items.data[0].current_period_end * 1000
          ),
        },
      },
    },
  });
};

// サブスクリプション更新
export const handleSubscriptionUpdated = async (
  subscription: Stripe.Subscription
) => {
  const { priceId, status, credits } = getSubscriptionStatus(subscription);
  return prisma.user.update({
    where: {
      stripeCustomerID: subscription.customer as string,
    },
    data: {
      subscriptionStatus: subscription.cancel_at_period_end ? "FREE" : status,
      credits: subscription.cancel_at_period_end ? 5 : credits,
      subscription: {
        update: {
          stripeSubscriptionID: subscription.id,
          stripePriceID: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscription.items.data[0].current_period_end * 1000
          ),
        },
      },
    },
  });
};

// サブスクリプション削除
export const handleSubscriptionDeleted = async (
  subscription: Stripe.Subscription
) => {
  return prisma.user.update({
    where: {
      stripeCustomerID: subscription.customer as string,
    },
    data: {
      subscriptionStatus: "FREE",
      credits: 5,
      subscription: {
        delete: {
          stripeSubscriptionID: subscription.id,
        },
      },
    },
  });
};
