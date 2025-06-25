/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { removeBackground } from "@/actions/actions";
import { generateImageState } from "@/types/actions";
import { Download, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../loading-spinner";

const initialState: generateImageState = {
  status: "idle",
};

export default function BackgroundRemover() {
  const [state, formAction, pending] = useActionState(
    removeBackground,
    initialState
  );

  const handleDownload = () => {
    if (!state.processedImage) return;
    try {
      const base64Data = state.processedImage?.split(",")[1];
      const blob = new Blob([Buffer.from(base64Data, "base64")], {
        type: "image/png",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${state.keyword}.png`;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
      // toast("ダウンロード完了", {
      //   description: "ダウンロード完了しました",
      // });
    } catch (error) {
      console.error("ダウンロードエラー", error);
      // toast("エラー", {
      //   description: "ダウンロードに失敗しました",
      // });
    }
  };
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">ファイルをアップロード</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="w-full"
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
                <Layers className="mr-2" />
                背景を削除
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
          <Button
            className="w-full"
            variant={"secondary"}
            onClick={handleDownload}
          >
            <Download className="mr-2" />
            ダウンロード
          </Button>
        </div>
      )}
    </div>
  );
}
