import Link from "next/link";

interface LegalSection {
  title: string;
  content: readonly string[];
}

interface LegalPageProps {
  title: string;
  updatedAt: string;
  intro: string;
  sections: readonly LegalSection[];
}

export default function LegalPage({
  title,
  updatedAt,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-3xl border border-white/10 bg-dark-50/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:p-12">
        <Link href="/" className="text-sm text-primary transition-colors hover:text-primary-300">
          ← Înapoi la pagina principală
        </Link>

        <header className="mt-6 border-b border-white/10 pb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary/80">Informații legale</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-gray-400">Ultima actualizare: {updatedAt}</p>
          <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg">{intro}</p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-white">{section.title}</h2>
              <div className="space-y-4 text-gray-300">
                {section.content.map((paragraph) => (
                  <p key={paragraph} className="leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}


