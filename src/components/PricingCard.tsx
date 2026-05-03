"use client";

import { motion } from "framer-motion";
import { transitionStagger } from "@/lib/transitions";

interface PricingCardProps {
  /** Un rând sau mai multe (ex. weekend + seară) */
  lines: string[];
  price: number;
  period?: string;
  index?: number;
}

export default function PricingCard({
  lines,
  price,
  period = "oră",
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      {...transitionStagger(index)}
      className="relative mx-auto w-full max-w-lg rounded-xl border border-primary bg-primary/5 shadow-glow px-4 py-3 sm:px-5 sm:py-3.5 text-center min-h-[108px] sm:min-h-[120px] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">{price}</span>
          <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">RON / {period}</span>
        </div>
        <div className="space-y-0.5">
          {lines.map((line) => (
            <p key={line} className="text-xs sm:text-sm font-medium text-gray-300 leading-tight whitespace-nowrap max-sm:whitespace-normal">
              {line}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
