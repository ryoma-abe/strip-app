import { plans } from "@/config/plan";
import { Check } from "lucide-react";

export default function PlanPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          料金プラン
        </h1>
        <p className="text-lg text-gray-600">
          あなたのニーズに合わせて、最適なプランを選択してください。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => {
          return (
            <div key={plan.name}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                  <p className="text-gray-500 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/月</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
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
