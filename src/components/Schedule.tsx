"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { transitionItem } from "@/lib/transitions";

const schedule = [
  { days: "Luni – Vineri", hours: "16:00 – 22:00" },
  { days: "Sâmbătă – Duminică", hours: "09:00 – 22:00" },
];

export default function Schedule() {
  return (
    <SectionWrapper id="program" title="Program" subtitle="Orele de deschidere ale clubului">
      <motion.div
        {...transitionItem(0)}
        className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-dark-50/80 shadow-xl"
      >
        <div className="border-b border-white/10 bg-primary/10 px-6 py-4">
          <h3 className="font-display text-lg font-semibold text-white text-center">
            Program săptămânal
          </h3>
        </div>
        <ul className="divide-y divide-white/10">
          {schedule.map((row) => (
            <li key={row.days} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-white/5">
              <span className="font-medium text-white">{row.days}</span>
              <span className="text-primary font-semibold tabular-nums">{row.hours}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </SectionWrapper>
  );
}
