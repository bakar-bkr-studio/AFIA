"use client";

import Link from "next/link";
import { GameController, HandHeart, UsersThree, ArrowUpRight } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/Motion";

const missions = [
  {
    icon: GameController,
    tag: "Pôle ludique",
    title: "Sorties & animations",
    description:
      "Sorties familiales toute l'année (parcs, plages, marchés) et animations culturelles pour créer des moments de partage.",
    href: "/pole-ludique",
    accent: true,
  },
  {
    icon: HandHeart,
    tag: "Pôle sociétal",
    title: "Entraide & accompagnement",
    description:
      "Aide aux devoirs, repas solidaires, forums de prévention et soutien aux familles pour renforcer la cohésion du quartier.",
    href: "/pole-societal",
    accent: false,
  },
  {
    icon: UsersThree,
    tag: "Pôle jeunesse",
    title: "Autonomie & projets jeunes",
    description:
      "Un cadre pour aider les jeunes à porter leurs propres projets associatifs, en autonomie, dans l'esprit des valeurs AFIA.",
    href: "/pole-jeunesse",
    accent: false,
  },
];

export function MissionGrid() {
  return (
    <Section className="bg-surface-muted pb-12 md:pb-16" id="poles">
      {/* Intro éditoriale full-width */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-14 items-end">
        <FadeIn className="lg:col-span-7">
          <span className="eyebrow text-accent mb-4">Nos pôles d&apos;action</span>
          <h2 className="mt-3 font-heading font-black text-[clamp(28px,3.5vw,48px)] tracking-[-0.025em] text-primary-800 leading-[1.05]">
            Trois pôles,<br />
            un seul objectif.
          </h2>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {missions.map((m, i) => (
          <StaggerItem key={m.title}>
            <Link
              href={m.href}
              className="group block h-full rounded-3xl border bg-surface-elevated p-8 hover:-translate-y-1 hover:shadow-diffuse transition-all duration-300"
              style={{
                borderColor: m.accent
                  ? "rgba(232,102,43,0.25)"
                  : "var(--color-border-subtle)",
              }}
            >
              {/* Top row : numéro + flèche */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="font-heading font-black text-[44px] leading-none tracking-[-0.04em]"
                  style={{
                    color: m.accent
                      ? "rgba(232,102,43,0.35)"
                      : "rgba(90,42,122,0.25)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-12"
                  style={{
                    background: m.accent
                      ? "var(--color-accent)"
                      : "var(--color-primary-700)",
                    color: "white",
                  }}
                >
                  <ArrowUpRight size={18} weight="bold" />
                </span>
              </div>

              {/* Icon */}
              <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: m.accent
                    ? "var(--color-accent-100)"
                    : "var(--color-primary-50)",
                }}
              >
                <m.icon
                  size={24}
                  weight="duotone"
                  style={{
                    color: m.accent
                      ? "var(--color-accent-700)"
                      : "var(--color-primary-700)",
                  }}
                />
              </div>

              <span
                className="eyebrow mb-3"
                style={{
                  color: m.accent
                    ? "var(--color-accent)"
                    : "var(--color-primary-700)",
                }}
              >
                {m.tag}
              </span>
              <h3 className="font-heading font-bold text-xl tracking-tight text-text-primary mb-3 leading-snug">
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {m.description}
              </p>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
