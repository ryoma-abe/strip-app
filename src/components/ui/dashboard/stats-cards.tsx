import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { CreditCardIcon } from "lucide-react";
import { User } from "@prisma/client";

export default async function StatsCards({ dbUser }: { dbUser: User }) {
  const credits = dbUser.credits;
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
            {dbUser.credits}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            残り{credits}クレジット
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
            {dbUser.subscriptionStatus}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">アクティブ</p>
        </CardContent>
      </Card>
    </div>
  );
}
