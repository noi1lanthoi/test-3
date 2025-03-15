"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogoIcon, MenuBurger } from "@/assets/icons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#" },
    { label: "GAME", href: "#" },
    { label: "INFOR", href: "#" },
    { label: "NEWS", href: "#" },
    { label: "PROMOTIONS", href: "#" },
    { label: "VIP", href: "#" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-7 h-7 text-white hover:bg-transparent !justify-start"
        >
          <MenuBurger className="h-7 w-7 transition-transform duration-300 hover:scale-110" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-tech-darker-blue border-tech-darker-blue"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center text-white">
            <LogoIcon className="w-10 h-10" />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-white text-lg font-medium hover:text-tech-green transition-all",
                "transform hover:translate-x-2",
                "opacity-0 animate-fadeIn"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
