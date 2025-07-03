"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SparklesIcon,
  ImageIcon,
  ZapIcon,
  LayersIcon,
  ArrowRightIcon,
  CreditCardIcon,
  ClockIcon,
} from "lucide-react";
import Link from "next/link";
import PageContainer from "@/components/ui/dashboard/page-container";

export default function DashboardPage() {
  // これらの値は将来的にAPIから取得する予定
  const userStats = {
    currentCredits: 127,
    totalCredits: 500,
    imagesGenerated: 245,
    timesSaved: 24.5,
    currentPlan: "Pro",
  };

  return (
    <PageContainer>
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <SparklesIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              おかえりなさい！
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              AI Creator Studioで創造性を解き放ちましょう
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                利用可能クレジット
              </CardTitle>
              <CreditCardIcon className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {userStats.currentCredits}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              残り{userStats.totalCredits - userStats.currentCredits}クレジット
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-pink-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                生成した画像
              </CardTitle>
              <ImageIcon className="h-4 w-4 text-pink-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {userStats.imagesGenerated}
            </div>
            <p className="text-xs text-green-600">+12% 先月比</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                処理時間の節約
              </CardTitle>
              <ClockIcon className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {userStats.timesSaved}時間
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              今月の累計
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                現在のプラン
              </CardTitle>
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {userStats.currentPlan}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              アクティブ
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          クイックアクション
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Image Generation */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
            <Link href="/dashboard/tools/image-generator">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <SparklesIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  AI画像生成
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  テキストから高品質な画像を瞬時に生成
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    10クレジット
                  </Badge>
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Background Removal */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-200">
            <Link href="/dashboard/tools/remove-bg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <LayersIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  背景除去
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  AIが自動で被写体を認識し、完璧に背景を除去
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-pink-100 text-pink-700"
                  >
                    5クレジット
                  </Badge>
                  <ArrowRightIcon className="h-4 w-4 text-pink-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Image Optimization */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200">
            <Link href="/dashboard/tools/optimize">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ZapIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  画像圧縮
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  品質を保ちながら、ファイルサイズを大幅に削減
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-700"
                  >
                    1クレジット
                  </Badge>
                  <ArrowRightIcon className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
