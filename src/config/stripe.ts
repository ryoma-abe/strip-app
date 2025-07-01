import Stripe from "stripe";
// ストライプの初期化
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
