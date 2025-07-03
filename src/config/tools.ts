import BackgroundRemover from "@/components/ui/dashboard/tools/background-remover";
import ImageGenerator from "@/components/ui/dashboard/tools/image-generator";
import Optimize from "@/components/ui/dashboard/tools/optimize";

export const tools = {
  "image-generator": {
    title: "画像生成",
    description: "画像生成ページです",
    component: ImageGenerator,
  },
  "remove-bg": {
    title: "背景削除",
    description: "背景削除ページです",
    component: BackgroundRemover,
  },
  optimize: {
    title: "画像圧縮",
    description: "画像圧縮ページです",
    component: Optimize,
  },
};

// tools オブジェクトにあるキーだけを型として抽出し、他の文字列を弾きたい
export type ToolType = keyof typeof tools;
