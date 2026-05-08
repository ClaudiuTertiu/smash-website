import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termeni si conditii | Smash Padel Focsani",
  description:
    "Termenii si conditiile de utilizare pentru site-ul Smash Padel Focsani si informatiile despre rezervari si continutul publicat.",
};

const sections = [
  {
    title: "1. Informatii generale",
    content: [
      "Prezenta pagina stabileste conditiile de utilizare a site-ului smashpadel.ro si a informatiilor publicate sub brandul Smash Padel Focsani.",
      "Prin accesarea si utilizarea acestui site, accepti sa respecti acesti termeni si conditii. Daca nu esti de acord cu acestia, te rugam sa nu folosesti site-ul.",
    ],
  },
  {
    title: "2. Scopul site-ului",
    content: [
      "Site-ul are rol informativ si de prezentare pentru activitatea clubului Smash Padel Focsani, inclusiv detalii despre facilitati, program, preturi, modalitati de contact si rezervare.",
      "Informatiile publicate sunt oferite cu buna-credinta si pot fi actualizate, modificate sau completate fara o notificare prealabila.",
    ],
  },
  {
    title: "3. Rezervari si servicii terte",
    content: [
      "Rezervarile pentru terenuri pot fi realizate prin intermediul aplicatiei Playtomic sau al altor servicii externe indicate pe site. Utilizarea acestor servicii poate fi supusa unor termeni si politici proprii, stabilite de operatorii lor.",
      "Smash Padel Focsani nu poate fi responsabil pentru indisponibilitatea, erorile sau politicile comerciale ale platformelor terte folosite pentru rezervare sau plata.",
    ],
  },
  {
    title: "4. Continut si proprietate intelectuala",
    content: [
      "Textele, imaginile, elementele grafice, logo-urile si structura site-ului apartin Smash Padel Focsani sau sunt utilizate in baza unor drepturi legitime de folosire.",
      "Este interzisa copierea, distribuirea, modificarea sau reutilizarea continutului site-ului in scop comercial fara acordul prealabil, expres si scris al titularului drepturilor.",
    ],
  },
  {
    title: "5. Limitarea raspunderii",
    content: [
      "Depunem eforturi rezonabile pentru ca informatiile afisate pe site sa fie corecte si actualizate. Cu toate acestea, nu garantam ca toate informatiile sunt in permanenta complete, lipsite de erori sau disponibile fara intreruperi.",
      "Utilizarea site-ului se face pe propria raspundere. Smash Padel Focsani nu raspunde pentru prejudicii directe sau indirecte rezultate din utilizarea site-ului ori din imposibilitatea temporara de accesare a acestuia.",
    ],
  },
  {
    title: "6. Link-uri externe",
    content: [
      "Site-ul poate contine link-uri catre platforme sau servicii externe, precum Playtomic, Google Maps sau retele sociale. Aceste link-uri sunt oferite pentru confortul utilizatorilor.",
      "Nu controlam continutul sau politicile acestor site-uri terte si nu ne asumam raspunderea pentru continutul, disponibilitatea sau practicile lor de confidentialitate.",
    ],
  },
  {
    title: "7. Contact",
    content: [
      "Pentru intrebari despre acesti termeni si conditii sau pentru informatii suplimentare despre activitatea clubului, ne poti contacta la adresa contact@smashpadel.ro, la numarul +40 747 287 989 sau la locatia din Bd. Bucuresti nr. 16A, Focsani, Vrancea.",
    ],
  },
] as const;

export default function TermeniSiConditiiPage() {
  return (
    <LegalPage
      title="Termeni si conditii"
      updatedAt="8 mai 2026"
      intro="Acesti termeni si conditii descriu regulile generale de utilizare a site-ului Smash Padel Focsani si modul in care pot fi accesate informatiile si serviciile prezentate online."
      sections={[...sections]}
    />
  );
}
