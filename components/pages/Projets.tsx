"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  CalendarBlank,
  ForkKnife,
  HandHeart,
  ImageSquare,
  MapPin,
  MegaphoneSimple,
  MicrophoneStage,
  PresentationChart,
  ShieldCheck,
  SoccerBall,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";

const projectFacts = [
  {
    icon: MapPin,
    label: "Lieu",
    value: "Colisée de Meaux",
  },
  {
    icon: CalendarBlank,
    label: "Date",
    value: "2 mars 2026",
  },
  {
    icon: UsersThree,
    label: "Participation",
    value: "+230 personnes accueillies",
  },
  {
    icon: MicrophoneStage,
    label: "Temps fort",
    value: "Présence du maire",
  },
];

const projectImpact = [
  "Renforcement du lien social",
  "Sensibilisation des jeunes",
  "Action solidaire concrète",
];

const summerActivities = [
  "Sorties en parcs d’attraction",
  "Journées à la mer",
  "Chasses au trésor",
  "Animations et jeux collectifs",
];

const strengths = [
  "Accès direct aux professionnels",
  "Échanges simples et accessibles",
  "Présence d’acteurs institutionnels",
];

const sideProjects = [
  {
    icon: SoccerBall,
    title: "Tournoi de football",
    desc: "Tournoi intergénérationnel à 5 pour rassembler les jeunes et les adultes du quartier.",
  },
  {
    icon: PresentationChart,
    title: "Conférences",
    desc: "Rencontres autour des rixes et de la cohésion sociale avec des intervenants spécialisés.",
  },
  {
    icon: ImageSquare,
    title: "Pôle audiovisuel",
    desc: "Projet en réflexion pour valoriser les talents locaux à travers vidéo, photo et contenus numériques.",
  },
];

export function Projets() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <Badge variant="primary" className="mb-6">
              Notre impact sur le terrain
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-2xl leading-[1.05]">
              {"Des projets concrets au service des habitants"}
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-text-secondary max-w-[60ch]">
              {
                "À travers ses actions, AFIA agit directement au cœur du quartier pour créer du lien, informer et accompagner les familles."
              }
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-muted">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80"
                alt="Habitants réunis lors d'un événement collectif"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-primary-900/10 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Projet phare */}
      <Section className="bg-surface-elevated">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-muted">
              <Image
                src="https://i.imgur.com/yzcueAS.jpeg"
                alt="Repas collectif et convivial"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <Badge variant="primary" className="mb-5">
              Projet phare
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              {"Un repas pour rassembler et sensibiliser"}
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-border-subtle bg-surface p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <fact.icon size={18} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                        {fact.label}
                      </p>
                      <p className="text-sm text-text-primary mt-1">{fact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                {
                  "Ce projet a permis de rassembler habitants, familles et jeunes autour d’un moment convivial et engagé."
                }
              </p>
              <p>
                {
                  "Au-delà du repas, la soirée a été l’occasion d’échanger autour des problématiques liées aux rixes, dans un cadre ouvert et intergénérationnel."
                }
              </p>
              <p>
                {
                  "Des denrées alimentaires ont également été collectées puis redistribuées à des associations venant en aide aux personnes dans le besoin."
                }
              </p>
            </div>

            <div className="mt-7 rounded-2xl border border-border-subtle bg-surface p-5">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                Impact
              </p>
              <ul className="space-y-2">
                {projectImpact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Forums */}
      <Section>
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Projet 2
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            {"Informer et accompagner directement au pied des immeubles"}
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
          <StaggerItem>
            <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
              <div className="h-11 w-11 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <MegaphoneSimple size={22} weight="duotone" className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-3">
                {"Forum santé"}
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                {
                  "Des acteurs majeurs du territoire, dont la CPAM, se sont déplacés dans le quartier pour proposer des échanges, des conseils et des actions de dépistage directement accessibles aux habitants."
                }
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
              <div className="h-11 w-11 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <ShieldCheck size={22} weight="duotone" className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-3">
                {"Forum justice"}
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                {
                  "Des professionnels du droit, avocats et acteurs du secteur judiciaire, sont venus à la rencontre des habitants pour répondre aux questions, expliquer les droits et accompagner les situations du quotidien."
                }
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-7 md:p-8">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Objectif
            </p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              {
                "Permettre aux habitants d’accéder facilement à des informations essentielles, sans contrainte de déplacement."
              }
            </p>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mt-6 mb-3">
              Points forts
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {strengths.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-border-subtle bg-surface px-4 py-3 text-sm text-text-secondary"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Quartiers d'été */}
      <Section className="bg-surface-elevated">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <FadeIn className="lg:col-span-7">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Projet 3
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary max-w-2xl leading-[1.1]">
              {"Offrir des moments d’évasion aux familles"}
            </h2>
            <p className="mt-5 text-sm md:text-base text-text-secondary leading-relaxed max-w-[62ch]">
              {
                "Chaque été, AFIA organise un programme d’activités pour permettre aux familles du quartier de vivre des moments de détente et de découverte."
              }
            </p>

            <div className="mt-6 rounded-2xl border border-border-subtle bg-surface p-5">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                Activités proposées
              </p>
              <ul className="space-y-2">
                {summerActivities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-border-subtle bg-surface p-5">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                Objectif
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {
                  "Sortir du quotidien, créer des souvenirs et renforcer les liens familiaux et sociaux."
                }
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-muted">
              <Image
                src="https://i.imgur.com/NZm1meQ.jpeg"
                alt="Famille en sortie de loisirs"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Vision */}
      <Section>
        <FadeIn>
          <div className="rounded-3xl bg-primary-950 p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-primary-800/25 blur-3xl pointer-events-none" />
            <div className="relative">
              <Badge className="bg-white/15 text-white border border-white/20 mb-5">
                Vision
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white leading-[1.1] max-w-3xl">
                {"Des projets qui s’inscrivent dans la durée"}
              </h2>
              <p className="mt-4 text-primary-100 max-w-[65ch] leading-relaxed">
                {
                  "AFIA développe continuellement de nouvelles actions pour répondre aux besoins du quartier : événements, accompagnement social, initiatives locales et nouveaux partenariats."
                }
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Projets secondaires */}
      <Section className="pt-0">
        <FadeIn className="max-w-3xl mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Projets secondaires
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            D’autres actions en développement
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {sideProjects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
                <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <project.icon size={20} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{project.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <FadeIn>
          <div className="rounded-3xl border border-border-subtle bg-surface-elevated p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                Participer
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary leading-[1.1]">
                {"Envie de soutenir ou participer à nos projets ?"}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed max-w-[60ch]">
                {
                  "Rejoignez l’équipe, proposez une idée de projet ou prenez contact avec l’association."
                }
              </p>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button>
                  <HandHeart size={18} weight="duotone" />
                  Devenir bénévole
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  <Sparkle size={18} weight="duotone" />
                  Proposer un projet
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost">
                  <ForkKnife size={18} weight="duotone" />
                  Nous contacter
                  <ArrowRight size={16} weight="bold" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
