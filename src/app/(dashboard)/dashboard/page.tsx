"use client";
import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import { useUser } from "@clerk/nextjs";
import StatsCards from "@/components/ui/dashboard/stats-cards";
import QuickActions from "@/components/ui/dashboard/quick-actions";

export default function DashboardPage() {
  // これらの値は将来的にAPIから取得する予定
  const userStats = {
    currentCredits: 127,
    totalCredits: 500,
    imagesGenerated: 245,
    timesSaved: 24.5,
    currentPlan: "Pro",
  };
  const { isLoaded, user } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return (
      <div>ログインするとダッシュボードに各種利用状況が表示されます。</div>
    );
  }
  return (
    <PageContainer>
      <PageHeader
        title="ダッシュボード"
        description="ここでは、ツールの使用状況を確認することができます。"
      />

      {/* Stats Cards */}
      <StatsCards userStats={userStats} />

      {/* Quick Actions */}
      <QuickActions />
    </PageContainer>
  );
}
