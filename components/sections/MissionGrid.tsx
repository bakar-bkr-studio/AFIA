"use client";

import Link from "next/link";
import { GameController, HandHeart, Users, ArrowRight } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const missions = [
  {
    icon: GameController,
    title: "Pôle ludique",
    tagline: "Sorties, animations, événements",
    description:
      "Organisation de sorties familiales toute l'année (parcs, plages, marchés) et d'animations culturelles pour créer des moments de partage.",
    href: "/activites",
  },
  {
    icon: HandHeart,
    title: "Pôle social",
    tagline: "Entraide et accompagnement",
    description:
      "Aide aux devoirs, repas solidaires, forums de prévention et soutien aux familles pour renforcer la cohésion du quartier.",
    href: "/activites",
  },
  {
    icon: Users,
    title: "Vie associative",
    tagline: "Engagement et bénévolat",
    description:
      "Assemblées, bénévolat, bureau ouvert : la vie de l'AFIA se construit avec ses adhérents, habitants du quartier de Beauval.",
    href: "/association",
  },
];

export function MissionGrid() {
  return (
    <Section className="bg-surface-elevated">
      <div className="mb-16 max-w-2xl">
        <span className="text-xs font-medium tracking-widest uppercase text-primary">
          Nos pôles
        </span>
        <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
          {"Ce que nous faisons concrètement"}
        </h2>
        <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[55ch]">
          {"Trois pôles complémentaires pour animer le quartier, soutenir les familles et faire vivre l'association au quotidien."}
        </p>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {missions.map((m) => (
          <StaggerItem key={m.title}>
            <Link
              href={m.href}
              className="group block h-full rounded-2xl border border-border-subtle p-8 bg-surface hover:border-primary-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <m.icon size={24} weight="duotone" className="text-primary" />
              </div>
              <p className="text-xs font-medium tracking-wider uppercase text-primary mb-2">
                {m.tagline}
              </p>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-3">
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary max-w-[45ch] mb-6">
                {m.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                En savoir plus
                <ArrowRight size={16} weight="bold" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
