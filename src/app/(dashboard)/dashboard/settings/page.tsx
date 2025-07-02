import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import ProfileSection from "@/components/ui/dashboard/settings/profile-section";
import SubscriptionSettingsForm from "./subscription-settings-form";

const SettingsPage = () => {
  return (
    <PageContainer>
      <PageHeader
        title="設定"
        description="ここでは、アカウントの設定を行うことができます。"
      />
      {/* アカウントの確認 */}
      <div className="max-w-2xl">
        <ProfileSection />
      </div>
      {/* サブスクリプションの確認 */}
      <div>
        <SubscriptionSettingsForm />
      </div>
    </PageContainer>
  );
};

export default SettingsPage;
