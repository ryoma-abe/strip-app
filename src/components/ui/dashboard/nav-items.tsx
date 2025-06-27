"use client";
import { navItems } from "@/config/nav";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import AuthButton from "@/components/auth/auth-button";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathName = usePathname();
  return (
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
      <li className="block md:hidden">
        <AuthButton />
      </li>
    </ul>
  );
}
