"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SearchIcon } from "@/assets/icons";

const NAVIGATION_ITEMS = [
  { name: "HOME", href: "#" },
  { name: "GAME", href: "#" },
  { name: "INFOR", href: "#" },
  { name: "NEWS", href: "#" },
  { name: "PROMOTIONS", href: "#" },
  { name: "VIP", href: "#" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-tech-grey",
        scrolled
          ? "bg-tech-dark-blue/95 backdrop-blur-sm shadow-md py-2"
          : "bg-tech-dark-blue py-3",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <div className="flex items-center md:gap-[57px] gap-0">
          <MobileMenu />
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="E-TECH"
                className="w-10 h-[18px] md:w-[68px] md:h-[30px]"
                width={68}
                height={30}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <SearchIcon className="cursor-pointer mr-2" />
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-white text-sm font-medium relative group",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-tech-pink",
                  "after:transition-all after:duration-300 hover:after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          {/* Login/Registration buttons */}
          <Button
            variant="outline"
            className="text-white bg-tech-darker-blue border-none text-sm py-1 px-3 h-[34px] transition-all duration-300 hover:bg-tech-darker-blue/50"
            size="sm"
          >
            LOGIN
          </Button>
          <Button
            className={cn(
              "text-white text-sm py-1 px-3 h-[34px] transition-all duration-300 bg-tech-green hover:bg-tech-darker-green"
            )}
            size="sm"
          >
            REGISTRATION
          </Button>
        </div>
      </div>
    </header>
  );
}
