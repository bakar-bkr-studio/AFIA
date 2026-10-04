"use client";

import { Briefcase, CalendarCheck, Desktop, EnvelopeSimple, Megaphone } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const contactEmail = "famillesdicietdailleurs@gmail.com";

// Postes ouverts (source : MEMOIRE_AFIA.md). Retirer un poste dès qu'il est pourvu.
const postes: { icon: Icon; title: string; desc: string; temps: string; debutants?: boolean }[] = [
  {
    icon: Briefcase,
    title: "Chargé(e) de projet",
    desc: "Aider à préparer et suivre les projets de l’association, aux côtés du président.",
    temps: "Quelques heures par semaine, flexible",
  },
  {
    icon: Megaphone,
    title: "Chargé(e) de communication",
    desc: "Réseaux sociaux et rédaction, ou montage vidéo et visuels. 2 postes.",
    temps: "Quelques heures par semaine + événements",
  },
  {
    icon: Desktop,
    title: "Bénévole numérique",
    desc: "Accompagner les habitants dans leurs démarches et l’usage du numérique.",
    temps: "Environ 2 h par semaine, souple",
    debutants: true,
  },
  {
    icon: CalendarCheck,
    title: "Bénévole appui événements",
    desc: "Logistique et accueil lors des événements, et un coup de main régulier si vous le souhaitez.",
    temps: "Selon vos disponibilités",
    debutants: true,
  },
];

function candidatureMailto(poste: string) {
  const subject = `[Site AFIA] Candidature bénévole : ${poste}`;
  const body = `Bonjour,\n\nJe souhaite proposer ma candidature pour le poste de ${poste}.\n\nNom et prénom :\nTéléphone :\nMes disponibilités :\nQuelques mots sur moi :\n\n(Vous pouvez joindre votre CV à ce message.)\n\nMerci.`;
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function BenevolesSection() {
  return (
    <Section id="benevoles" className="bg-surface-muted py-16 md:py-24 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 md:mb-12 items-end">
        <FadeIn className="lg:col-span-7">
          <span className="eyebrow text-accent mb-4">On recrute</span>
          <h2 className="mt-2 font-heading font-black text-[clamp(28px,3.5vw,48px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Rejoignez l’équipe<br />
            <span className="text-accent">bénévole.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-5">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Quelques heures suffisent pour faire vivre le quartier. Choisissez
            un poste et envoyez-nous votre candidature par e-mail, avec votre CV
            si vous en avez un.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {postes.map((p) => (
          <StaggerItem key={p.title}>
            <div className="h-full flex flex-col rounded-3xl border border-border-subtle bg-surface-elevated p-6">
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-2xl bg-accent-100 flex items-center justify-center">
                  <p.icon size={24} weight="duotone" className="text-accent-700" />
                </div>
                {p.debutants && (
                  <span className="rounded-full bg-primary-50 text-primary-800 text-[10px] uppercase tracking-[0.12em] font-semibold px-2.5 py-1">
                    Débutants bienvenus
                  </span>
                )}
              </div>
              <h3 className="font-heading font-bold text-lg leading-snug text-text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{p.desc}</p>
              <p className="mt-4 text-xs font-semibold text-primary-700">{p.temps}</p>
              <a
                href={candidatureMailto(p.title)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-3 transition-colors"
              >
                <EnvelopeSimple size={18} weight="duotone" />
                Postuler par e-mail
              </a>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
