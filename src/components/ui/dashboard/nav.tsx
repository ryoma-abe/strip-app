import Link from "next/link";
import { Button } from "../button";
import CreditDisplay from "./credit-display";
import NavItems from "./nav-items";

export default function DashboardNavigation() {
  return (
    <nav>
      <NavItems />
      <CreditDisplay />
      <Button asChild className="w-full mt-4" variant="premium">
        <Link href="/dashboard/plan">アップグレード</Link>
      </Button>
    </nav>
  );
}
