import { getUserCredits } from "@/lib/credit";
import { currentUser } from "@clerk/nextjs/server";
import { Lock } from "lucide-react";

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

  const credits = await getUserCredits();
  return (
    <div className="border rounded-lg bg-muted p-2">
      <div className="text-sm font-medium">残りクレジット</div>
      <div className="text-sm font-medium mt-2">{credits}クレジット</div>
    </div>
  );
};

export default CreditDisplay;
