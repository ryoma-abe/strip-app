type ProfileSectionProps = {
  email: string;
  name: string;
  subscriptionStatus: string;
  nextBillingDate?: Date;
};

const ProfileSection = ({
  email,
  name,
  subscriptionStatus,
  nextBillingDate,
}: ProfileSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">プロフィール</h2>
      <div className="flex flex-col gap-4 border border-gray-300 p-4 rounded-sm">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">名前</h3>
          <p className="text-sm text-gray-500">{name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">メールアドレス</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">現在のプラン</h3>
          <p className="text-sm text-gray-500">{subscriptionStatus}プラン</p>
          <p className="text-sm text-gray-500">
            次回更新日: {nextBillingDate?.toLocaleDateString("ja-JP")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
