"use client";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import Link from "next/link";

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
            <Button>
              <Link href="/dashboard/plan">サブスクリプション購入</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionSettingsForm;
