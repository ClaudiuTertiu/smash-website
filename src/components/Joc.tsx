"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { transitionSection, viewportDefault } from "@/lib/transitions";

const VIDEO_EMBED_URL = "https://www.youtube.com/embed/-f1U4r9UeTU";

export default function Joc() {
  return (
    <SectionWrapper
      id="joc"
      title="Reguli joc"
      subtitle="Cum se joacă padel — vezi regulile în videoclip"
      className="border-t border-white/10 bg-dark"
    >
      <motion.div
        initial={transitionSection.initial}
        whileInView={transitionSection.whileInView}
        viewport={viewportDefault}
        transition={transitionSection.transition}
        className="mx-auto max-w-4xl"
      >
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-dark-50">
          {VIDEO_EMBED_URL ? (
            <iframe
              src={VIDEO_EMBED_URL}
              title="Reguli joc padel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center text-gray-500">
              <svg
                className="h-16 w-16 shrink-0 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="max-w-sm text-sm">
                Adaugă URL-ul videoclipului în <code className="rounded bg-white/10 px-1.5 py-0.5 text-gray-400">VIDEO_EMBED_URL</code> în{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-gray-400">src/components/Joc.tsx</code>
              </p>
              <p className="text-xs text-gray-600">
                Exemplu YouTube: <span className="font-mono text-gray-500">https://www.youtube.com/embed/ID_VIDEO</span>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
