"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Determine active theme on load
    const stored = localStorage.getItem("sp-theme") as "dark" | "light" | null;
    const initialTheme = stored || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("sp-theme", nextTheme);
  };

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-card-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-tight hover:opacity-75 transition-opacity"
        >
          Satyam Pariyar
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden sm:flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-foreground ${
                    isActive ? "text-foreground font-semibold" : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-wider bg-foreground text-background px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
            >
              Say hello →
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-sm border border-card-border hover:bg-card transition-colors cursor-pointer text-foreground"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav indicator bar for smaller viewports */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-card-border py-3 px-6 flex items-center justify-around z-50">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-wider ${
                isActive ? "text-foreground font-bold" : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          key="/contact"
          href="/contact"
          className={`text-xs font-medium uppercase tracking-wider ${
            pathname === "/contact" ? "text-foreground font-bold" : "text-secondary"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
