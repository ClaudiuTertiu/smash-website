"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#despre", label: "Despre" },
  { href: "#facilitati", label: "Facilități" },
  { href: "#preturi", label: "Prețuri" },
  { href: "#program", label: "Program" },
  { href: "#rezervari", label: "Rezervări" },
  { href: "#galerie", label: "Galerie" },
  { href: "#joc", label: "Reguli joc" },
  { href: "#contact", label: "Contact" },
];

const BOOK_COURT_URL = "https://playtomic.io";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#020101] backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300"
    >
      <nav className="flex w-full items-center justify-between h-[72px] pl-0 pr-4 sm:pr-6 lg:pr-8">
        <Link href="#" className="relative flex items-center shrink-0 h-full w-[252px] sm:w-[288px] py-0">
          <Image
            src="/logo.png"
            alt="Smash Padel Focșani"
            width={360}
            height={126}
            className="h-full w-auto max-w-[252px] sm:max-w-[288px] object-contain object-left opacity-0 transition-opacity duration-300"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="Smash Padel Focșani"
            width={360}
            height={126}
            className="h-full w-auto max-w-[252px] sm:max-w-[288px] object-contain object-left opacity-100 transition-opacity duration-300"
          />
        </Link>

        {/* Desktop nav – poziționat mai la stânga */}
        <div className="hidden lg:flex items-center gap-1 mr-8 xl:mr-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-1.5 text-lg font-medium text-gray-300 transition-colors hover:text-primary hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOK_COURT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-lg bg-primary px-5 py-2 text-lg font-semibold text-white shadow-glow-sm transition-all hover:bg-primary-400 hover:shadow-glow"
          >
            Rezervă teren
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
          aria-label="Meniu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-dark-50 border-t border-white/5"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BOOK_COURT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-primary px-4 py-3 text-center font-semibold text-white"
              >
                Rezervă teren
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
