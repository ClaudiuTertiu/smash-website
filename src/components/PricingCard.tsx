"use client";

import { motion } from "framer-motion";
import { transitionStagger } from "@/lib/transitions";

interface PricingCardProps {
  title: string;
  price: number;
  period?: string;
  description?: string;
  popular?: boolean;
  index?: number;
}

export default function PricingCard({
  title, price, period = "oră", description, popular, index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      {...transitionStagger(index)}
      className="relative rounded-2xl border border-primary bg-primary/5 shadow-glow p-8 sm:p-10 text-center"
    >
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl font-bold text-primary">{price}</span>
        <span className="text-gray-400">RON / {period}</span>
      </div>
      <p className="mt-4 text-sm text-gray-500 italic max-w-md mx-auto">{title}</p>
    </motion.div>
  );
}
