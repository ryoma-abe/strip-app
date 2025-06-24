import { NextResponse } from "next/server";
import axios from "axios";
import FormData from "form-data";

export async function POST(req: Request) {
  const { keyword } = await req.json();
  try {
    const payload = {
      prompt: { keyword },
      output_format: "png",
    };

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/core`,
      axios.toFormData(payload, new FormData()),
      {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "image/*",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`API error ${response.status}`);
    }
    // Base64エンコーディング
    const baseImage = Buffer.from(response.data).toString("base64");
    const imageUrl = `data:image/png;base64,${baseImage}`;
    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("エラーが発生しました:", error);
    return NextResponse.json(
      { error: "画像生成中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
