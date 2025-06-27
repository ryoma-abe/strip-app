import { createUser, deleteUser, updateUser } from "@/lib/users";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    // ユーザー作成
    if (evt.type === "user.created") {
      try {
        const user = await createUser(
          evt.data.id,
          evt.data.email_addresses[0].email_address
        );
        return NextResponse.json({ user }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
    }

    // ユーザー更新
    if (evt.type === "user.updated") {
      try {
        const user = await updateUser(
          evt.data.id,
          evt.data.email_addresses[0].email_address
        );
        return NextResponse.json({ user }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
    }

    // ユーザー削除
    if (evt.type === "user.deleted") {
      if (!evt.data.id) {
        throw new Error("User ID is required");
      }
      try {
        const user = await deleteUser(evt.data.id);
        return NextResponse.json({ user }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
