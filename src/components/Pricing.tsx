"use client";

import SectionWrapper from "./SectionWrapper";
import PricingCard from "./PricingCard";

const pricing = [
  {
    title: "Prețul afișat este per oră pentru terenul de padel și se poate împărti la 4 jucători",
    price: 120,
    period: "oră",
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="preturi" title="Prețuri" subtitle="Rezervările se fac via Playtomic.">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {pricing.map((p, i) => (
            <PricingCard key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
