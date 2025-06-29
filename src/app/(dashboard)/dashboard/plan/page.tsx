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
        {/* 梅プラン */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">梅</h2>
            <p className="text-gray-500 mb-4">個人利用に最適</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">¥0</span>
              <span className="text-gray-500">/月</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              月10回の画像処理
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              基本的な背景削除
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              標準画質出力
            </li>
          </ul>

          <button className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            現在のプラン
          </button>
        </div>

        {/* 竹プラン */}
        <div className="bg-gradient-to-b from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative transform hover:scale-105 transition-transform">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              おすすめ
            </span>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">竹</h2>
            <p className="text-gray-600 mb-4">ビジネス利用に最適</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">¥2,980</span>
              <span className="text-gray-600">/月</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <Check className="w-5 h-5 text-blue-500 mr-3" />
              月100回の画像処理
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-blue-500 mr-3" />
              高度な背景削除
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-blue-500 mr-3" />
              高画質出力
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-blue-500 mr-3" />
              優先サポート
            </li>
          </ul>

          <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            アップグレード
          </button>
        </div>

        {/* 松プラン */}
        <div className="bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-purple-500 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              プレミアム
            </span>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">松</h2>
            <p className="text-gray-600 mb-4">大規模チーム向け</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">¥9,980</span>
              <span className="text-gray-600">/月</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <Check className="w-5 h-5 text-purple-500 mr-3" />
              無制限の画像処理
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-purple-500 mr-3" />
              AIによる高精度処理
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-purple-500 mr-3" />
              最高画質出力
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-purple-500 mr-3" />
              専任サポート
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-purple-500 mr-3" />
              API アクセス
            </li>
          </ul>

          <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
}
