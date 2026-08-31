"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarBlank,
  Camera,
  EnvelopeSimple,
  HandHeart,
  Handshake,
  MapPin,
  MusicNote,
  Sparkle,
  Student,
  UsersThree,
} from "@phosphor-icons/react";

/* ── Données ── */

const poleInfo = {
  audience: "Jeunes de Meaux souhaitant s'engager bénévolement",
  mission:
    "Permettre aux jeunes de prendre des responsabilités, de s'impliquer dans la vie locale et de devenir acteurs du changement dans leur ville.",
  impact:
    "Un cadre légal, humain et organisationnel pour que les jeunes portent leurs propres projets citoyens, en autonomie.",
};

const keyFigures = [
  { value: "~50", label: "bénévoles actifs" },
  { value: "1", label: "responsable coordinateur" },
  { value: "2026", label: "structuration en cours" },
];

const mainActions = [
  {
    icon: HandHeart,
    title: "Maraudes",
    desc: "Des actions de terrain pour aller à la rencontre des personnes isolées et leur apporter un soutien concret.",
  },
  {
    icon: Handshake,
    title: "Actions solidaires",
    desc: "Collecte de denrées, redistribution et initiatives d'entraide portées directement par les jeunes bénévoles.",
  },
  {
    icon: MusicNote,
    title: "Sorties culturelles",
    desc: "Visites de musées, découvertes artistiques et sorties culturelles pour s'ouvrir au monde et élargir ses horizons.",
  },
  {
    icon: UsersThree,
    title: "Animations de quartier",
    desc: "Organisation d'événements locaux en collaboration avec le pôle ludique, pour animer la vie du quartier.",
    crossRef: {
      label: "pôle ludique",
      href: "/pole-ludique",
    },
  },
];

const highlights = [
  {
    title: "Repas citoyen des jeunes",
    desc: "Un repas organisé par et pour les jeunes du quartier, pour échanger et construire ensemble.",
    date: "14 mars 2026",
    lieu: "Square de la Brie, Meaux",
    chiffre: "30 jeunes",
  },
  {
    title: "Repas solidaire au Colisée",
    desc: "Participation active des jeunes à l'organisation du repas solidaire et citoyen au Colisée de Meaux, un événement majeur de l'association.",
    date: "2 mars 2026",
    lieu: "Colisée de Meaux",
    chiffre: "+230 personnes",
    crossRef: {
      text: "Projet mené en lien avec le pôle sociétal",
      href: "/pole-societal",
    },
  },
  {
    title: "Inauguration espace Bessières",
    desc: "Les jeunes ont participé à l'inauguration de cet espace dédié aux habitants du quartier.",
    date: "2025",
    lieu: "Meaux",
    chiffre: "",
  },
];

const upcomingProjects = [
  {
    icon: Camera,
    title: "Pôle image et audiovisuel",
    status: "En réflexion",
    date: "2026 – 2027",
    desc: "Un futur pôle dédié à la création de courts-métrages et contenus vidéo pour valoriser les talents locaux et offrir de nouvelles formes d'expression aux jeunes.",
  },
  {
    icon: Student,
    title: "Activités jeunes",
    status: "En cours",
    date: "2026",
    desc: "Développement de nouvelles activités portées par les jeunes eux-mêmes : engagement bénévole, projets citoyens, initiatives locales.",
  },
];

/* ── Composant ── */

export function PoleJeunesse() {
  return (
    <>
      {/* ════ Hero — éditorial, asymétrique ════ */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <FadeIn className="lg:col-span-7">
              <span className="eyebrow text-primary-700 mb-6">
                Pôle jeunesse · depuis 2024
              </span>
              <h1 className="font-heading font-black text-[clamp(44px,6.5vw,88px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Les jeunes, <br />
                <span className="text-primary">acteurs</span> du changement.
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[58ch]">
                Maraudes, actions solidaires, sorties culturelles et projets
                citoyens : une structure interne où une cinquantaine de jeunes
                de Meaux portent leurs propres initiatives.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                    alt="Groupe de jeunes bénévoles engagés dans une action collective"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-primary-950/10 to-transparent" />
                </div>
                {/* Stat overlay */}
                <div className="absolute -bottom-6 -left-6 md:-left-10 glass rounded-2xl px-6 py-5 max-w-[220px]">
                  <p className="font-heading font-black text-[44px] leading-none text-primary-800 tracking-[-0.04em]">
                    ~50
                  </p>
                  <p className="mt-2 text-xs text-text-muted uppercase tracking-[0.14em] font-semibold">
                    bénévoles actifs portent leurs propres projets
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════ Présentation — bento mosaïque ════ */}
      <Section>
        <FadeIn className="max-w-3xl mb-12">
          <span className="eyebrow text-primary-700 mb-3">
            Ce qu'est ce pôle
          </span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Pas seulement bénéficiaires.<br />
            <span className="text-primary">Acteurs.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Carte large — mission */}
          <FadeIn className="md:col-span-7">
            <div className="grain h-full rounded-3xl bg-primary-950 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-800/25 blur-3xl pointer-events-none" />
              <div className="relative">
                <Sparkle size={28} weight="duotone" className="text-accent-300 mb-6" />
                <span className="eyebrow text-accent-300 mb-3">Sa mission</span>
                <p className="mt-2 font-heading font-bold text-2xl md:text-[28px] leading-[1.2] tracking-tight text-white max-w-[36ch]">
                  {poleInfo.mission}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-primary-100 max-w-[50ch]">
                  Le pôle fonctionne comme une véritable structure interne à
                  AFIA. Animé par un responsable, il regroupe environ 50
                  jeunes bénévoles qui conçoivent, organisent et mènent leurs
                  propres actions associatives.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Deux cartes verticales */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-7">
                <UsersThree size={24} weight="duotone" className="text-primary mb-4" />
                <span className="eyebrow text-primary-700 mb-2">À qui</span>
                <p className="mt-2 font-heading font-bold text-lg leading-snug text-text-primary">
                  {poleInfo.audience}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-7">
                <HandHeart size={24} weight="duotone" className="text-primary mb-4" />
                <span className="eyebrow text-primary-700 mb-2">L'apport</span>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {poleInfo.impact}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bande chiffres clés */}
        <FadeIn delay={0.2}>
          <div className="mt-6 rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-8">
            <div className="grid grid-cols-3 divide-x divide-border-subtle">
              {keyFigures.map((fig) => (
                <div key={fig.label} className="px-4 md:px-8 first:pl-0 last:pr-0">
                  <p className="font-heading font-black text-[clamp(32px,4vw,56px)] leading-none tracking-[-0.03em] text-primary-800">
                    {fig.value}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-text-muted font-semibold">
                    {fig.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ════ Actions — liste éditoriale numérotée ════ */}
      <Section className="bg-surface-muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-primary-700 mb-3">
              Ce qu'ils portent
            </span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Quatre terrains<br />d'engagement.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-text-secondary max-w-[60ch]">
              Chaque action est conçue, organisée et menée par les jeunes
              bénévoles eux-mêmes, dans le cadre légal et logistique de
              l'association.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="border-t border-border-subtle">
          {mainActions.map((action, i) => (
            <StaggerItem key={action.title}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-8 md:py-10 border-b border-border-subtle items-start">
                <div className="lg:col-span-2 flex items-start gap-4">
                  <span className="font-heading font-black text-[44px] leading-none tracking-[-0.04em] text-primary/30 group-hover:text-primary transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-3 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <action.icon size={20} weight="duotone" className="text-primary-700" />
                  </div>
                  <h3 className="font-heading font-bold text-xl leading-tight tracking-tight text-text-primary pt-1.5">
                    {action.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base text-text-secondary leading-relaxed max-w-[58ch]">
                    {action.desc}
                  </p>
                  {action.crossRef && (
                    <p className="mt-3 text-sm text-text-muted">
                      En collaboration avec le{" "}
                      <Link
                        href={action.crossRef.href}
                        className="text-primary font-semibold hover:underline underline-offset-4"
                      >
                        {action.crossRef.label}
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ Temps forts — cartes magazine ════ */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <FadeIn className="max-w-2xl">
            <span className="eyebrow text-primary-700 mb-3">Temps forts</span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Ce qu'ils ont<br />déjà réalisé.
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group h-full rounded-3xl border border-border-subtle bg-surface-elevated p-7 flex flex-col hover:shadow-diffuse transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <CalendarBlank size={14} weight="duotone" className="text-primary" />
                  <span className="text-xs uppercase tracking-[0.14em] text-primary font-semibold">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl leading-snug tracking-tight text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                <div className="space-y-1.5 text-xs text-text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} weight="duotone" />
                    <span>{item.lieu}</span>
                  </div>
                  {item.chiffre && (
                    <div className="flex items-center gap-2">
                      <UsersThree size={12} weight="duotone" />
                      <span>{item.chiffre}</span>
                    </div>
                  )}
                </div>
                {item.crossRef && (
                  <p className="mt-5 pt-4 border-t border-border-subtle text-xs">
                    <Link
                      href={item.crossRef.href}
                      className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all duration-200"
                    >
                      {item.crossRef.text}
                      <ArrowUpRight size={12} weight="bold" />
                    </Link>
                  </p>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ Projets à venir ════ */}
      <Section className="bg-surface-muted">
        <FadeIn className="max-w-3xl mb-14">
          <span className="eyebrow text-primary-700 mb-3">En développement</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Ce qui se prépare<br />pour 2026 — 2027.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {upcomingProjects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="group h-full rounded-3xl border border-border-subtle bg-surface-elevated p-8 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <project.icon size={28} weight="duotone" className="text-primary-700" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-primary px-3 py-1.5 rounded-full bg-primary-100">
                    {project.status}
                  </span>
                </div>
                <p className="eyebrow text-text-muted mb-2">{project.date}</p>
                <h3 className="font-heading font-bold text-2xl leading-tight tracking-tight text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ CTA — bloc dark editorial ════ */}
      <Section className="pt-0">
        <FadeIn>
          <div className="grain relative rounded-[28px] bg-primary-950 p-10 md:p-16 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-600/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow text-accent-300 mb-4">
                  Rejoindre le mouvement
                </span>
                <h2 className="mt-3 font-heading font-black text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-white max-w-[14ch]">
                  Tu veux<br />t'engager ?
                </h2>
                <p className="mt-6 text-lg text-primary-100 max-w-[52ch] leading-relaxed">
                  Propose tes idées, participe aux maraudes, aux sorties, ou
                  crée ton propre projet citoyen.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full bg-white text-primary-950 hover:bg-zinc-100 border-none justify-between"
                  >
                    Rejoindre le pôle jeunesse
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                </Link>
                <Link href="/adhesion">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/60 bg-transparent justify-between"
                  >
                    Adhérer à l'association
                    <ArrowRight size={18} weight="bold" />
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
