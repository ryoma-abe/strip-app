"use client";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";

type SubscriptionSettingsFormProps = {
  user: User;
};

const SubscriptionSettingsForm = ({ user }: SubscriptionSettingsFormProps) => {
  const handleManageSubscription = async () => {
    try {
      const response = await fetch("/api/create-portal-session", {
        method: "POST",
      });
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card via-card to-accent/5 p-8 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {user.subscriptionStatus !== "FREE" ? (
          <div className="relative space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                サブスクリプション管理
              </h3>
              <p className="text-sm text-muted-foreground">
                現在のプランの詳細を確認し、変更や解約が可能です。
              </p>
            </div>
            <Button 
              onClick={handleManageSubscription}
              className="bg-primary hover:bg-primary/90 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              管理画面を開く
            </Button>
          </div>
        ) : (
          <div className="relative space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                プレミアムプランにアップグレード
              </h3>
              <p className="text-sm text-muted-foreground">
                より多くの機能をご利用いただけます。
              </p>
            </div>
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-sm transition-all duration-200 hover:shadow-md">
              プランを見る
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionSettingsForm;
