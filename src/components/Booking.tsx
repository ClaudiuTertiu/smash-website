"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transitionSection, transitionStagger, viewportDefault } from "@/lib/transitions";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.playtomic&hl=ro";
const APP_STORE_URL = "https://apps.apple.com/ro/app/playtomic-play-padel/id1242321076";

const steps = [
  { number: 1, title: "Descarcă aplicația Playtomic", hasAppButtons: true },
  { number: 2, title: "Creează-ți un cont" },
  { number: 3, title: "Selectează terenul dorit" },
  { number: 4, title: "Confirmă rezervarea și vino la joacă!" },
];

export default function Booking() {
  return (
    <section
      id="rezervari"
      className="relative overflow-hidden border-t border-white/10 bg-dark pt-28 sm:pt-32 lg:pt-40 pb-40 sm:pb-48 lg:pb-60 xl:pb-80"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Phone image – în spatele textului */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pointer-events-none absolute right-8 top-0 z-0 hidden -translate-y-0 md:block xl:right-12"
          aria-hidden
        >
          <Image
            src="/playtomic-phone.png"
            alt=""
            width={360}
            height={720}
            className="h-auto w-[200px] opacity-75 md:w-[240px] lg:w-[280px] xl:w-[320px]"
            sizes="(max-width: 768px) 0px, (max-width: 1024px) 240px, (max-width: 1280px) 280px, 320px"
          />
        </motion.div>

        {/* Title + steps – deasupra */}
        <div className="relative z-10 max-w-2xl text-left">
          <motion.div
              initial={transitionSection.initial}
              whileInView={transitionSection.whileInView}
              viewport={viewportDefault}
              transition={transitionSection.transition}
              className="text-left"
            >
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-primary">Rezervă-ți</span>{" "}
                <span>terenul</span>
              </h2>
              <p className="mt-4 text-left text-lg text-gray-400 sm:text-xl">
                În doar câțiva pași simpli
              </p>
            </motion.div>

            <ul className="mt-10 space-y-6 sm:mt-12">
              {steps.map((step, i) => (
                <motion.li
                  key={step.number}
                  {...transitionStagger(i)}
                  className="flex gap-3 sm:gap-4 md:gap-5"
                >
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-primary text-sm sm:text-base md:text-lg font-bold text-white">
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white text-base sm:text-lg md:text-xl lg:text-2xl">{step.title}</p>
                    {step.hasAppButtons && (
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <a
                          href={GOOGLE_PLAY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-[#1a1a1a] px-4 py-2.5 text-sm sm:text-base md:text-lg font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-primary/50"
                        >
                          {/* Google Play logo */}
                          <svg className="h-5 w-5 shrink-0" viewBox="0 0 512 512" fill="none">
                            <path d="M270.1 257.4L34.4 501.8c-2.8-4.4-4.4-9.6-4.4-15.2V25.4c0-5.6 1.6-10.8 4.4-15.2l235.7 247.2z" fill="#4DB6AC"/>
                            <path d="M340.4 327.7L270.1 257.4 34.4 11.2c7.6-12 22-16.8 35.2-9.6L340.4 145v182.7z" fill="#DCE775"/>
                            <path d="M340.4 327.7L69.6 471.6c-13.2 7.2-27.6 2.4-35.2-9.6l235.7-204.6 70.3 70.3z" fill="#D32F2F"/>
                            <path d="M482 233.6L340.4 145l-70.3 112.4 70.3 70.3L482 278.4c17.6-10 17.6-34.8 0-44.8z" fill="#FBC02D"/>
                          </svg>
                          Google Play
                        </a>
                        <a
                          href={APP_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-[#1a1a1a] px-4 py-2.5 text-sm sm:text-base md:text-lg font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-primary/50"
                        >
                          {/* Apple logo */}
                          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                          </svg>
                          App Store
                        </a>
                      </div>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
