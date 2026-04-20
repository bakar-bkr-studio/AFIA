"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDots } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

type Actu = {
  category: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

const actusAfia: Actu[] = [
  {
    category: "Sortie",
    title: "Aventure Land : sortie parc le 16 juillet",
    date: "Juillet 2026",
    excerpt:
      "Inscriptions ouvertes pour la grande sortie familiale au parc d'attractions dans les arbres. 60 places disponibles.",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Événement",
    title: "Repas solidaire au Colisée : 230 participants",
    date: "Mars 2026",
    excerpt:
      "Retour sur un moment fort de l'année : jeunes et parents réunis autour d'un grand repas citoyen.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Programme",
    title: "Aide aux devoirs : deux séances par semaine",
    date: "Toute l'année",
    excerpt:
      "Le programme d'accompagnement scolaire continue pour les élèves du primaire et du collège.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "À venir",
    title: "Tournoi de foot intergénérationnel en août",
    date: "Août 2026",
    excerpt:
      "Un tournoi à 5 pour réunir jeunes et adultes du quartier autour du sport.",
    image:
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=700&q=80",
  },
];

const actusMeaux: Actu[] = [
  {
    category: "Ville",
    title: "Quartier d'été 2026 : programmation municipale",
    date: "Juillet – Août",
    excerpt:
      "La Ville de Meaux lance la saison des animations estivales dans les quartiers. Suivez le programme officiel.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Dispositif",
    title: "Aides au logement : permanences CCAS",
    date: "Permanent",
    excerpt:
      "Le Centre Communal d'Action Sociale tient des permanences pour accompagner les habitants dans leurs démarches.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Culture",
    title: "Colisée de Meaux : saison 2026",
    date: "Septembre 2026",
    excerpt:
      "Découvrez la nouvelle saison culturelle du Colisée, partenaire régulier de nos événements.",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Jeunesse",
    title: "Prévention rixes : dispositif préfecture",
    date: "2026",
    excerpt:
      "La Préfecture de Seine-et-Marne soutient les actions de prévention menées par les associations locales.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=700&q=80",
  },
];

export function ActualitesSection() {
  const [tab, setTab] = React.useState<"afia" | "meaux">("afia");
  const items = tab === "afia" ? actusAfia : actusMeaux;
  const [featured, ...rest] = items;

  return (
    <Section>
      <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Le fil d&apos;actu
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            {"Actualités du moment"}
          </h2>
          <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[55ch]">
            {"Ce qui se passe à l'AFIA et dans la Ville de Meaux. Un fil pour rester informé, utile même si vous n'êtes pas encore adhérent."}
          </p>
        </div>

        <div className="inline-flex items-center gap-1 p-1 rounded-full border border-border-subtle bg-surface-elevated self-start md:self-auto">
          <button
            type="button"
            onClick={() => setTab("afia")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              tab === "afia"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Actualités AFIA
          </button>
          <button
            type="button"
            onClick={() => setTab("meaux")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              tab === "meaux"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Ville de Meaux
          </button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <FadeIn className="lg:col-span-7">
          <article className="group block h-full rounded-2xl overflow-hidden border border-border-subtle bg-surface hover:border-primary-200 transition-colors duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="primary">{featured.category}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <CalendarDots size={14} weight="duotone" />
                  {featured.date}
                </span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-3 max-w-[28ch]">
                {featured.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed max-w-[60ch]">
                {featured.excerpt}
              </p>
            </div>
          </article>
        </FadeIn>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {rest.map((a, i) => (
            <FadeIn key={a.title} delay={0.05 * (i + 1)}>
              <article className="group flex gap-4 rounded-2xl border border-border-subtle bg-surface p-4 hover:border-primary-200 transition-colors duration-300">
                <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden bg-surface-muted">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-[10px] py-0.5 px-2">
                      {a.category}
                    </Badge>
                    <span className="text-[11px] text-text-muted">{a.date}</span>
                  </div>
                  <h4 className="font-heading text-sm font-semibold tracking-tight text-text-primary leading-snug mb-1 line-clamp-2">
                    {a.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {a.excerpt}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/actualites">
          <Button variant="outline" size="lg">
            Voir toutes les actualités
            <ArrowRight size={18} weight="bold" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
