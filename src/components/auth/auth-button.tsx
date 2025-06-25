import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";

export default async function AuthButton() {
  const { userId } = await auth();

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
