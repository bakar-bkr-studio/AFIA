"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDots } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const featuredProjects = [
  {
    title: "Programme Quartier d'été 2026",
    status: "En cours",
    date: "Avril – Août 2026",
    excerpt:
      "Six sorties : Paintball, Speed Park, Aventure Land, plage de Dieppe, Fort-Mahon et Nigloland. Ouvert à toutes les familles du quartier.",
    image:
      "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conférences sur les rixes",
    status: "À venir",
    date: "2026",
    excerpt:
      "Trois conférences animées par un sociologue pour sensibiliser les parents aux tensions entre jeunes. 150 participants attendus.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pôle image et audiovisuel",
    status: "En réflexion",
    date: "2026 – 2027",
    excerpt:
      "Un futur pôle dédié à la création de courts-métrages et contenus vidéo pour valoriser les talents locaux.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
];

export function ProjetsTeaser() {
  return (
    <Section className="bg-surface-elevated">
      <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Nos projets
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            {"Nos projets en cours"}
          </h2>
          <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[55ch]">
            {"Des projets concrets pour faire vivre le quartier tout au long de l'année et préparer demain."}
          </p>
        </div>
        <Link href="/projets" className="shrink-0">
          <Button variant="ghost" size="lg">
            Voir tous les projets
            <ArrowRight size={18} weight="bold" />
          </Button>
        </Link>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((p) => (
          <StaggerItem key={p.title}>
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
                <p className="text-sm text-text-secondary leading-relaxed">
                  {p.excerpt}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
