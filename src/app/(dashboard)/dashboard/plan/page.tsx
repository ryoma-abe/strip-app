import { plans } from "@/config/plan";
import { Check } from "lucide-react";

export default function PlanPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          料金プラン
        </h1>
        <p className="text-lg text-gray-600">
          あなたのニーズに合わせて、最適なプランを選択してください。
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-1">{plan.name}</h2>
                  <p className="text-gray-500 text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-base"> /月</span>
                </div>

                <ul className="flex-1 space-y-3 text-sm text-gray-700 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
