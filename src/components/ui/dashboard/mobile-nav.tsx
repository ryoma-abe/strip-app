import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import { Button } from "../button";
import { Menu } from "lucide-react";
import DashboardNavigation from "./nav";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Menu className="h-4 w-4" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[320px]">
        <SheetHeader className="pb-4">
          <SheetTitle>メニュー</SheetTitle>
        </SheetHeader>
        <div className="pt-2">
          <DashboardNavigation />
        </div>
      </SheetContent>
    </Sheet>
  );
}
