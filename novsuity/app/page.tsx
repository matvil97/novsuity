"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bed,
  DoorClosed,
  Menu,
  Shirt,
  SquareDashedBottom,
  Table2,
} from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/5kQ3cxdwj9Jl18Tamx5Rm00";

const platforms = [
  "Vinted",
  "Leboncoin",
  "Depop",
  "Vestiaire Collective",
  "Etsy",
  "Marketplace",
  "& autres plateformes",
];

const painPoints = [
  { label: "Sur le lit", icon: Bed },
  { label: "Sur une table", icon: Table2 },
  { label: "Accrochée à une porte", icon: DoorClosed },
  { label: "À même le sol", icon: SquareDashedBottom },
];

const solutionCards = [
  {
    title: "Votre porte devient un studio",
    text: "Un espace photo propre, stable et réutilisable pour présenter vos vêtements avec plus de soin.",
  },
  {
    title: "Photos prêtes en 2 minutes",
    text: "Installez, accrochez, photographiez et publiez. Simple, rapide, efficace.",
  },
];

function LogoText() {
  return (
    <span className="font-serif text-[2.3rem] font-bold leading-none tracking-[-0.075em] md:text-5xl">
      <span className="text-[#c9bfb2] drop-shadow-sm">Nov</span>
      <span className="bg-gradient-to-r from-[#4a2627] via-[#8d3033] to-[#e5282e] bg-clip-text text-transparent">
        Suity
      </span>
    </span>
  );
}

function StudioVisual() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[430px] md:h-[560px] md:max-w-[500px]">
      <div className="absolute bottom-0 left-[10%] h-[78%] w-[80%] rounded-t-[2rem] border-[10px] border-[#161616] bg-gradient-to-b from-white to-[#f7f1e8] shadow-2xl">
        <div className="absolute -left-3 -top-4 h-6 w-16 rounded-full bg-[#161616]" />
        <div className="absolute -right-3 -top-4 h-6 w-16 rounded-full bg-[#161616]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-black/5" />
        <div className="absolute left-1/2 top-7 h-20 w-20 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_30%,#2f2f2f,#050505)] shadow-xl" />
        <div className="absolute left-1/2 top-[5.7rem] h-10 w-px -translate-x-1/2 bg-[#161616]" />
        <div className="absolute left-1/2 top-[7.8rem] h-4 w-12 -translate-x-1/2 rounded-t-full border-t-2 border-[#161616]" />
        <div className="absolute bottom-0 left-1/2 h-12 w-[92%] -translate-x-1/2 rounded-t-xl bg-white shadow-[0_-20px_45px_rgba(0,0,0,0.06)]" />
      </div>

      <div className="absolute left-1/2 top-[34%] h-60 w-48 -translate-x-1/2 md:top-[33%] md:h-72 md:w-56">
        <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-full bg-[#9b6a35]" />
        <div className="absolute left-1/2 top-4 h-5 w-20 -translate-x-1/2 rounded-t-full border-t-2 border-[#9b6a35]" />
        <div className="absolute inset-x-0 top-8 h-[88%] rounded-t-[4rem] bg-[#d7bea0] shadow-2xl">
          <div className="absolute left-1/2 top-0 h-full w-px bg-black/10" />
          <div className="absolute left-1/2 top-4 h-[90%] w-20 -translate-x-1/2 rounded-b-[4rem] bg-[#e7d2b8]" />
          <div className="absolute left-7 top-24 h-16 w-14 rounded-lg border border-black/10 bg-[#ccb08f]" />
          <div className="absolute right-7 top-24 h-16 w-14 rounded-lg border border-black/10 bg-[#ccb08f]" />
          <div className="absolute left-1/2 top-28 h-4 w-4 -translate-x-1/2 rounded-full bg-[#161616]" />
        </div>
      </div>

      <div className="absolute bottom-7 left-0 hidden h-44 w-28 md:block">
        <div className="absolute bottom-0 left-4 h-32 w-20 border-4 border-[#161616]" />
        <div className="absolute left-1/2 top-0 h-28 w-16 -translate-x-1/2 rounded-full border border-[#d09d46]/30">
          <div className="absolute bottom-4 left-1/2 h-24 w-px -translate-x-1/2 bg-[#d09d46]/50" />
          <div className="absolute bottom-16 left-3 h-px w-10 rotate-45 bg-[#d09d46]/50" />
          <div className="absolute bottom-14 right-3 h-px w-10 -rotate-45 bg-[#d09d46]/50" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <a href="#accueil" aria-label="Accueil NovSuity">
            <LogoText />
          </a>

          <div className="flex items-center gap-5">
            <a
              href={STRIPE_LINK}
              className="hidden rounded-full border border-[#d09d46]/70 px-8 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#c98f2e] transition hover:bg-[#d09d46] hover:text-white sm:inline-flex"
            >
              Précommander
            </a>
            <button className="rounded-full p-2 text-[#171717] md:hidden" aria-label="Menu">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </header>

      <section id="accueil" className="bg-white px-4 py-8 md:px-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:p-16 lg:p-20"
        >
          <div>
            <p className="max-w-xl text-sm font-black uppercase leading-7 tracking-[0.36em] text-[#d09d46] md:text-base">
              La solution photo pour les revendeurs en ligne
            </p>

            <h1 className="mt-8 max-w-2xl font-serif text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-[#171717] md:text-6xl lg:text-7xl">
              Vous vendez des
              <br />
              vêtements
              <br />
              <em className="font-serif font-normal text-[#d09d46]">en ligne&nbsp;?</em>
            </h1>

            <div className="mt-10 flex max-w-xl flex-wrap gap-3">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#4b4b4b] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.08)]"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <StudioVisual />
        </motion.div>
      </section>

      <section id="probleme" className="bg-white px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.07)] md:grid-cols-[0.85fr_1.15fr] md:p-16 lg:p-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-black/28">
              Le problème
            </p>

            <h2 className="mt-8 max-w-xl font-serif text-4xl font-bold leading-[1.16] tracking-[-0.05em] text-[#111111] md:text-5xl lg:text-6xl">
              Vous <span className="text-[#e5282e]">galérez</span> à prendre des photos de vos vêtements&nbsp;?
            </h2>

            <div className="mt-10 h-1 w-20 bg-[#d09d46]" />

            <p className="mt-10 max-w-md text-lg leading-8 text-black/60 md:text-xl">
              Pas de lumière, pas de place, résultat moyen, perte de temps… Vos photos ne mettent pas en valeur vos articles.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.09)]">
            {painPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="grid grid-cols-[3.5rem_4rem_1fr] items-center gap-2 border-b border-black/6 px-5 py-7 last:border-b-0 md:grid-cols-[4rem_5rem_1fr] md:px-8 md:py-8"
                >
                  <span className="text-2xl font-black text-black/10 md:text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4eadc] text-[#363636] md:h-14 md:w-14">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-base font-semibold text-[#171717] md:text-xl">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="produit" className="bg-white px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#171717] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d09d46]">
              La solution
            </p>
            <h2 className="mt-8 font-serif text-4xl font-bold leading-[1.12] tracking-[-0.05em] md:text-6xl">
              Adoptez le
              <br />
              <span className="text-[#d09d46]">kit NovSuity</span>
            </h2>
            <p className="mt-8 text-lg leading-8 text-white/65">
              Créez un espace photo propre à partir de votre porte. Aucun aménagement, aucune installation complexe.
            </p>
            <a
              href={STRIPE_LINK}
              className="mt-10 inline-flex w-full items-center justify-center gap-4 rounded-2xl bg-[#d09d46] px-7 py-5 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#b98634] sm:w-auto"
            >
              Précommander le kit <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-6 text-lg font-semibold text-white/30">
              85 € TTC — Offre de lancement
            </p>
          </div>

          <div className="grid gap-6">
            {solutionCards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-black/5 bg-[#f7f1e8] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.06)] md:p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md">
                  <Shirt className="h-7 w-7 text-[#d09d46]" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#171717]">
                  {card.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-black/60">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-white px-8 py-12 text-center text-sm font-semibold tracking-[0.12em] text-black/30">
        © 2026 NovSuity — Tous droits réservés
      </footer>
    </main>
  );
}
