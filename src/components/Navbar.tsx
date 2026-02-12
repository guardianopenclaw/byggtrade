"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#kolleksjoner", label: "Kolleksjoner" },
  { href: "#fordeler", label: "Fordeler" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#inspirasjon", label: "Inspirasjon" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="text-white text-2xl font-light tracking-[0.2em] uppercase">
          Nordic<span className="font-semibold">Floor</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-[#c8a87c] text-sm tracking-wider uppercase transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-4 px-6 py-2.5 bg-[#c8a87c] text-[#1a1a1a] text-sm font-medium tracking-wider uppercase hover:bg-[#b8956a] transition-colors duration-200"
          >
            Få tilbud
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-md px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/70 hover:text-[#c8a87c] text-sm tracking-wider uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="block mt-4 px-6 py-2.5 bg-[#c8a87c] text-[#1a1a1a] text-sm font-medium tracking-wider uppercase text-center"
          >
            Få tilbud
          </a>
        </div>
      )}
    </nav>
  );
}
