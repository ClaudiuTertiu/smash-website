import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politica de cookies | Smash Padel Focșani",
  description:
    "Politica de cookies pentru site-ul Smash Padel Focșani, inclusiv informații despre scopul utilizării cookies și opțiunile utilizatorilor.",
};

const sections = [
  {
    title: "1. Ce sunt cookies",
    content: [
      "Cookies sunt fișiere de mici dimensiuni stocate pe dispozitivul tău atunci când vizitezi un site web. Ele ajută la funcționarea corectă a paginilor, la memorarea unor preferințe și la înțelegerea modului în care este utilizat site-ul.",
    ],
  },
  {
    title: "2. Ce tipuri de cookies pot fi utilizate",
    content: [
      "Site-ul poate folosi cookies esențiale pentru afișarea și funcționarea corectă a paginilor, precum și stocare locală pentru reținerea opțiunilor tale legate de consimțământul privind cookies.",
      "De asemenea, anumite servicii terțe integrate sau încărcate din pagină, precum Google Fonts, Google Maps sau platforme externe accesate prin link-uri, pot seta sau utiliza propriile tehnologii similare cookies, conform politicilor lor separate.",
    ],
  },
  {
    title: "3. Scopurile utilizării",
    content: [
      "Cookies și tehnologiile similare pot fi utilizate pentru funcționarea tehnică a site-ului, pentru îmbunătățirea experienței utilizatorilor, pentru memorarea consimțământului exprimat și pentru furnizarea unor componente externe integrate în pagină.",
    ],
  },
  {
    title: "4. Cum îți poți gestiona opțiunile",
    content: [
      "La prima accesare a site-ului este afișat un mesaj de informare privind utilizarea cookies. Alegerea ta poate fi salvată local în browser, astfel încât bannerul să nu fie afișat repetat la fiecare accesare.",
      "Poți șterge cookies sau stocarea locală direct din setările browserului tău. În funcție de browser, poți bloca sau permite anumite categorii de cookies și poți șterge datele deja salvate.",
    ],
  },
  {
    title: "5. Servicii terțe",
    content: [
      "Pentru serviciile terțe folosite sau accesibile prin site, precum Google Maps, Google Fonts, Playtomic sau rețele sociale, se aplică și politicile acelor furnizori. Te încurajăm să consulți documentația și politicile lor pentru informații detaliate despre cookies și prelucrarea datelor.",
    ],
  },
  {
    title: "6. Contact",
    content: [
      "Dacă ai întrebări despre această politică de cookies, ne poți contacta la adresa contact@smashpadel.ro sau la numărul +40 747 287 989.",
    ],
  },
] as const;

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage
      title="Politica de cookies"
      updatedAt="8 mai 2026"
      intro="Această pagină explică ce sunt cookies, cum pot fi folosite pe site-ul Smash Padel Focșani și ce opțiuni ai pentru a le controla."
      sections={[...sections]}
    />
  );
}

