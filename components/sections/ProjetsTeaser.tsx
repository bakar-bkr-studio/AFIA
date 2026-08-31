"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDots } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const featuredHighlights = [
  {
    title: "Programme Quartier d'été 2026",
    pole: "Pôle ludique",
    poleHref: "/pole-ludique",
    status: "En cours",
    date: "Juillet – Août 2026",
    excerpt:
      "Quatre sorties familiales : Aventure Land, plage de Dieppe, Fort-Mahon et Nigloland. Ouvertes à toutes les familles du quartier.",
    image:
      "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sortie Paintball : citoyenneté par le sport",
    pole: "Pôle sociétal",
    poleHref: "/pole-societal",
    status: "Réalisé",
    date: "30 avril 2026",
    excerpt:
      "Une sortie paintball suivie d'un barbecue pour sensibiliser 18 jeunes au respect des règles : au sport comme en société. Une action innovante de prévention.",
    image:
      "https://i.imgur.com/bTwviXR.jpeg",
  },
  {
    title: "Maraude organisée par les jeunes",
    pole: "Pôle jeunesse",
    poleHref: "/pole-jeunesse",
    status: "À venir",
    date: "Hiver 2026",
    excerpt:
      "Une maraude portée par les bénévoles du pôle jeunesse pour aller à la rencontre des personnes isolées et leur apporter un soutien concret.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
];

export function ProjetsTeaser() {
  return (
    <Section className="bg-surface-elevated">
      <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Temps forts
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            {"Nos actions récentes et à venir"}
          </h2>
          <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[55ch]">
            {"Des actions concrètes portées par nos trois pôles pour faire vivre le quartier tout au long de l'année."}
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredHighlights.map((p) => (
          <StaggerItem key={p.title}>
            <Link href={p.poleHref}>
              <article className="group h-full rounded-2xl overflow-hidden border border-border-subtle bg-surface hover:border-primary-200 transition-colors duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge
                      variant={p.status === "En cours" ? "primary" : "outline"}
                    >
                      {p.status}
                    </Badge>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <CalendarDots size={14} weight="duotone" />
                      {p.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {p.excerpt}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {p.pole}
                  </span>
                </div>
              </article>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
