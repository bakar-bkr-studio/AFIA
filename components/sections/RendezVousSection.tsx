"use client";

import Link from "next/link";
import { ArrowRight, CalendarBlank, Confetti, GraduationCap, UsersThree } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const rendezVous: {
  icon: Icon;
  title: string;
  when: string;
  details: string[];
  href: string;
  cta: string;
  accent?: boolean;
}[] = [
  {
    icon: GraduationCap,
    title: "Aide aux devoirs",
    when: "Mardi et vendredi · 16h30 – 18h",
    details: ["Du CP à la 3ème", "Gratuit, 10 places", "Inscription par e-mail"],
    href: "/pole-societal#aide-aux-devoirs",
    cta: "Infos et inscription",
  },
  {
    icon: UsersThree,
    title: "Permanence",
    when: "Un mercredi sur deux · 17h30 – 19h",
    details: ["Pendant la réunion des adhérents", "Ouverte à tous pour vos questions", "Sur place ou par téléphone"],
    href: "/contact",
    cta: "Nous trouver",
  },
  {
    icon: Confetti,
    title: "Fêtes de quartier",
    when: "Toute l’année",
    details: ["Chasse aux œufs à Pâques", "Fête des voisins, Halloween", "Marché de Noël en décembre"],
    href: "/pole-ludique#fetes",
    cta: "Le calendrier",
    accent: true,
  },
];

export function RendezVousSection() {
  return (
    <Section className="bg-paper-warm py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-12 items-end">
        <FadeIn className="lg:col-span-7">
          <span className="eyebrow text-primary-700 mb-4">Nos rendez-vous</span>
          <h2 className="mt-2 font-heading font-black text-[clamp(28px,3.5vw,48px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Quand venir <span className="text-primary">nous voir ?</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-5">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Des rendez-vous réguliers au local de l’association, 4 Square de la
            Brie, et des fêtes tout au long de l’année.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {rendezVous.map((r) => (
          <StaggerItem key={r.title}>
            <Link
              href={r.href}
              className="group h-full flex flex-col rounded-3xl border border-border-subtle bg-surface-elevated p-7 hover:border-primary/30 hover:shadow-diffuse transition-all duration-300"
            >
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-5 ${r.accent ? "bg-accent-100" : "bg-primary-50"}`}>
                <r.icon size={24} weight="duotone" className={r.accent ? "text-accent-700" : "text-primary-700"} />
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary">{r.title}</h3>
              <p className={`mt-3 inline-flex items-center gap-2 self-start rounded-full px-3 py-1.5 text-sm font-semibold ${r.accent ? "bg-accent-100 text-accent-700" : "bg-primary-50 text-primary-800"}`}>
                <CalendarBlank size={16} weight="duotone" />
                {r.when}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-text-secondary flex-1">
                {r.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${r.accent ? "bg-accent" : "bg-primary"}`} />
                    {d}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {r.cta}
                <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
