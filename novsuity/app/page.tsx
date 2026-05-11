"use client";

import {
  Bed,
  Check,
  ChevronLeft,
  ChevronRight,
  DoorClosed,
  Menu,
  SquareDashedBottom,
  Table2,
  TriangleAlert,
} from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/5kQ3cxdwj9Jl18Tamx5Rm00";

const usageItems = [
  { label: "Sur le lit", icon: Bed },
  { label: "Sur une table", icon: Table2 },
  { label: "Accrochée à une porte", icon: DoorClosed },
  { label: "À même le sol", icon: SquareDashedBottom },
];

const kitItems = [
  {
    title: "1 fond blanc\npar défaut",
    visual: "white",
  },
  {
    title: "2 fonds de couleurs\ndifférentes",
    visual: "backgrounds",
  },
  {
    title: "2 sangles design\nmode",
    visual: "straps",
  },
  {
    title: "85 €\nTTC",
    visual: "price",
  },
];

const carouselSlides = [
  {
    before: "/avant-vetement.jpeg",
    after: "/apres-vetement.jpeg",
  },
];

function LogoText() {
  return (
    <span className="font-serif text-[2rem] font-black leading-none tracking-[-0.08em] md:text-[2.5rem]">
      <span className="text-[#82776f]">Nov</span>
      <span className="bg-gradient-to-r from-[#5b2a2c] via-[#9a2f33] to-[#e5282e] bg-clip-text text-transparent">
        Suity
      </span>
    </span>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#d09d46]">
      <span className="rounded-full bg-[#f8efe2] px-2.5 py-1 text-[#d09d46]">{number}</span>
      <span>{children}</span>
    </div>
  );
}

function DoorMockup() {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[360px] md:h-[450px]">
      <div className="absolute inset-x-6 bottom-0 top-0 rounded-t-[2rem] border-[10px] border-[#eadfd0] bg-[#fdfbf8] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
        <div className="absolute left-5 top-8 h-8 w-3 rounded-full bg-[#171717]" />
        <div className="absolute right-5 top-8 h-8 w-3 rounded-full bg-[#171717]" />
        <div className="absolute left-1/2 top-12 h-10 w-px -translate-x-1/2 bg-[#171717]" />
        <div className="absolute left-1/2 top-20 h-7 w-16 -translate-x-1/2 rounded-t-full border-t-4 border-[#171717]" />
        <img
          src="/apres_vetement.jpeg"
          alt="Vêtement présenté sur fond propre"
          className="absolute left-1/2 top-[105px] h-[230px] w-[230px] -translate-x-1/2 rounded-xl bg-white object-cover object-center shadow-xl"
        />
        <div className="absolute bottom-10 left-6 h-7 w-7 rounded-full border border-black/20" />
      </div>
      <div className="absolute right-0 top-20 flex h-28 w-28 items-center justify-center rounded-full bg-[#d09d46] text-center text-xs font-black uppercase leading-5 tracking-[0.13em] text-white shadow-xl">
        Simple<br />Rapide<br />Efficace
      </div>
    </div>
  );
}

function KitVisual({ type }: { type: string }) {
  if (type === "white") {
    return (
      <div className="relative mx-auto h-20 w-28 rounded-lg bg-[#f7f7f7] shadow-inner">
        <div className="absolute -top-1 left-2 h-3 w-1 rounded bg-[#171717]" />
        <div className="absolute -top-1 right-2 h-3 w-1 rounded bg-[#171717]" />
      </div>
    );
  }

  if (type === "backgrounds") {
    return (
      <div className="relative mx-auto h-20 w-32">
        <div className="absolute bottom-0 left-2 h-16 w-20 rounded-lg bg-[#efd6b8] shadow-lg" />
        <div className="absolute bottom-2 right-2 h-18 w-20 rounded-lg bg-[#303030] shadow-lg" />
      </div>
    );
  }

  if (type === "straps") {
    return (
      <div className="mx-auto flex h-20 items-center justify-center gap-4">
        <div className="h-20 w-7 rounded bg-[repeating-linear-gradient(45deg,#7a4a1f_0_6px,#1d120b_6px_12px)]" />
        <div className="h-20 w-7 rounded bg-[repeating-linear-gradient(135deg,#eee2d2_0_6px,#5f5145_6px_12px)]" />
      </div>
    );
  }

  return (
    <div className="flex h-20 flex-col items-center justify-center text-[#d09d46]">
      <span className="text-5xl font-black leading-none">85 €</span>
      <span className="mt-1 text-sm font-black uppercase tracking-[0.1em]">TTC</span>
    </div>
  );
}

function BeforeAfter() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <button
        type="button"
        className="absolute -left-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg md:flex"
        aria-label="Précédent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#fbf6ef] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
            <img
              src="/avant_vetement.jpeg"
              alt="Avant NovSuity"
              className="aspect-[4/3] h-full w-full object-cover object-center"
            />
            <span className="absolute left-5 top-5 rounded-full bg-[#4f4b46]/90 px-5 py-2 text-sm font-black text-white shadow-lg">
              Avant
            </span>
            <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-5 py-2 text-sm font-black text-[#171717] shadow-lg backdrop-blur-md">
              Avant NovSuity
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
            <img
              src="/apres_vetement.jpeg"
              alt="Après NovSuity"
              className="aspect-[4/3] h-full w-full object-cover object-center"
            />
            <span className="absolute left-5 top-5 rounded-full bg-[#d09d46] px-5 py-2 text-sm font-black text-white shadow-lg">
              Après
            </span>
            <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-5 py-2 text-sm font-black text-[#171717] shadow-lg backdrop-blur-md">
              Après NovSuity
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute -right-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg md:flex"
        aria-label="Suivant"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <a href="#top" aria-label="Accueil NovSuity">
            <LogoText />
          </a>

          <div className="flex items-center gap-5">
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#171717] px-7 py-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition hover:scale-105 hover:bg-[#d09d46] md:px-9"
            >
              Précommander
            </a>
            <button type="button" className="text-[#171717]" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel number="01">Découverte des usages</SectionLabel>
            <h1 className="mt-6 max-w-xl font-serif text-4xl font-black leading-[1.02] tracking-[-0.05em] md:text-6xl">
              Comment prenez-vous vos photos aujourd’hui&nbsp;?
            </h1>
            <div className="mt-8 h-1 w-16 bg-[#d09d46]" />
            <p className="mt-8 max-w-lg text-base leading-7 text-black/60">
              Nos échanges avec des vendeurs en ligne montrent toujours la même chose : on improvise.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {usageItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_14px_35px_rgba(0,0,0,0.08)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-3 text-xs font-bold text-black/70">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex gap-4 rounded-xl bg-[#fbf6ef] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#d09d46] shadow-sm">
                <TriangleAlert className="h-5 w-5" />
              </div>
              <div>
                <p className="font-black">Pas de lumière, pas de place, résultat moyen, perte de temps...</p>
                <p className="mt-1 text-sm text-black/55">Vos photos ne mettent pas en valeur vos articles.</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.7rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
            <img src="/article_pose.jpeg" alt="Article posé sur un lit avant NovSuity" className="aspect-[4/3] h-full w-full bg-[#fbf6ef] object-cover object-center" />
          </div>
        </div>
      </section>

      <section id="solution" className="bg-[#fbf6ef] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <SectionLabel number="02">Notre solution</SectionLabel>
            <h2 className="mt-6 max-w-xl font-serif text-4xl font-black leading-[1.02] tracking-[-0.05em] md:text-6xl">
              Transformez votre porte en <span className="text-[#d09d46]">studio photo</span>
            </h2>
            <div className="mt-8 h-1 w-16 bg-[#d09d46]" />
            <p className="mt-8 max-w-lg text-base leading-7 text-black/60">
              Un kit simple et ingénieux pour créer un espace de shooting propre, stable et réutilisable à la maison.
            </p>

            <div className="mt-8 space-y-5">
              {["Met en valeur vos articles", "Apporte jusqu’à +40% de valeur perçue", "Inspire confiance et augmente vos ventes"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d09d46]/20 text-[#b27a22]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-bold text-black/75">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <DoorMockup />
        </div>
      </section>

      <section id="kit" className="px-6 py-16 text-center md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <SectionLabel number="03">Le kit NovSuity</SectionLabel>
          </div>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl font-black leading-[1.04] tracking-[-0.04em] md:text-5xl">
            Tout ce qu’il vous faut pour des photos pro
          </h2>
          <p className="mt-5 text-lg text-black/65">
            Le kit sera disponible à partir d’<span className="font-black text-[#d09d46]">août</span> au prix de <span className="font-black text-[#d09d46]">85 €</span>.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kitItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <KitVisual type={item.visual} />
                <p className="mt-6 whitespace-pre-line text-base font-black leading-5 text-black/85">{item.title}</p>
                {item.visual === "price" && <p className="mt-2 text-sm font-bold text-black/60">Offre de lancement</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="avant-apres" className="px-6 pb-16 text-center md:px-12 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d09d46]"></p>
          <h2 className="mt-3 font-serif text-4xl font-black tracking-[-0.04em] md:text-5xl">Avant / Après</h2>
          <div className="mt-10">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* SECTION - Ils parlent de nous */}
<section id="presse" className="px-6 py-16 md:px-12 md:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="flex justify-center">
      <SectionLabel number="04">Ils parlent de nous</SectionLabel>
    </div>

    <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-4xl font-black leading-[1.04] tracking-[-0.04em] text-[#171717] md:text-5xl">
      NovSuity a retenu l’attention des médias
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-black/60">
      Notre innovation a été relayée par plusieurs médias nationaux et régionaux.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {[
        {
          media: "M6",
          emission: "Le 12:45",
          description: "Présentation de NovSuity dans le journal de la mi-journée.",
        },
        {
          media: "France Télévisions",
          emission: "Reportage national",
          description: "Mise en avant de notre concept innovant.",
        },
        {
          media: "France 3 Bourgogne",
          emission: "Édition régionale",
          description: "Focus sur l’entrepreneuriat et l’innovation locale.",
        },
      ].map((item) => (
        <div
          key={item.media}
          className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]"
        >
          <div className="inline-flex rounded-full bg-[#f7f1e8] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d09d46]">
            {item.media}
          </div>

          <h3 className="mt-6 font-serif text-3xl font-black tracking-[-0.03em] text-[#171717]">
            {item.emission}
          </h3>

          <p className="mt-4 leading-7 text-black/60">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="precommande" className="px-6 pb-16 md:px-12 md:pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#171717] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d09d46]">Précommande ouverte</p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl font-black leading-[1.02] tracking-[-0.04em] md:text-6xl">
                Recevez le kit NovSuity dès son lancement.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                Le kit sera commercialisé à partir d’août au tarif de lancement de 85 € TTC.
              </p>
            </div>

            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-2xl bg-[#d09d46] px-8 py-6 text-center text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_55px_rgba(208,157,70,0.35)] transition hover:scale-[1.02] hover:bg-[#b98634] md:text-base"
            >
              Précommander maintenant
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-[#171717] px-6 py-12 text-white md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <LogoText />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              La solution photo pour les revendeurs en ligne. Transformez votre porte en espace de shooting propre, simple et professionnel.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d09d46]">Navigation</p>
            <div className="mt-5 grid gap-3 text-sm text-white/60">
              <a href="#top" className="hover:text-white">Découverte</a>
              <a href="#solution" className="hover:text-white">Solution</a>
              <a href="#kit" className="hover:text-white">Le kit</a>
              <a href="#avant-apres" className="hover:text-white">Avant / Après</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d09d46]">Réseaux & légal</p>
            <div className="mt-5 flex gap-3">
<a
  href="https://www.instagram.com/novsuity"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white transition hover:bg-[#d09d46]"
  aria-label="Instagram NovSuity"
>
  IG
</a>
              <a href="https://www.tiktok.com/@novsuity" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white transition hover:bg-[#d09d46]" aria-label="TikTok NovSuity">
                TT
              </a>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-white/60">
              <a href="/mentions-legales" className="hover:text-white">Mentions légales</a>
              <a href="mailto:contact@novsuity.shop" className="hover:text-white">contact@novsuity.shop</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold tracking-[0.12em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NovSuity — Tous droits réservés</p>
          <p>Précommande sécurisée via Stripe</p>
        </div>
      </footer>
    </main>
  );
}
