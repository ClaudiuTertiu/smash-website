"use client";

import { motion } from "framer-motion";
import { transitionSection, viewportDefault } from "@/lib/transitions";

interface SectionWrapperProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  noPadding,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${noPadding ? "" : "py-16 sm:py-20 lg:py-24"} ${className}`}
    >
      <div className={noPadding ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {(title || subtitle) && (
          <motion.div
            initial={transitionSection.initial}
            whileInView={transitionSection.whileInView}
            viewport={viewportDefault}
            transition={transitionSection.transition}
            className="text-center mb-12 sm:mb-16"
          >
            {title && (
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
