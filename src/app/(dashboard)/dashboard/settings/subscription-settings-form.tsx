"use client";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";

type SubscriptionSettingsFormProps = {
  user: User;
};

const SubscriptionSettingsForm = ({ user }: SubscriptionSettingsFormProps) => {
  const handleManageSubscription = async () => {
    return;
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-6">
        {user.subscriptionStatus !== "FREE" ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              サブスクリプションの管理をします。
            </p>
            <Button onClick={handleManageSubscription}>
              サブスクリプション管理
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              サブスクリプションを購入してください。
            </p>
            <Button>サブスクリプション購入</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionSettingsForm;
