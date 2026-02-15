"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { transitionItem } from "@/lib/transitions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <motion.form
      {...transitionItem(0)}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nume</label>
        <input
          id="name" name="name" type="text" required
          className="mt-2 block w-full rounded-xl border border-white/10 bg-dark-50 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Numele tău"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input
          id="email" name="email" type="email" required
          className="mt-2 block w-full rounded-xl border border-white/10 bg-dark-50 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="email@exemplu.ro"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mesaj</label>
        <textarea
          id="message" name="message" rows={4} required
          className="mt-2 block w-full rounded-xl border border-white/10 bg-dark-50 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
          placeholder="Scrie-ne ce ai pe suflet..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-white shadow-glow transition-all hover:bg-primary-400 hover:shadow-glow-lg disabled:opacity-70"
      >
        {status === "sending" && "Trimit..."}
        {status === "sent" && "Mesaj trimis ✓"}
        {status === "idle" && "Trimite mesajul"}
        {status === "error" && "Încearcă din nou"}
      </button>
    </motion.form>
  );
}
