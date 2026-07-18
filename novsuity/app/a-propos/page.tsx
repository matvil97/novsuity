import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const team = [
  { name: "Valérie", role: "Fondatrice, développement du projet et réseaux sociaux" },
  { name: "Marie", role: "Communication et image de marque." },
  { name: "Matthieu", role: "Développement et pilotage de la solution numérique." },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#1a1a1a]">
        {/* Une idée née d'un besoin */}
        <Reveal>
          <section>
            <Image
              src="/portant-vetements.png"
              alt="Portant de vêtements — Une idée née d'un besoin. NovSuity, c'est l'histoire d'une idée simple née pour faciliter la vente de vêtements en ligne."
              width={1440}
              height={522}
              sizes="100vw"
              className="h-auto w-full"
            />
          </section>
        </Reveal>

        {/* Notre histoire */}
        <Reveal>
          <section className="px-6 py-20 md:px-12">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-medium md:text-4xl">Notre histoire</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[#1a1a1a]/70">
                  <p>Tout est parti d&apos;un constat très concret.</p>
                  <p>
                    Comme vous, nous avons vendu des vêtements sur Vinted et sur les plateformes de seconde
                    main. Et comme beaucoup, nous nous sommes retrouvés à poser nos articles sur notre lit,
                    au sol ou sur une table… à les accrocher tant bien que mal, en perdant un temps précieux
                    pour un résultat rarement satisfaisant.
                  </p>
                  <p>
                    De cette frustration est née une question simple : et s&apos;il existait une véritable
                    solution pensée pour la vente en ligne ?
                  </p>
                  <p>
                    NovSuity est un support imaginé pour transformer, en quelques secondes, la façon de
                    présenter ses vêtements.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] shadow-[0_24px_80px_rgba(26,26,26,0.10)]">
                <Image
                  src="/avant-apres.webp"
                  alt="Avant/après : pull rayé posé sur un tissu, puis photographié proprement sur fond bleu"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* À propos de NovSuity */}
        <Reveal>
          <section className="bg-cream px-6 py-20 md:px-12">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/a-propos-photo.webp"
                  alt="Personne photographiant un vêtement à rayures accroché à une porte avec son smartphone"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-medium md:text-4xl">À propos de NovSuity</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[#1a1a1a]/70">
                  <p>
                    NovSuity a pour ambition de rendre la vente de vêtements en ligne plus facile et plus
                    rapide.
                  </p>
                  <p>
                    Nous sommes convaincus qu&apos;une photo change tout. Un visuel net attire davantage
                    l&apos;attention, inspire confiance et peut faire toute la différence.
                  </p>
                  <p>Aujourd&apos;hui, la qualité des visuels joue un rôle central dans la vente en ligne.</p>
                  <p>
                    Pourtant, bien photographier ses vêtements reste compliqué : il faut de la place, du
                    matériel, du temps. Nous pensons que cela ne devrait pas être une contrainte. Chaque
                    vendeur, particulier comme boutique, devrait pouvoir mettre ses articles en valeur
                    simplement, sans installation complexe ni mise en scène improvisée.
                  </p>
                  <p>
                    C&apos;est pour cela que nous avons conçu NovSuity : un support pratique, élégant et
                    pensé pour les besoins réels de celles et ceux qui vendent en ligne.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Notre équipe */}
        <Reveal>
          <section className="bg-cream px-6 py-16 md:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="relative aspect-[10/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/equipe-mains-telephones.webp"
                  alt="Cinq personnes tenant chacune un smartphone en l'air, écrans colorés"
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mx-auto mt-12 max-w-2xl text-center">
                <h2 className="font-serif text-3xl font-medium md:text-4xl">Notre équipe</h2>
                <p className="mt-6 text-sm leading-7 text-[#1a1a1a]/70">
                  NovSuity est porté par <strong className="text-[#1a1a1a]">NOMENVI</strong>, une entreprise
                  innovante qui place l&apos;économie circulaire et la créativité au cœur de ses projets. Une
                  vision qui résonne naturellement avec NovSuity : faciliter la revente, c&apos;est
                  encourager une mode plus durable.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#1a1a1a]/70">
                  Derrière NovSuity, une équipe engagée, animée par l&apos;envie d&apos;apporter une
                  solution innovante et accessible :
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  {team.map((member) => (
                    <li key={member.name} className="text-[#1a1a1a]/70">
                      <strong className="text-rust">{member.name}</strong> : {member.role}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm leading-7 text-[#1a1a1a]/70">
                  NovSuity est avant tout une aventure humaine, construite dans la proximité et
                  l&apos;écoute.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#1a1a1a]/70">
                  Vos retours et vos suggestions nous sont précieux : ils nous ont accompagnés dans
                  l&apos;évolution du produit, du prototype au kit final.
                </p>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
