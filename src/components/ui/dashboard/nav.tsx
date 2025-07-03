import Link from "next/link";
import { Button } from "../button";
import CreditDisplay from "./credit-display";
import NavItems from "./nav-items";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardNavigation() {
  const user = await currentUser();
  return (
    <nav>
      <NavItems />
      <CreditDisplay />
      {user && (
        <Button asChild className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700" variant="default">
          <Link href="/dashboard/plan">アップグレード</Link>
        </Button>
      )}
    </nav>
  );
}
