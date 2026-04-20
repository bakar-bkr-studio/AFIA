"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { Calendar, MapPin, Users, HeartStraight } from "@phosphor-icons/react";

const stats = [
  {
    icon: Calendar,
    value: "2010",
    label: "Année de création",
  },
  {
    icon: MapPin,
    value: "Meaux",
    label: "Quartier de Beauval",
  },
  {
    icon: Users,
    value: "230",
    label: "Participants au dernier repas solidaire",
  },
  {
    icon: HeartStraight,
    value: "15 ans",
    label: "Au service des familles",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80",
    alt: "Rassemblement convivial",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=80",
    alt: "Aide aux devoirs",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80",
    alt: "Action solidaire",
  },
];

export function ImpactSection() {
  return (
    <Section className="bg-surface">
      <FadeIn className="max-w-2xl mb-16">
        <span className="text-xs font-medium tracking-widest uppercase text-primary">
          Notre ancrage
        </span>
        <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
          {"Une association ancrée dans son quartier"}
        </h2>
        <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[55ch]">
          {"Depuis plus de quinze ans, l'AFIA vit au rythme du quartier de Beauval à Meaux. Nous connaissons ses familles, ses jeunes et ses habitants — et nous agissons chaque semaine à leurs côtés."}
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="rounded-2xl border border-border-subtle p-6 bg-surface-elevated h-full">
              <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <s.icon size={20} weight="duotone" className="text-primary" />
              </div>
              <p className="font-heading text-2xl md:text-3xl font-bold tracking-tighter text-text-primary">
                {s.value}
              </p>
              <p className="mt-1 text-xs md:text-sm text-text-secondary leading-snug">
                {s.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {gallery.map((img, i) => (
          <StaggerItem
            key={img.src}
            className={i === 0 ? "md:col-span-1 md:row-span-1" : ""}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-muted">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
