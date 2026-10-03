"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  Confetti,
  EnvelopeSimple,
  HandHeart,
  Palette,
  Sparkle,
  Train,
  UsersThree,
} from "@phosphor-icons/react";

/* ── Données ── */

const poleInfo = {
  audience: "Familles, enfants, habitants du quartier de Beauval",
  mission:
    "Créer des moments de partage, de détente et de rassemblement pour toutes les générations.",
  impact:
    "Chaque animation renforce les liens entre voisins et redonne vie au quartier au fil des saisons.",
};

const mainActions = [
  {
    icon: Train,
    badge: "Sorties familles",
    title: "Des sorties en parcs et à la plage",
    desc: "Des journées organisées pour permettre aux familles de découvrir des parcs d'attractions et de profiter de sorties à la mer.",
    items: [
      "Parc Astérix",
      "Aventure Land",
      "Nigloland",
      "La Mer de Sables",
      "Disneyland Paris",
      "Plage de Fort-Mahon",
      "Plage de Cabourg",
      "Sorties pour les vacances",
    ],
    accent: true,
  },
  {
    icon: Confetti,
    badge: "Animations de quartier",
    title: "Des événements qui rassemblent",
    desc: "Des moments conviviaux tout au long de l'année pour réunir les familles et les voisins autour de temps forts festifs.",
    items: [
      "Fête des voisins",
      "Halloween",
      "Chasse aux œufs",
      "Événements festifs saisonniers",
    ],
  },
  {
    icon: Sparkle,
    badge: "Activités ludiques",
    title: "Des moments de jeu pour tous",
    desc: "Des activités pensées pour divertir les enfants et les familles dans un cadre sécurisé et convivial.",
    items: [
      "Châteaux gonflables",
      "Jeux collectifs",
      "Mini bowling",
      "Parcours ludiques",
    ],
  },
  {
    icon: Palette,
    badge: "Activités manuelles",
    title: "Stimuler la créativité",
    desc: "Des ateliers pour développer l'imagination et la créativité des plus jeunes.",
    items: ["Peinture", "Collage", "Création", "Ateliers créatifs"],
  },
];

// Images de remplacement à substituer par des photos AFIA validées.
const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    alt: "Photo d'illustration pour une sortie en famille",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=900&q=80",
    alt: "Photo d'illustration pour une activité de loisirs",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Photo d'illustration pour une sortie à la plage",
  },
  {
    src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80",
    alt: "Photo d'illustration pour un atelier créatif",
    className: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
    alt: "Photo d'illustration pour une animation collective",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    alt: "Photo d'illustration pour un moment convivial",
  },
];

/* ── Composant ── */

export function PoleLudique() {
  return (
    <>
      {/* ════ Hero — chaleur / accent orange ════ */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 100% at 100% 0%, rgba(255,230,212,0.55) 0%, transparent 50%), linear-gradient(180deg, #faf7f5 0%, #f3eef2 100%)",
          }}
        />
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <FadeIn className="lg:col-span-7">
              <span className="eyebrow text-accent mb-6">
                Pôle ludique · animations de quartier
              </span>
              <h1 className="font-heading font-black text-[clamp(44px,6.5vw,88px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Des moments<br />
                qui <span className="text-accent">rassemblent.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[58ch]">
                Sorties, animations de quartier, ateliers créatifs et activités
                sportives — le pôle ludique anime la vie de Beauval tout au
                long de l'année.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                  <Image
                    src="https://i.imgur.com/SqbljKJ.jpeg"
                    alt="Animation du pôle ludique AFIA à Beauval"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-primary-950/10 to-transparent" />
                </div>
                {/* Badge "3 sorties cet été" */}
                <div className="absolute -bottom-6 -right-6 md:-right-10 rounded-2xl bg-accent text-white px-5 py-4 max-w-[200px] shadow-diffuse">
                  <p className="font-heading font-black text-[44px] leading-none tracking-[-0.04em]">
                    3
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] font-semibold text-white/90">
                    sorties familles cet été
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════ Présentation — bento ════ */}
      <Section>
        <FadeIn className="max-w-3xl mb-12">
          <span className="eyebrow text-accent mb-3">Ce qu'est ce pôle</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Animer le quartier,<br />
            <span className="text-accent">au fil des saisons.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <FadeIn className="md:col-span-7">
            <div
              className="grain h-full rounded-3xl p-8 md:p-10 relative overflow-hidden text-white"
              style={{
                background:
                  "linear-gradient(135deg, #e8662b 0%, #d4541e 50%, #8a4eb0 100%)",
              }}
            >
              <div className="relative">
                <Sparkle size={28} weight="duotone" className="text-white/90 mb-6" />
                <span className="eyebrow text-white/80 mb-3">Sa mission</span>
                <p className="mt-2 font-heading font-bold text-2xl md:text-[28px] leading-[1.2] tracking-tight max-w-[36ch]">
                  {poleInfo.mission}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/85 max-w-[50ch]">
                  Des fêtes de quartier aux sorties d'été, des ateliers créatifs
                  aux tournois sportifs : chaque temps fort tisse un lien
                  supplémentaire entre voisins.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="md:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-7">
                <UsersThree size={24} weight="duotone" className="text-accent mb-4" />
                <span className="eyebrow text-accent mb-2">À qui</span>
                <p className="mt-2 font-heading font-bold text-lg leading-snug text-text-primary">
                  {poleInfo.audience}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-7">
                <HandHeart size={24} weight="duotone" className="text-accent mb-4" />
                <span className="eyebrow text-accent mb-2">L'apport</span>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {poleInfo.impact}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ════ Activités régulières — cartes avec accent rotatif ════ */}
      <Section className="bg-surface-muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-accent mb-3">Activités régulières</span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Des formats pour<br />chaque public.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-text-secondary max-w-[60ch]">
              Quatre formats pensés pour réunir toutes les générations du
              quartier — des sorties familles aux animations, des jeux aux
              ateliers créatifs.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {mainActions.map((activity) => {
            const isAccent = activity.accent;
            return (
              <StaggerItem key={activity.title}>
                <div
                  className={`h-full rounded-3xl border p-8 transition-all duration-300 ${
                    isAccent
                      ? "border-accent/25 bg-accent-100/40"
                      : "border-border-subtle bg-surface-elevated"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                        isAccent ? "bg-accent text-white" : "bg-primary-50"
                      }`}
                    >
                      <activity.icon
                        size={22}
                        weight="duotone"
                        className={isAccent ? "text-white" : "text-primary-700"}
                      />
                    </div>
                    <span
                      className={`text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full ${
                        isAccent
                          ? "bg-white/70 text-accent-700"
                          : "bg-primary-50 text-primary-700"
                      }`}
                    >
                      {activity.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl leading-tight tracking-tight text-text-primary mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed mb-6">
                    {activity.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {activity.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                            isAccent ? "bg-accent" : "bg-primary/60"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* ════ Galerie photos ════ */}
      <Section>
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent mb-3">La vie du pôle</span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Nos sorties en images.
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm md:text-base leading-relaxed text-text-secondary">
            Des sorties, des animations et des moments partagés avec les familles du quartier.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[132px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
          {galleryPhotos.map((photo, index) => (
            <FadeIn
              key={photo.src}
              delay={index * 0.05}
              className={`relative overflow-hidden rounded-2xl bg-surface-muted ${photo.className ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes={
                  index === 0 || photo.className === "col-span-2"
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 25vw, 50vw"
                }
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ════ CTA ════ */}
      <Section className="pt-0">
        <FadeIn>
          <div className="grain relative rounded-[28px] bg-primary-950 p-10 md:p-16 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow text-accent-300 mb-4">Participer</span>
                <h2 className="mt-3 font-heading font-black text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-white max-w-[14ch]">
                  Envie de nous<br />rejoindre ?
                </h2>
                <p className="mt-6 text-lg text-primary-100 max-w-[52ch] leading-relaxed">
                  Inscrivez votre famille, proposez une animation ou rejoignez
                  l'équipe bénévole pour animer le quartier.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link href="/adhesion">
                  <Button
                    size="lg"
                    className="w-full bg-accent text-white hover:bg-accent-700 border-none"
                  >
                    Adhérer à l'association
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/60 bg-transparent"
                  >
                    <HandHeart size={18} weight="duotone" />
                    Devenir bénévole
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full text-white hover:bg-white/10 justify-start"
                  >
                    <EnvelopeSimple size={18} weight="duotone" />
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
