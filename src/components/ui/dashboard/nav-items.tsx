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
            variant={pathName === item.href ? "default" : "ghost"}
            className={`w-full justify-start gap-2 ${
              pathName === item.href 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700" 
                : "hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300"
            }`}
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
