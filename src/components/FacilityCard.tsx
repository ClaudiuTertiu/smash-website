"use client";

import { motion } from "framer-motion";
import { transitionStagger } from "@/lib/transitions";

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function FacilityCard({ icon, title, description, index = 0 }: FacilityCardProps) {
  return (
    <motion.div
      {...transitionStagger(index)}
      className="group rounded-2xl border border-white/10 bg-dark-50/80 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-glow-sm"
    >
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20 group-hover:shadow-glow-sm">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  );
}
