"use client";
import { createStripeSession } from "@/actions/stripe";
import { Button } from "@/components/ui/button";
import { plans } from "@/config/plan";
import { StripeState } from "@/types/actions";
import { Check } from "lucide-react";
import { useActionState } from "react";

export default function PlanPage() {
  const initialState: StripeState = {
    status: "idle",
    error: "",
    redirectUrl: "",
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, pending] = useActionState(
    async (
      prevState: StripeState,
      FormData: FormData
    ): Promise<StripeState> => {
      const result = await createStripeSession(prevState, FormData);

      if (result.status === "error") {
        console.error(result.error);
      } else if (result.status === "success" && result.redirectUrl) {
        window.location.href = result.redirectUrl;
      }
      return result;
    },
    initialState
  );

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          料金プラン
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          あなたのニーズに合わせて、最適なプランを選択してください。
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow ${
                plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  人気プラン
                </div>
              )}
              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{plan.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-base"> /月</span>
                </div>

                <ul className="flex-1 space-y-3 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <form action={formAction}>
                  <input type="hidden" name="priceId" value={plan.priceId} />
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700" 
                        : "border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/20"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
