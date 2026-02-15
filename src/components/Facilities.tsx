"use client";

import SectionWrapper from "./SectionWrapper";
import FacilityCard from "./FacilityCard";
import {
  Building2, Moon, Shirt, Car, Sofa, Sparkles,
} from "lucide-react";

const facilities = [
  { icon: <Building2 className="h-8 w-8" />, title: "Terenuri indoor", description: "Terenuri acoperite pentru joc indiferent de vreme." },
  { icon: <Moon className="h-8 w-8" />, title: "Iluminat nocturn", description: "Jucați seara sub reflectoare profesionale." },
  { icon: <Shirt className="h-8 w-8" />, title: "Vestiar", description: "Vestiar pentru schimbare echipamentului." },

  { icon: <Car className="h-8 w-8" />, title: "Parcare", description: "Parcare disponibilă în vecinătatea incintei." },
  { icon: <Sofa className="h-8 w-8" />, title: "Zonă lounge", description: "Spațiu de relaxare înainte sau după joc." },
  { icon: <Sparkles className="h-8 w-8" />, title: "Echipament", description: "Posibilitate închirieri rachete și mingi." },
];

export default function Facilities() {
  return (
    <SectionWrapper id="facilitati" title="Facilități" subtitle="Tot ce ai nevoie pentru o experiență de joc de top">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((f, i) => (
          <FacilityCard key={f.title} index={i} {...f} />
        ))}
      </div>
    </SectionWrapper>
  );
}
