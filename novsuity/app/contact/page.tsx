"use client";

import { useState, type FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", commentaire: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ nom: "", email: "", telephone: "", commentaire: "" });
    } catch {
      setErrorMessage("Une erreur est survenue. Vérifiez votre connexion et réessayez.");
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="bg-white px-6 py-16 text-[#1a1a1a] md:px-12 md:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <h1 className="text-center font-serif text-3xl font-medium md:text-4xl">Contactez-nous</h1>

          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Nom"
                value={form.nom}
                onChange={(e) => updateField("nom", e.target.value)}
                className="w-full border border-[#1a1a1a]/15 px-4 py-3 text-sm placeholder:text-[#1a1a1a]/40 focus:border-rust focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full border border-[#1a1a1a]/15 px-4 py-3 text-sm placeholder:text-[#1a1a1a]/40 focus:border-rust focus:outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Téléphone"
              value={form.telephone}
              onChange={(e) => updateField("telephone", e.target.value)}
              className="w-full border border-[#1a1a1a]/15 px-4 py-3 text-sm placeholder:text-[#1a1a1a]/40 focus:border-rust focus:outline-none"
            />

            <textarea
              placeholder="Commentaire"
              rows={6}
              value={form.commentaire}
              onChange={(e) => updateField("commentaire", e.target.value)}
              className="w-full resize-none border border-[#1a1a1a]/15 px-4 py-3 text-sm placeholder:text-[#1a1a1a]/40 focus:border-rust focus:outline-none"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#1a1a1a] px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#1a1a1a]/85 disabled:opacity-50"
            >
              {status === "loading" ? "Envoi..." : "Soumettre"}
            </button>

            {status === "success" && (
              <p className="text-sm text-rust">Merci, votre message a bien été envoyé !</p>
            )}
            {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
          </form>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
