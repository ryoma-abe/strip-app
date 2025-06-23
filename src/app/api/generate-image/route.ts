import { NextResponse } from "next/server";

export default function POST(req: Request) {
  try {
    // リクエストの処理をここに記述
  } catch (error) {
    console.error("エラーが発生しました:", error);
    return NextResponse.json(
      { error: "画像生成中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
