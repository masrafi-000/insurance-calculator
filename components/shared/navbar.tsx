// components/ds/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data/shared";
import { ITNavItems } from "@/types/shared";
import { Menu, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Only handle hash links on the same page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(2);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
        // Update URL hash without jumping
        window.history.pushState(null, "", href);
      }
    } else if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-all">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12 lg:px-18">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group z-50 text-xl xl:text-2xl font-bold tracking-wide text-foreground"
          onClick={(e) => handleScroll(e, "/")}
        >
          <ShieldCheck className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          Insurance Check
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex gap-4 xl:gap-8">
            {navItems.map((item: ITNavItems) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3 border-l pl-6 border-border/60">
            <Link
              href="/#calculator"
              onClick={(e) => handleScroll(e, "/#calculator")}
            >
              <Button
                size="sm"
                className="rounded-full px-5 h-9 font-medium shadow-sm hover:scale-105 transition-transform"
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
                    onClick={(e) => handleScroll(e, "/")}
                  >
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    Insurance Check
                  </Link>
                </div>

                {/* Nav Links */}
                <div className="mobile-link flex flex-col space-y-4">
                  {navItems.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="mobile-link text-4xl font-light tracking-tighter text-foreground/90 transition-all duration-300 hover:italic hover:translate-x-2"
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  <div className="pt-8">
                    <Link
                      href="/#calculator"
                      onClick={(e) => handleScroll(e, "/#calculator")}
                    >
                      <Button
                        size="lg"
                        className="w-full rounded-full font-medium h-14 text-lg hover:scale-[1.02] transition-transform"
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
