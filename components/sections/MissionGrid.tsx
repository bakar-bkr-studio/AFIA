"use client";

import Image from "next/image";
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
      "Sorties familles en parcs et à la plage, fêtes de quartier au fil des saisons, jeux et ateliers créatifs.",
    href: "/pole-ludique",
    image: "https://i.imgur.com/SqbljKJ.jpeg",
    accent: true,
  },
  {
    icon: HandHeart,
    tag: "Pôle sociétal",
    title: "Entraide & accompagnement",
    description:
      "Aide aux devoirs, repas solidaires, forums de prévention et soutien aux familles pour renforcer la cohésion du quartier.",
    href: "/pole-societal",
    image: "https://i.imgur.com/IHB9NJd.jpeg",
    accent: false,
  },
  {
    icon: UsersThree,
    tag: "Pôle jeunesse",
    title: "Autonomie & projets jeunes",
    description:
      "Un cadre pour aider les jeunes à porter leurs propres projets associatifs, en autonomie, dans l'esprit des valeurs AFIA.",
    href: "/pole-jeunesse",
    image: "https://i.imgur.com/bTwviXR.jpeg",
    accent: false,
  },
];

export function MissionGrid() {
  return (
    <Section className="bg-surface-muted py-16 md:py-24" id="poles">
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
              className="group flex flex-col h-full rounded-3xl overflow-hidden border bg-surface-elevated hover:-translate-y-1 hover:shadow-diffuse transition-all duration-300"
              style={{
                borderColor: m.accent
                  ? "rgba(232,102,43,0.25)"
                  : "var(--color-border-subtle)",
              }}
            >
              {/* Photo + numéro */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                <Image
                  src={m.image}
                  alt={m.tag}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
                <span className="absolute bottom-4 left-5 font-heading font-black text-[40px] leading-none tracking-[-0.04em] text-white/90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12"
                  style={{
                    background: m.accent
                      ? "var(--color-accent)"
                      : "var(--color-primary-700)",
                  }}
                >
                  <ArrowUpRight size={18} weight="bold" />
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: m.accent
                        ? "var(--color-accent-100)"
                        : "var(--color-primary-50)",
                    }}
                  >
                    <m.icon
                      size={20}
                      weight="duotone"
                      style={{
                        color: m.accent
                          ? "var(--color-accent-700)"
                          : "var(--color-primary-700)",
                      }}
                    />
                  </div>
                  <span
                    className="eyebrow"
                    style={{
                      color: m.accent
                        ? "var(--color-accent)"
                        : "var(--color-primary-700)",
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl tracking-tight text-text-primary mb-3 leading-snug">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {m.description}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
