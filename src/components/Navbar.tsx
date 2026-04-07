"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/showcase", label: "Showcase" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-[family-name:var(--font-sora)] tracking-tight">
            <span className="text-accent">AP</span>
            <span className="text-text-primary ml-1.5">Devotion</span>
          </span>
        </Link>

        {/* Desktop nav — centered pill */}
        <div className="hidden md:flex items-center">
          <div
            className="flex items-center gap-1 px-3 py-2 rounded-full border border-white/[0.1]"
            style={{
              background: "rgba(10, 18, 35, 0.65)",
              backdropFilter: "blur(24px) saturate(1.5)",
              WebkitBackdropFilter: "blur(24px) saturate(1.5)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden md:block px-7 py-2.5 rounded-full text-[13px] font-semibold bg-gradient-to-r from-accent to-[#00a3e0] text-background hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.25)]"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-6 mt-2 rounded-2xl border border-white/[0.1] overflow-hidden"
            style={{
              background: "rgba(10, 18, 35, 0.85)",
              backdropFilter: "blur(24px) saturate(1.5)",
              WebkitBackdropFilter: "blur(24px) saturate(1.5)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-[#00a3e0] text-background text-center hover:opacity-90 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
