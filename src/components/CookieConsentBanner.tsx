"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "smashpadel-cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      setVisible(true);
    }
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#090909]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-lg font-semibold text-white">Folosim cookies</p>
          <p className="mt-1 text-sm leading-6 text-gray-300">
            Site-ul folosește cookies și tehnologii similare pentru funcționare, analiză de bază și pentru
            integrarea unor servicii terțe precum Google Maps sau Google Fonts. Poți afla mai multe în{" "}
            <Link href="/politica-de-cookies" className="text-primary transition-colors hover:text-primary-300">
              Politica de cookies
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-white/30 hover:bg-white/5"
          >
            Refuză
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400 hover:shadow-glow-lg"
          >
            Acceptă
          </button>
        </div>
      </div>
    </div>
  );
}

