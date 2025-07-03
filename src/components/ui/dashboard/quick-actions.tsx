import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../card";
import Link from "next/link";
import { LayersIcon, SparklesIcon, ZapIcon } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        クイックアクション
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Image Generation */}
        <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
          <Link href="/dashboard/tools/image-generator">
            <CardContent>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                AI画像生成
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                テキストから高品質な画像を瞬時に生成
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        {/* Background Removal */}
        <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-200">
          <Link href="/dashboard/tools/remove-bg">
            <CardContent>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LayersIcon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                背景除去
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                AIが自動で被写体を認識し、完璧に背景を除去
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        {/* Image Optimization */}
        <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200">
          <Link href="/dashboard/tools/optimize">
            <CardContent>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ZapIcon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                画像圧縮
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                品質を保ちながら、ファイルサイズを大幅に削減
              </CardDescription>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
}
