"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Users, Trophy, Smile } from "lucide-react";
import { transitionItem, transitionStagger } from "@/lib/transitions";

const values = [
  {
    icon: <Users className="h-10 w-10" />,
    title: "Comunitate",
    description: "Un loc unde pasionații de padel se întâlnesc, joacă și se împrietenesc.",
  },
  {
    icon: <Trophy className="h-10 w-10" />,
    title: "Performanță",
    description: "Terenuri și condiții profesionale pentru antrenamente și meciuri serioase.",
  },
  {
    icon: <Smile className="h-10 w-10" />,
    title: "Distracție",
    description: "Padel-ul e sport accesibil și distractiv pentru toată familia.",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="despre"
      title="Despre club"
      subtitle="Primul club de padel din Focșani"
    >
      <motion.div
        {...transitionItem(0)}
        className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-dark-50/80 p-8 text-center backdrop-blur-sm"
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Smash Padel este primul club dedicat padel-ului din Focșani.
          Ne-am deschis cu misiunea de a aduce acest sport din ce în ce mai popular în oraș și de a
          oferi un spațiu modern, prietenos și bine echipat pentru jucători de toate nivelurile.
          Fie că vii pentru antrenament, pentru un meci cu prietenii sau pentru cursuri, ești bine
          venit în comunitatea noastră.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            {...transitionStagger(i)}
            className="rounded-2xl border border-white/10 bg-dark-50/60 p-6 text-center transition-all hover:border-primary/20 hover:shadow-glow-sm"
          >
            <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
              {item.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
