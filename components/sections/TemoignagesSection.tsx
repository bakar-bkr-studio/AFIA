"use client";

import { Quotes } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

// Retours reçus par l'association (reformulés). À remplacer par les mots exacts
// des familles et bénévoles quand ils seront disponibles.
const temoignages = [
  {
    quote:
      "Merci pour l’aide aux devoirs : nos enfants sont devenus beaucoup plus autonomes.",
    author: "Des parents",
    context: "Aide aux devoirs",
  },
  {
    quote:
      "Une organisation impeccable et de super belles sorties. On attend déjà les prochaines !",
    author: "Des familles",
    context: "Sorties d’été",
  },
  {
    quote:
      "Les événements sont très bien organisés. On a envie de revenir donner un coup de main.",
    author: "Des bénévoles",
    context: "Événements AFIA",
  },
];

export function TemoignagesSection() {
  return (
    <Section className="grain relative bg-primary-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative">
        <FadeIn className="max-w-3xl mb-10 md:mb-12">
          <span className="eyebrow text-accent-300 mb-4">Ils en parlent</span>
          <h2 className="mt-2 font-heading font-black text-[clamp(28px,3.5vw,48px)] tracking-[-0.025em] text-white leading-[1.05]">
            Ce que nous disent<br />
            <span className="text-accent-300">les familles.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {temoignages.map((t) => (
            <StaggerItem key={t.context}>
              <figure className="h-full flex flex-col rounded-3xl bg-white/[0.06] border border-white/15 p-7 md:p-8">
                <Quotes size={36} weight="fill" className="text-accent-300 mb-5" />
                <blockquote className="font-heading font-bold text-lg md:text-xl leading-snug text-white flex-1">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/15">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-primary-200">{t.context}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
