import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import ProfileSection from "@/components/ui/dashboard/settings/profile-section";
import SubscriptionSettingsForm from "./subscription-settings-form";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const SettingsPage = async () => {
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

  const email = user.emailAddresses[0].emailAddress;
  const name = user.firstName + " " + user.lastName;
  const subscriptionStatus = dbUser.subscriptionStatus;
  const nextBillingDate = dbUser.subscription?.stripeCurrentPeriodEnd;

  return (
    <PageContainer>
      <PageHeader
        title="設定"
        description="ここでは、アカウントの設定を行うことができます。"
      />
      {/* アカウントの確認 */}
      <div className="max-w-2xl">
        <ProfileSection
          email={email}
          name={name}
          subscriptionStatus={subscriptionStatus}
          nextBillingDate={nextBillingDate}
        />
      </div>
      {/* サブスクリプションの確認 */}
      <div className="max-w-2xl">
        <SubscriptionSettingsForm user={dbUser} />
      </div>
    </PageContainer>
  );
};

export default SettingsPage;
