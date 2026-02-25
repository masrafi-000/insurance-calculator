// components/ds/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/shared";
import { ITNavItems } from "@/types/shared";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 items-center justify-between px-6 md:px-12 lg:px-18">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group z-50 text-xl xl:text-2xl font-bold tracking-wide text-foreground"
        >
          <ShieldCheck className="w-6 h-6 text-primary" />
          Insurance Check
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex gap-4 xl:gap-8">
            {navItems.map((item: ITNavItems) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground relative",
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-5.25 left-0 h-0.5 w-full bg-primary" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3 border-l pl-6 border-border/60">
            <Link href="/calculate">
              <Button
                size="sm"
                className="rounded-full px-5 h-9 font-medium shadow-sm"
              >
                Calculate Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-75 sm:w-100 p-0 border-r-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>

              <div className="flex flex-col h-full px-4 xl:px-6 py-6">
                {/* Mobile Logo Section */}
                <div className="h-16 flex items-center mb-12">
                  <Link
                    href="/"
                    className="flex items-center gap-2 group z-50 text-xl xl:text-2xl font-bold tracking-wide text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    Insurance Check
                  </Link>
                </div>

                {/* Nav Links */}
                <div className="mobile-link flex flex-col space-y-4">
                  {navItems.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "mobile-link text-4xl font-light tracking-tighter transition-all duration-300 hover:italic hover:translate-x-2",
                          isActive
                            ? "text-primary font-normal translate-x-2 italic"
                            : "text-foreground/90",
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  <div className="pt-8">
                    <Link href="/calculate" onClick={() => setIsOpen(false)}>
                      <Button
                        size="lg"
                        className="w-full rounded-full font-medium h-14 text-lg"
                      >
                        Calculate Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
