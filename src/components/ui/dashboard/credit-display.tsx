import { getUserCredits } from "@/lib/credit";
import React from "react";

const CreditDisplay = async () => {
  const credits = await getUserCredits();
  return (
    <div className="border rounded-lg bg-muted p-2">
      <div className="text-sm font-medium">残りクレジット</div>
      <div className="text-sm font-medium mt-2">{credits}クレジット</div>
    </div>
  );
};

export default CreditDisplay;
