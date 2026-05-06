"use client";

import Link from "next/link";
import { GameController, HandHeart, Users, UsersThree, ArrowRight } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/Motion";

const missions = [
  {
    icon: GameController,
    tag: "Pôle ludique",
    title: "Sorties & animations",
    description:
      "Organisation de sorties familiales toute l'année (parcs, plages, marchés) et d'animations culturelles pour créer des moments de partage.",
    href: "/activites",
    accent: false,
  },
  {
    icon: HandHeart,
    tag: "Pôle social",
    title: "Entraide & accompagnement",
    description:
      "Aide aux devoirs, repas solidaires, forums de prévention et soutien aux familles pour renforcer la cohésion du quartier.",
    href: "/activites",
    accent: true,
  },
  {
    icon: UsersThree,
    tag: "Pôle jeunesse",
    title: "Autonomie & projets jeunes",
    description:
      "Un cadre pour aider les jeunes à porter leurs propres projets associatifs, en autonomie, dans l'esprit des valeurs AFIA.",
    href: "/association",
    accent: false,
  },
  {
    icon: Users,
    tag: "Vie associative",
    title: "Engagement & bénévolat",
    description:
      "Assemblées, bénévolat, bureau ouvert : la vie de AFIA se construit avec ses adhérents, habitants du quartier de Beauval.",
    href: "/association",
    accent: false,
  },
];

export function MissionGrid() {
  return (
    <Section className="bg-surface-muted">
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <FadeIn className="lg:col-span-4">
          <span className="eyebrow text-accent mb-4">Nos pôles d&apos;action</span>
          <h2 className="mt-3 font-heading font-black text-[clamp(28px,3.5vw,48px)] tracking-[-0.025em] text-primary-800 leading-[1.05]">
            Deux piliers,<br />
            un seul objectif.
          </h2>
          <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[50ch]">
            Le pôle ludique anime la vie du quartier. Le pôle social
            s&apos;attaque aux enjeux structurants : parentalité, prévention,
            accompagnement scolaire.
          </p>
        </FadeIn>

        <StaggerContainer className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {missions.map((m) => (
            <StaggerItem key={m.title}>
              <Link
                href={m.href}
                className="group flex flex-col h-full rounded-2xl border bg-surface-elevated p-7 hover:shadow-sm transition-all duration-300"
                style={{
                  borderColor: m.accent
                    ? "rgba(232,102,43,0.25)"
                    : "var(--color-border-subtle)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    background: m.accent
                      ? "var(--color-accent-100)"
                      : "var(--color-primary-50)",
                  }}
                >
                  <m.icon
                    size={22}
                    weight="duotone"
                    style={{
                      color: m.accent
                        ? "var(--color-accent-700)"
                        : "var(--color-primary-700)",
                    }}
                  />
                </div>
                <p
                  className="eyebrow mb-2"
                  style={{
                    color: m.accent
                      ? "var(--color-accent)"
                      : "var(--color-primary-700)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {m.tag}
                </p>
                <h3 className="font-heading font-bold text-lg tracking-tight text-text-primary mb-3">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary flex-1">
                  {m.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold mt-6 group-hover:gap-2.5 transition-all duration-200"
                  style={{
                    color: m.accent
                      ? "var(--color-accent)"
                      : "var(--color-primary-700)",
                  }}
                >
                  En savoir plus
                  <ArrowRight size={15} weight="bold" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
