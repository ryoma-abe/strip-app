"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { generateImage } from "@/actions/actions";
import { generateImageState } from "@/types/actions";

const initialState: generateImageState = {
  status: "idle",
};

export default function ImageGenerator() {
  const [state, formAction] = useActionState(generateImage, initialState);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">キーワード</Label>
            <Input
              id="keyword"
              name="keyword"
              placeholder="作成したい画像のキーワードを入力してください"
              required
            />
          </div>
          <Button type="submit">画像を生成する</Button>
        </form>
      </div>
    </div>
  );
}
