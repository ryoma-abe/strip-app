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
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-foreground">プロフィール</h2>
      <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card via-card to-accent/5 p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">名前</h3>
            <p className="text-base font-medium text-foreground">{name}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">メールアドレス</h3>
            <p className="text-base font-medium text-foreground">{email}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">現在のプラン</h3>
            <div className="flex items-center gap-3">
              <p className="text-base font-medium text-foreground">{subscriptionStatus}プラン</p>
              {subscriptionStatus !== "FREE" && (
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  アクティブ
                </span>
              )}
            </div>
            {nextBillingDate && (
              <p className="text-sm text-muted-foreground">
                次回更新日: {nextBillingDate.toLocaleDateString("ja-JP")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
