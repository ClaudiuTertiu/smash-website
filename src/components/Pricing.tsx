"use client";

import SectionWrapper from "./SectionWrapper";
import PricingCard from "./PricingCard";

const pricing = [
  {
    lines: ["Luni - Vineri (14:00 - 18:00)"],
    price: 110,
    period: "oră",
  },
  {
    lines: ["Luni - Vineri (18:00 - 22:00)", "Sâmbătă - Duminică (09:00 - 22:00)"],
    price: 130,
    period: "oră",
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="preturi" title="Prețuri" subtitle="Rezervările se fac via Playtomic.">
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex flex-col gap-4">
          {pricing.map((p, i) => (
            <PricingCard key={p.lines.join("|")} index={i} {...p} />
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
          Prețul afișat este per oră pentru terenul de padel și se poate împărti la 4 jucători.
        </p>
      </div>
    </SectionWrapper>
  );
}
