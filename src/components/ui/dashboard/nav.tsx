import { navItems } from "@/config/nav";
import { Button } from "../button";
import Link from "next/link";

export default function DashboardNavigation() {
  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.title}>
            <Button
              variant="secondary"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href={item.href}>
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.title}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
