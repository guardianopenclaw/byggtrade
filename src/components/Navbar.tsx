"use client";

import { useState } from "react";

const links = [
  { href: "#hjem", label: "Hjem" },
  { href: "#produkter", label: "Produkter" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#prosjekter", label: "Prosjekter" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-50/90 backdrop-blur-md border-b border-warm-200/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hjem" className="text-xl font-bold tracking-tight text-warm-800">
          Byggtrade
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-warm-600 hover:text-warm-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-warm-700"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warm-50 border-t border-warm-200 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-warm-600 hover:text-warm-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
