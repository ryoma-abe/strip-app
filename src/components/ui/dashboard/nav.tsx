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
        <Button asChild className="w-full mt-4" variant="premium">
          <Link href="/dashboard/plan">アップグレード</Link>
        </Button>
      )}
    </nav>
  );
}
