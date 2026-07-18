"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, Search, ShoppingBag, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nous contacter", href: "/contact" },
];

const announcements = [
  {
    text: "Ils parlent de nous : M6, France TV, France 3",
    href: "https://france3-regions.franceinfo.fr/bourgogne-franche-comte/saone-et-loire/de-vinted-au-concours-lepine-cette-bourguignonne-est-en-lice-pour-conquerir-l-univers-de-la-mode-avec-son-studio-photo-3347563.html?shem=dsdf%2Csharefoc%2Cagadiscoversdl%2C%2Csh%2Fx%2Fdiscover%2Fm1%2F4",
  },
  {
    text: "Votre kit NovSuity — bientôt",
    href: "https://buy.stripe.com/5kQ3cxdwj9Jl18Tamx5Rm00",
  },
];

function LogoText() {
  return (
    <span className="font-serif text-2xl font-semibold tracking-tight md:text-[1.9rem]">
      <span className="text-[#1a1a1a]">Nov</span>
      <span className="text-rust">Suity</span>
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((i) => (i + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function goToAnnouncement(delta: number) {
    setAnnouncementIndex((i) => (i + delta + announcements.length) % announcements.length);
  }

  const announcement = announcements[announcementIndex];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-center gap-6 bg-rust-dark px-4 py-2.5 text-white">
        <button
          aria-label="Message précédent"
          onClick={() => goToAnnouncement(-1)}
          className="opacity-70 transition hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <a
          href={announcement.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-[11px] font-medium uppercase tracking-[0.18em] transition hover:opacity-80"
        >
          {announcement.text}
        </a>
        <button
          aria-label="Message suivant"
          onClick={() => goToAnnouncement(1)}
          className="opacity-70 transition hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <div className="flex items-center gap-4 md:hidden">
          <button aria-label="Ouvrir le menu" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <button aria-label="Rechercher" className="hidden text-[#1a1a1a] md:block">
          <Search className="h-5 w-5" />
        </button>

        <Link href="/" aria-label="Accueil NovSuity">
          <LogoText />
        </Link>

        <div className="flex items-center gap-4 text-[#1a1a1a] md:gap-5">
          <button className="hidden items-center gap-1.5 text-sm font-medium md:flex">
            <span aria-hidden>🇫🇷</span>
            <span>EUR / FR</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button aria-label="Panier">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-[#1a1a1a]/8 py-4 md:block">
        <ul className="flex items-center justify-center gap-10 text-sm font-medium text-[#1a1a1a]/70">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-[#1a1a1a]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <nav className="border-t border-[#1a1a1a]/8 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-[#1a1a1a]/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
