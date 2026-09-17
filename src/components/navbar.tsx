"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="mr-2 flex h-9 w-9 items-center justify-center rounded bg-navy">
                  <span className="text-sm font-bold text-white">OA</span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={cn(
                      "text-lg font-bold leading-tight tracking-tight transition-colors duration-300",
                      scrolled ? "text-navy" : "text-white"
                    )}
                  >
                    OMKAR
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                      scrolled ? "text-aluminium-dark" : "text-aluminium-light"
                    )}
                  >
                    ALLUMINIUM
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                    scrolled
                      ? "text-graphite hover:text-navy"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="tel:+919427751630"
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300",
                  scrolled
                    ? "text-graphite hover:text-navy"
                    : "text-white/80 hover:text-white"
                )}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Call Now</span>
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-bold text-navy transition-all duration-300 hover:bg-brand-yellow-light hover:shadow-lg"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden",
                scrolled
                  ? "text-navy hover:bg-surface"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-lg md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="text-2xl font-semibold text-white transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-6 flex flex-col gap-3"
              >
                <a
                  href="tel:+919427751630"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919427751630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-green-600 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
