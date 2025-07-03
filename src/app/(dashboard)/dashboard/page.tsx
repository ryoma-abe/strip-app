import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import StatsCards from "@/components/ui/dashboard/stats-cards";
import QuickActions from "@/components/ui/dashboard/quick-actions";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    return <div>ログインしてください</div>;
  }
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: {
      subscription: true,
    },
  });
  if (!dbUser) {
    return <div>ユーザーが見つかりません</div>;
  }
  return (
    <PageContainer>
      <PageHeader
        title="ダッシュボード"
        description="ここでは、ツールの使用状況を確認することができます。"
      />

      {/* Stats Cards */}
      <StatsCards dbUser={dbUser} />

      {/* Quick Actions */}
      <QuickActions />
    </PageContainer>
  );
}
