/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { generateImage } from "@/actions/actions";
import { generateImageState } from "@/types/actions";
import { Download, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../loading-spinner";

const initialState: generateImageState = {
  status: "idle",
};

export default function ImageGenerator() {
  const [state, formAction, pending] = useActionState(
    generateImage,
    initialState
  );

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
          <Button
            type="submit"
            disabled={pending}
            className={cn("w-full duration-200", pending && "bg-primary/80")}
          >
            {pending ? (
              <LoadingSpinner />
            ) : (
              <>
                <ImageIcon className="mr-2" />
                画像を生成する
              </>
            )}
          </Button>
        </form>
      </div>
      {state.imageUrl && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="aspect-video relative">
              <img
                src={state.imageUrl}
                alt="Generated Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Button className="w-full" variant={"secondary"}>
            <Download className="mr-2" />
            ダウンロード
          </Button>
        </div>
      )}
    </div>
  );
}
