"use client";
import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function AuthButton() {
  const { userId } = useAuth();

  if (userId) {
    return (
      <UserButton appearance={{ elements: { avatarBox: ".cl-avatarBox" } }} />
    );
  }

  return (
    <div className="flex items-center gap-4">
      <SignInButton mode="modal" forceRedirectUrl="/dashboard">
        <Button variant="secondary">ログイン</Button>
      </SignInButton>
      <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
        <Button>新規登録</Button>
      </SignUpButton>
    </div>
  );
}
