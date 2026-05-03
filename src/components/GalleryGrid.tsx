"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { transitionStagger, viewportDefault } from "@/lib/transitions";

const galleryImages = [
  { src: "/gallery-1.png", alt: "Jucător pe terenul de padel" },
  { src: "/gallery-2.png", alt: "Jucător pregătit de joc pe terenul de padel" },
  { src: "/gallery-5.png", alt: "Teren de padel indoor" },
  { src: "/gallery-4.png", alt: "Meci de padel pe teren indoor" },
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const open = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px]">
        {galleryImages.map((img, i) => {
          /* gallery-1 (stânga) și gallery-5 (dreapta) la fel de înalte – span 2 rânduri */
          const tall = i === 0 || i === 2;
          return (
          <motion.button
            key={`${img.src}-${i}`}
            type="button"
            initial={{ opacity: 1, y: 0, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportDefault}
            transition={transitionStagger(i).transition}
            onClick={() => open(i)}
            className={`group relative overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary ${tall ? "row-span-2" : ""}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-primary/90 p-3 text-white shadow-glow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </span>
            </div>
          </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/10"
              aria-label="Închide"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                width={800}
                height={600}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
