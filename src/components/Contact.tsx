"use client";

import SectionWrapper from "./SectionWrapper";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const ADDRESS = "Bd. București nr. 16A, Focșani, Vrancea";
const PHONE = "+40 747 287 989";
const EMAIL = "contact@smashpadel.ro";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.0!2d27.1842!3d45.6986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQxJzU1LjAiTiAyN8KwMTEnMDMuMCJF!5e0!3m2!1sro!2sro!4v1";

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Informații contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <span className="text-gray-300">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+40747287989" className="text-gray-300 hover:text-primary">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-primary">{EMAIL}</a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-dark-50/80 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Trimite-ne un mesaj</h3>
            <ContactForm />
          </div>
        </div>

        <div>
          {/* Spacer to push map lower */}
          <div className="hidden lg:block h-16" />
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={MAP_EMBED_URL + "&style=feature:all|element:geometry|color:0x212121&style=feature:all|element:labels.text.fill|color:0x757575&style=feature:all|element:labels.text.stroke|color:0x212121&style=feature:water|element:geometry|color:0x000000&style=feature:road|element:geometry|color:0x3c3c3c"}
              width="100%" height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Smash Padel Focșani"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
