"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";

// Vraies photos AFIA déjà utilisées sur le site. Ajouter ou remplacer ici.
const photos = [
  { src: "https://i.imgur.com/SqbljKJ.jpeg", alt: "Familles réunies lors d'une animation AFIA", className: "col-span-2 row-span-2" },
  { src: "https://i.imgur.com/yzcueAS.jpeg", alt: "Repas solidaire au Colisée de Meaux" },
  { src: "https://i.imgur.com/IHB9NJd.jpeg", alt: "Séance d'aide aux devoirs" },
  { src: "https://i.imgur.com/bTwviXR.jpeg", alt: "Jeunes lors de la sortie paintball", className: "col-span-2" },
  { src: "https://i.imgur.com/uTAwzy1.jpeg", alt: "Habitants réunis lors d'une conférence" },
  { src: "https://i.imgur.com/vVP44rF.jpeg", alt: "Moment de la sortie paintball" },
  { src: "https://i.imgur.com/HrwYaEr.jpeg", alt: "Jeunes réunis lors de la sortie paintball" },
  { src: "https://i.imgur.com/yEw1KzY.jpeg", alt: "Jeune participant à la sortie paintball" },
];

export function GalerieSection() {
  return (
    <Section className="py-16 md:py-24">
      <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
        <div className="max-w-2xl">
          <span className="eyebrow text-primary-700 mb-4">En images</span>
          <h2 className="mt-2 font-heading font-black text-[clamp(28px,3.5vw,48px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            La vie <span className="text-primary">de l’association.</span>
          </h2>
        </div>
        <p className="max-w-[40ch] text-base text-text-secondary leading-relaxed">
          Repas, sorties, aide aux devoirs, rencontres : quelques moments
          partagés avec les familles du quartier.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
        {photos.map((p, i) => (
          <FadeIn
            key={p.src}
            delay={i * 0.05}
            className={`relative overflow-hidden rounded-2xl bg-surface-muted ${p.className ?? ""}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes={p.className ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
