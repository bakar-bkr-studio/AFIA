"use client";

import * as React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { CalendarDots } from "@phosphor-icons/react";
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
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Événement",
    title: "Repas solidaire au Colisée : 230 participants",
    date: "Mars 2026",
    excerpt:
      "Retour sur un moment fort de l'année : jeunes et parents réunis autour d'un grand repas citoyen au Colisée de Meaux.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Programme",
    title: "Aide aux devoirs : deux séances par semaine",
    date: "Toute l'année",
    excerpt:
      "Le programme d'accompagnement scolaire continue pour les élèves du primaire et du collège du quartier.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "À venir",
    title: "Tournoi de foot intergénérationnel en août",
    date: "Août 2026",
    excerpt:
      "Un tournoi à 5 pour réunir jeunes et adultes du quartier autour du sport et de la convivialité.",
    image:
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Sortie",
    title: "Plage de Dieppe — 29 juillet",
    date: "Juillet 2026",
    excerpt:
      "Une journée à la mer en famille, départ en car depuis le quartier.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Sortie",
    title: "Nigloland — 18 août",
    date: "Août 2026",
    excerpt:
      "Clôture de l'été avec une sortie au grand parc d'attractions de Dolancourt.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
  },
];

const actusMeaux: Actu[] = [
  {
    category: "Ville",
    title: "Quartier d'été 2026 : programmation municipale",
    date: "Juillet – Août",
    excerpt:
      "La Ville de Meaux lance la saison des animations estivales dans les quartiers.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Dispositif",
    title: "Aides au logement : permanences CCAS",
    date: "Permanent",
    excerpt:
      "Le Centre Communal d'Action Sociale tient des permanences pour accompagner les habitants dans leurs démarches.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Culture",
    title: "Colisée de Meaux : saison 2026",
    date: "Septembre 2026",
    excerpt:
      "Découvrez la nouvelle saison culturelle du Colisée, partenaire régulier de nos événements.",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Jeunesse",
    title: "Prévention rixes : dispositif préfecture",
    date: "2026",
    excerpt:
      "La Préfecture de Seine-et-Marne soutient les actions de prévention menées par les associations locales.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
  },
];

export function Actualites() {
  const [tab, setTab] = React.useState<"afia" | "meaux">("afia");
  const items = tab === "afia" ? actusAfia : actusMeaux;

  return (
    <>
      <Section className="pt-32 md:pt-40 pb-10">
        <FadeIn>
          <Badge variant="primary" className="mb-6">
            Actualités
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-3xl leading-none">
            Le fil d&apos;actu
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary max-w-[60ch]">
            {"Retrouvez ici tout ce qui se passe à l'AFIA, mais aussi les infos utiles de la Ville de Meaux pour les familles du quartier."}
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="mb-10 inline-flex items-center gap-1 p-1 rounded-full border border-border-subtle bg-surface-elevated">
          <button
            type="button"
            onClick={() => setTab("afia")}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full transition-colors",
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
              "px-5 py-2 text-sm font-medium rounded-full transition-colors",
              tab === "meaux"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Ville de Meaux
          </button>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a) => (
            <StaggerItem key={a.title}>
              <article className="group h-full rounded-2xl overflow-hidden border border-border-subtle bg-surface hover:border-primary-200 transition-colors duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="primary">{a.category}</Badge>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <CalendarDots size={14} weight="duotone" />
                      {a.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {a.excerpt}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
