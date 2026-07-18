"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const menuLinks = [
  { label: "Rechercher", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "CGU", href: "#" },
  { label: "CGV", href: "#" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-7.6h2.55l.38-2.96h-2.93v-1.9c0-.86.24-1.44 1.47-1.44h1.57V4.42A21 21 0 0 0 14.5 4.3c-2.15 0-3.62 1.31-3.62 3.72v2.42H8.32v2.96h2.56V21h2.62Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6ZM16.1 4H7.9A3.9 3.9 0 0 0 4 7.9v8.2A3.9 3.9 0 0 0 7.9 20h8.2a3.9 3.9 0 0 0 3.9-3.9V7.9A3.9 3.9 0 0 0 16.1 4Zm2.65 12.1a2.65 2.65 0 0 1-2.65 2.65H7.9a2.65 2.65 0 0 1-2.65-2.65V7.9A2.65 2.65 0 0 1 7.9 5.25h8.2a2.65 2.65 0 0 1 2.65 2.65v8.2ZM16.65 7.6a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7Z",
  },
  {
    label: "TikTok",
    href: "#",
    path: "M16.6 4h-2.35v10.8a2.35 2.35 0 1 1-1.66-2.25v-2.4a4.75 4.75 0 1 0 4.01 4.7V9.02a6.1 6.1 0 0 0 3.4 1.04V7.7a3.75 3.75 0 0 1-3.4-3.7Z",
  },
  {
    label: "Pinterest",
    href: "#",
    path: "M12 4a8 8 0 0 0-2.9 15.45c-.04-.65-.08-1.66.02-2.38.09-.65.6-4.15.6-4.15s-.15-.3-.15-.75c0-.71.4-1.24.92-1.24.43 0 .64.32.64.71 0 .43-.28 1.08-.42 1.68-.12.5.25.92.75.92.9 0 1.59-.95 1.59-2.32 0-1.21-.87-2.06-2.11-2.06-1.44 0-2.28 1.08-2.28 2.2 0 .43.17.9.38 1.15a.15.15 0 0 1 .04.15c-.04.18-.14.55-.16.63-.02.1-.08.13-.19.08-.72-.33-1.17-1.38-1.17-2.22 0-1.81 1.31-3.47 3.79-3.47 1.99 0 3.53 1.42 3.53 3.31 0 1.98-1.24 3.57-2.97 3.57-.58 0-1.13-.3-1.31-.66l-.36 1.36c-.13.5-.48 1.12-.71 1.5A8 8 0 1 0 12 4Z",
  },
];

export default function Footer({
  newsletterSubtitle = "Soyez les premiers informés de l'actualité et des offres spéciales.",
}: {
  newsletterSubtitle?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer>
      <div className="bg-rust px-6 py-14 text-center text-white md:px-12">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">Abonnez-vous à nos e-mails</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/80">{newsletterSubtitle}</p>
        <form onSubmit={handleSubmit} className="mx-auto mt-7 flex max-w-md items-center rounded-full bg-white/15 pl-5 pr-1.5 py-1.5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse e-mail"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="S'abonner"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-rust transition hover:bg-white/90"
          >
            →
          </button>
        </form>
        {submitted && <p className="mt-3 text-xs text-white/80">Merci, à bientôt par e-mail !</p>}
      </div>

      <div className="bg-cream px-6 py-12 text-[#1a1a1a] md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-10">
          <div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a]/70 ring-1 ring-[#1a1a1a]/15 transition hover:text-rust hover:ring-rust"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            <span className="mt-6 block font-serif text-2xl font-semibold">
              <span className="text-[#1a1a1a]">Nov</span>
              <span className="text-rust">Suity</span>
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/50">Menu</p>
            <ul className="mt-4 space-y-3 text-sm text-[#1a1a1a]/75">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-rust">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-[#1a1a1a]/10 pt-6 text-xs text-[#1a1a1a]/45">
          © {new Date().getFullYear()} NovSuity — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
