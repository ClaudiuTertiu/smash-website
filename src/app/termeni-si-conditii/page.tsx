import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termeni și condiții | Smash Padel Focșani",
  description:
    "Termenii și condițiile de utilizare pentru site-ul Smash Padel Focșani și informațiile despre rezervări și conținutul publicat.",
};

const sections = [
  {
    title: "1. Informații generale",
    content: [
      "Prezenta pagină stabilește condițiile de utilizare a site-ului smashpadel.ro și a informațiilor publicate sub brandul Smash Padel Focșani.",
      "Prin accesarea și utilizarea acestui site, accepți să respecți acești termeni și condiții. Dacă nu ești de acord cu aceștia, te rugăm să nu folosești site-ul.",
    ],
  },
  {
    title: "2. Scopul site-ului",
    content: [
      "Site-ul are rol informativ și de prezentare pentru activitatea clubului Smash Padel Focșani, inclusiv detalii despre facilități, program, prețuri, modalități de contact și rezervare.",
      "Informațiile publicate sunt oferite cu bună-credință și pot fi actualizate, modificate sau completate fără o notificare prealabilă.",
    ],
  },
  {
    title: "3. Rezervări și servicii terțe",
    content: [
      "Rezervările pentru terenuri pot fi realizate prin intermediul aplicației Playtomic sau al altor servicii externe indicate pe site. Utilizarea acestor servicii poate fi supusă unor termeni și politici proprii, stabilite de operatorii lor.",
      "Smash Padel Focșani nu poate fi responsabil pentru indisponibilitatea, erorile sau politicile comerciale ale platformelor terțe folosite pentru rezervare sau plată.",
    ],
  },
  {
    title: "4. Conținut și proprietate intelectuală",
    content: [
      "Textele, imaginile, elementele grafice, logo-urile și structura site-ului aparțin Smash Padel Focșani sau sunt utilizate în baza unor drepturi legitime de folosire.",
      "Este interzisă copierea, distribuirea, modificarea sau reutilizarea conținutului site-ului în scop comercial fără acordul prealabil, expres și scris al titularului drepturilor.",
    ],
  },
  {
    title: "5. Limitarea răspunderii",
    content: [
      "Depunem eforturi rezonabile pentru ca informațiile afișate pe site să fie corecte și actualizate. Cu toate acestea, nu garantăm că toate informațiile sunt în permanență complete, lipsite de erori sau disponibile fără întreruperi.",
      "Utilizarea site-ului se face pe propria răspundere. Smash Padel Focșani nu răspunde pentru prejudicii directe sau indirecte rezultate din utilizarea site-ului ori din imposibilitatea temporară de accesare a acestuia.",
    ],
  },
  {
    title: "6. Link-uri externe",
    content: [
      "Site-ul poate conține link-uri către platforme sau servicii externe, precum Playtomic, Google Maps sau rețele sociale. Aceste link-uri sunt oferite pentru confortul utilizatorilor.",
      "Nu controlăm conținutul sau politicile acestor site-uri terțe și nu ne asumăm răspunderea pentru conținutul, disponibilitatea sau practicile lor de confidențialitate.",
    ],
  },
  {
    title: "7. Contact",
    content: [
      "Pentru întrebări despre acești termeni și condiții sau pentru informații suplimentare despre activitatea clubului, ne poți contacta la adresa contact@smashpadel.ro, la numărul +40 747 287 989 sau la locația din Bd. București nr. 16A, Focșani, Vrancea.",
    ],
  },
] as const;

export default function TermeniSiConditiiPage() {
  return (
    <LegalPage
      title="Termeni și condiții"
      updatedAt="8 mai 2026"
      intro="Acești termeni și condiții descriu regulile generale de utilizare a site-ului Smash Padel Focșani și modul în care pot fi accesate informațiile și serviciile prezentate online."
      sections={[...sections]}
    />
  );
}
