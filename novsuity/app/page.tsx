import Image from "next/image";
import { Eye, Heart, User } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const features = [
  {
    icon: Eye,
    title: "Des photos professionnelles",
    body: "Des visuels nets et qui mettent en valeur l'article de mode.",
  },
  {
    icon: Heart,
    title: "Prêt en quelques secondes",
    body: "Installez, choisissez votre fond, photographiez. En quelques secondes.",
  },
  {
    icon: User,
    title: "Une équipe à votre écoute",
    body: "De vraies personnes, animées par l'envie de vous simplifier la vente.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#1a1a1a]">
        {/* Hero */}
        <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden md:min-h-[640px]">
          <Image
            src="/hero-produit.png"
            alt="Boîte NovSuity posée sur un fond gris"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <Reveal className="relative flex flex-col items-center gap-7 px-6 text-center">
            <h1 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
              Présentez. Photographiez. Vendez
            </h1>
            <a
              href="#kit"
              className="rounded-none bg-white px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1a1a1a] transition hover:bg-white/90"
            >
              Découvrir
            </a>
          </Reveal>
        </section>

        {/* Intro heading */}
        <Reveal>
          <section className="px-6 py-20 text-center md:px-12">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-snug md:text-5xl">
              Le kit pratique pour photographier vos vêtements
            </h2>
          </section>
        </Reveal>

        {/* Kit / transform section */}
        <Reveal>
          <section id="kit" className="pb-16">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/50">
                Composez votre kit depuis votre intérieur
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-2xl font-medium uppercase leading-snug md:text-4xl">
                Transformez votre porte en espace de shooting photo
              </h2>
            </div>

            <Image
              src="/image1.webp"
              alt="Trois configurations du kit NovSuity accroché à une porte, avec fonds olive, blanc et bleu"
              width={1300}
              height={750}
              sizes="100vw"
              className="h-auto w-full"
            />
          </section>
        </Reveal>

        {/* Solution innovante */}
        <Reveal>
          <section className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 bg-rust px-6 py-16 text-white md:px-14 md:py-24">
              <p className="font-serif text-xl font-medium md:text-2xl">
                Une solution innovante — Nouveau design (coming soon)
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
                Compact et transportable
              </p>
              <div className="space-y-4 text-sm leading-7 text-white/80">
                <p>
                  Le support NovSuity a été imaginé dans une logique d&apos;innovation, de praticité pour
                  faciliter la présentation de vêtements destinés à la vente en ligne.
                </p>
                <p>
                  Pensé comme une solution simple, et rapide à installer, il permet de créer un espace de
                  présentation harmonieux directement depuis son intérieur. Son design fonctionnel aide à
                  mettre les vêtements en valeur tout en améliorant la qualité visuelle des annonces.
                </p>
                <p>
                  Conçu pour les vendeurs en ligne, les boutiques et les créateurs de mode, le support
                  NovSuity permet de réaliser des photos plus soignées sans installation complexe ni
                  matériel encombrant.
                </p>
              </div>
            </div>
            <div className="relative min-h-[380px]">
              <Image
                src="/image2.webp"
                alt="T-shirt noir présenté sur le support NovSuity accroché à une porte blanche"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </section>
        </Reveal>

        {/* Détails produit */}
        <Reveal>
          <section className="px-6 py-16 md:px-12">
            <div className="mx-auto max-w-6xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/50">
                Le kit en détail
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium md:text-4xl">
                Pensé dans les moindres détails
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <figure>
                  <Image
                    src="/detail-eclairage.png"
                    alt="Gros plan sur l'éclairage LED intégré et la pince de fixation du support NovSuity"
                    width={477}
                    height={188}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full rounded-2xl ring-1 ring-[#1a1a1a]/8"
                  />
                  <figcaption className="mt-3 text-sm text-[#1a1a1a]/60">
                    Un éclairage intégré pour un rendu net, même en intérieur.
                  </figcaption>
                </figure>
                <figure>
                  <Image
                    src="/detail-kit-compact.png"
                    alt="Fond photo NovSuity enroulé, format compact et transportable"
                    width={478}
                    height={190}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full rounded-2xl ring-1 ring-[#1a1a1a]/8"
                  />
                  <figcaption className="mt-3 text-sm text-[#1a1a1a]/60">
                    Un fond photo compact qui s&apos;enroule et se transporte facilement.
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Feature icons row */}
        <section className="border-b border-[#1a1a1a]/8 px-6 py-14 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-3">
            {features.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <Icon className="h-6 w-6 text-[#1a1a1a]/80" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-medium">{title}</h3>
                  <p className="max-w-[220px] text-sm text-[#1a1a1a]/60">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer newsletterSubtitle="Soyez les premiers informés de la sortie du kit NovSuity - New design et des offres spéciales." />
    </>
  );
}
