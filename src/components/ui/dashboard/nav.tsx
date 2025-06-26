"use client";

import { navItems } from "@/config/nav";
import { Button } from "../button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "@/components/auth/auth-button";

export default function DashboardNavigation() {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.title}>
            <Button
              variant={pathName === item.href ? "secondary" : "ghost"}
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
        <li>
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
}
