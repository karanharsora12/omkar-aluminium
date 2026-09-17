"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { label: "Aluminium Doors", href: "#products" },
  { label: "Aluminium Windows", href: "#products" },
  { label: "Sliding Systems", href: "#products" },
  { label: "Partitions", href: "#products" },
  { label: "Facades", href: "#products" },
  { label: "Custom Work", href: "#products" },
];

const contactLinks = [
  { icon: Phone, label: "+91-XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
  {
    icon: MessageCircle,
    label: "+91-XXXXXXXXXX",
    href: "https://wa.me/91XXXXXXXXXX",
  },
  { icon: Mail, label: "info@omkeraluminium.com", href: "mailto:info@omkeraluminium.com" },
  { icon: MapPin, label: "Your Business Address", href: null },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-brand-accent">
                <span className="text-sm font-bold text-white">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight tracking-tight text-white">
                  OMKAR
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-aluminium-dark">
                  ALUMINIUM
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Precision in Aluminium. Built to Last. Premium aluminium solutions
              for modern homes, commercial spaces and architectural projects.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-4">
              {contactLinks.map((link) => (
                <li key={link.label} className="flex items-start gap-3">
                  <link.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                  {link.href ? (
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-white/50 transition-colors hover:text-brand-accent"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-sm text-white/50">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Omkar Aluminium. All Rights
              Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-white/30 transition-colors hover:text-white/60"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-white/30 transition-colors hover:text-white/60"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
