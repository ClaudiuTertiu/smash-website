"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/transitions";

const BOOK_COURT_URL = "https://playtomic.io";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-20">
      {/* Background image */}
      <div className="relative">
        <Image
          src="/hero-bg.png"
          alt="Smash Padel – jucători pe teren"
          width={1600}
          height={1000}
          className="h-auto w-full object-contain object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark" />

        {/* Buttons */}
        <div className="absolute z-10 inset-x-0 bottom-[28%] mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65, ease: easeSmooth }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={BOOK_COURT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-glow transition-all duration-300 hover:bg-primary-400 hover:shadow-glow-lg hover:scale-[1.02]"
            >
              Rezervă un teren
            </Link>
            <a
              href="#preturi"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-glow-sm"
            >
              Vezi prețurile
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute z-10 inset-x-0 bottom-[6%] text-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#despre" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
