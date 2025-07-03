import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { ClockIcon, CreditCardIcon, ImageIcon } from "lucide-react";

type UserStats = {
  currentCredits: number;
  totalCredits: number;
  imagesGenerated: number;
  timesSaved: number;
  currentPlan: string;
};

export default function StatsCards({ userStats }: { userStats: UserStats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-8">
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
            残り{userStats.totalCredits - userStats.currentCredits}
            クレジット
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
          <p className="text-xs text-gray-500 dark:text-gray-500">今月の累計</p>
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
          <p className="text-xs text-gray-500 dark:text-gray-500">アクティブ</p>
        </CardContent>
      </Card>
    </div>
  );
}
