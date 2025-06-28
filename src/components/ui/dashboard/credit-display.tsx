import { getUserCredits } from "@/lib/credit";
import { currentUser } from "@clerk/nextjs/server";
import { Loader2, Lock } from "lucide-react";
import { Suspense } from "react";

const CreditsContent = async () => {
  const credits = await getUserCredits();
  return (
    <div className="border rounded-lg bg-muted p-2">
      <div className="text-sm font-medium">残りクレジット</div>
      <div className="text-sm font-medium mt-2">{credits}クレジット</div>
    </div>
  );
};

const CreditDisplay = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="border rounded-lg bg-muted py-4 px-2 flex items-center gap-2">
        <Lock className="size-4" />
        <div className="text-sm font-medium">ログインが必要です</div>
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        <div className="border rounded-lg bg-muted py-4 px-2 flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          <div className="text-sm font-medium">読込中...</div>
        </div>
      }
    >
      <CreditsContent />
    </Suspense>
  );
};

export default CreditDisplay;
