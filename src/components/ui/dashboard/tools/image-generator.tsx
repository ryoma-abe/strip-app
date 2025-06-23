import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ImageGenerator() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form className="space-y-4">
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
