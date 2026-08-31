"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  CalendarBlank,
  ChalkboardTeacher,
  ClockAfternoon,
  EnvelopeSimple,
  GraduationCap,
  HandHeart,
  Heartbeat,
  MapPin,
  MegaphoneSimple,
  MicrophoneStage,
  Plant,
  Scales,
  ShieldCheck,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";

/* ── Données ── */

const poleInfo = {
  audience:
    "Familles, parents, enfants en difficulté scolaire, habitants du quartier",
  mission:
    "Écoute, prévention et accompagnement des familles et des jeunes face aux difficultés du quotidien.",
  impact:
    "Un accès simplifié à l'information, aux droits et au soutien éducatif, directement au cœur du quartier.",
};

const homeworkHighlights = [
  { icon: GraduationCap, title: "Du CP à la 3ème" },
  { icon: CalendarBlank, title: "Tous les mardis et vendredis" },
  { icon: ClockAfternoon, title: "16h30 – 18h" },
  { icon: ChalkboardTeacher, title: "Professeure des écoles + bénévoles" },
];

const forums = [
  {
    icon: MegaphoneSimple,
    title: "Forum santé",
    desc: "Des acteurs majeurs du territoire, dont la CPAM, se sont déplacés dans le quartier pour proposer des échanges, des conseils et des actions de dépistage directement accessibles aux habitants.",
  },
  {
    icon: ShieldCheck,
    title: "Forum justice",
    desc: "Des professionnels du droit, avocats et acteurs du secteur judiciaire, sont venus à la rencontre des habitants pour répondre aux questions, expliquer les droits et accompagner les situations du quotidien.",
  },
];

const forumStrengths = [
  "Accès direct aux professionnels",
  "Échanges simples et accessibles",
  "Présence d'acteurs institutionnels",
];

const projectFacts = [
  { icon: MapPin, label: "Lieu", value: "Colisée de Meaux" },
  { icon: CalendarBlank, label: "Date", value: "2 mars 2026" },
  { icon: UsersThree, label: "Participation", value: "+230 personnes accueillies" },
  { icon: MicrophoneStage, label: "Temps fort", value: "Présence du maire" },
];

const projectImpact = [
  "Renforcement du lien social",
  "Sensibilisation des jeunes",
  "Action solidaire concrète",
];

const upcomingProjects = [
  {
    icon: MegaphoneSimple,
    title: "Conférences sur les rixes",
    date: "2026",
    status: "À venir",
    desc: "Trois conférences animées par un sociologue pour sensibiliser les parents aux tensions entre jeunes. 150 participants attendus.",
  },
  {
    icon: Plant,
    title: "Atelier jardinage et parentalité",
    date: "2026",
    status: "À confirmer",
    desc: "Un projet éducatif et citoyen mêlant jardinage, parentalité et échanges intergénérationnels. Parents-enfants et seniors, environ 30 participants.",
  },
  {
    icon: Heartbeat,
    title: "Initiative bien-être femmes",
    date: "2026",
    status: "À confirmer",
    desc: "Une initiative dédiée au bien-être et à l'expression des jeunes filles et femmes du quartier.",
  },
];

/* ── Composant ── */

export function PoleSocietal() {
  return (
    <>
      {/* ════ Hero — sobre, éditorial ════ */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <FadeIn className="lg:col-span-7">
              <span className="eyebrow text-primary-700 mb-6">
                Pôle sociétal · accompagnement & prévention
              </span>
              <h1 className="font-heading font-black text-[clamp(44px,6.5vw,88px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Accompagner.<br />
                Informer.<br />
                <span className="text-primary">Prévenir.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[58ch]">
                Aide aux devoirs, forums santé et justice, prévention des
                rixes, accompagnement des familles : le pôle sociétal s'attaque
                aux enjeux structurants du quartier.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                  <Image
                    src="https://i.imgur.com/uTAwzy1.jpeg"
                    alt="Habitants réunis lors d'une conférence de prévention"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-primary-950/10 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 md:-left-10 glass rounded-2xl px-6 py-5 max-w-[240px]">
                  <p className="font-heading font-black text-[44px] leading-none text-primary-800 tracking-[-0.04em]">
                    +230
                  </p>
                  <p className="mt-2 text-xs text-text-muted uppercase tracking-[0.14em] font-semibold">
                    personnes accueillies au repas solidaire 2026
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════ Présentation — bento ════ */}
      <Section>
        <FadeIn className="max-w-3xl mb-12">
          <span className="eyebrow text-primary-700 mb-3">Ce qu'est ce pôle</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Au plus près<br />
            <span className="text-primary">des familles.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <FadeIn className="md:col-span-7">
            <div className="grain h-full rounded-3xl bg-primary-950 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-800/25 blur-3xl pointer-events-none" />
              <div className="relative">
                <Scales size={28} weight="duotone" className="text-accent-300 mb-6" />
                <span className="eyebrow text-accent-300 mb-3">Sa mission</span>
                <p className="mt-2 font-heading font-bold text-2xl md:text-[28px] leading-[1.2] tracking-tight text-white max-w-[36ch]">
                  {poleInfo.mission}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-primary-100 max-w-[50ch]">
                  L'AFIA porte des actions ancrées dans le quotidien : soutien
                  scolaire régulier, forums au pied des immeubles, repas
                  citoyens — pour rendre les droits, l'information et le
                  soutien accessibles à tous.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="md:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-7">
                <UsersThree size={24} weight="duotone" className="text-primary mb-4" />
                <span className="eyebrow text-primary-700 mb-2">À qui</span>
                <p className="mt-2 font-heading font-bold text-lg leading-snug text-text-primary">
                  {poleInfo.audience}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-7">
                <HandHeart size={24} weight="duotone" className="text-primary mb-4" />
                <span className="eyebrow text-primary-700 mb-2">L'apport</span>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {poleInfo.impact}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ════ Action phare — aide aux devoirs (mise en page magazine) ════ */}
      <Section className="bg-surface-muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <FadeIn className="lg:col-span-5">
            <div className="relative pb-6 pr-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                <Image
                  src="https://i.imgur.com/IHB9NJd.jpeg"
                  alt="Événement associatif AFIA à Beauval"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 rounded-2xl bg-surface-elevated border border-border-subtle px-5 py-4 shadow-diffuse">
                <p className="eyebrow text-primary-700">Action phare</p>
                <p className="mt-1 font-heading font-bold text-base tracking-tight text-text-primary">
                  Aide aux devoirs
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <span className="eyebrow text-primary-700 mb-4">
              Accompagnement scolaire
            </span>
            <h2 className="mt-2 font-heading font-black text-[clamp(28px,3.5vw,44px)] leading-[1.05] tracking-[-0.025em] text-primary-950 max-w-[18ch]">
              Un cadre régulier pour la réussite des enfants.
            </h2>
            <p className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-[58ch]">
              Nous accompagnons les enfants dans leur réussite scolaire en leur
              offrant un cadre structuré, bienveillant et régulier.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {homeworkHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-subtle bg-surface-elevated p-4 flex items-start gap-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <item.icon size={20} weight="duotone" className="text-primary-700" />
                  </div>
                  <p className="text-sm text-text-primary leading-relaxed pt-1.5 font-medium">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button variant="outline">Se renseigner</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ════ Forums ════ */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-primary-700 mb-3">
              Actions de terrain
            </span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Informer<br />au pied<br />
              <span className="text-primary">des immeubles.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-text-secondary max-w-[60ch]">
              Permettre aux habitants d'accéder facilement à des informations
              essentielles, sans contrainte de déplacement — en faisant venir
              les institutions directement dans le quartier.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {forumStrengths.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-border-subtle bg-surface-elevated px-4 py-2 text-sm text-text-secondary"
                >
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {forums.map((forum) => (
            <StaggerItem key={forum.title}>
              <article className="group h-full rounded-3xl border border-border-subtle bg-surface-elevated p-8 md:p-10 hover:border-primary/30 transition-colors duration-300">
                <div className="h-14 w-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                  <forum.icon size={28} weight="duotone" className="text-primary-700" />
                </div>
                <h3 className="font-heading font-bold text-2xl leading-tight tracking-tight text-text-primary mb-4">
                  {forum.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {forum.desc}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ Temps fort — repas solidaire (mise en page magazine) ════ */}
      <Section className="bg-surface-muted">
        <FadeIn className="max-w-3xl mb-14">
          <span className="eyebrow text-primary-700 mb-3">Temps fort</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Un repas pour<br />
            rassembler et <span className="text-primary">sensibiliser.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
              <Image
                src="https://i.imgur.com/yzcueAS.jpeg"
                alt="Repas collectif et convivial"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
              {projectFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-border-subtle bg-surface-elevated p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <fact.icon size={18} weight="duotone" className="text-primary-700" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-primary-700 font-semibold">
                        {fact.label}
                      </p>
                      <p className="text-sm text-text-primary mt-1 leading-snug font-medium">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              <p>
                Ce projet a permis de rassembler habitants, familles et jeunes
                autour d'un moment convivial et engagé.
              </p>
              <p>
                Au-delà du repas, la soirée a été l'occasion d'échanger autour
                des problématiques liées aux rixes, dans un cadre ouvert et
                intergénérationnel.
              </p>
              <p>
                Des denrées alimentaires ont également été collectées puis
                redistribuées à des associations venant en aide aux personnes
                dans le besoin.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {projectImpact.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-primary/15 bg-primary-50/40 px-4 py-3 text-sm text-primary-900 font-medium leading-snug"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-text-muted italic">
              Projet mené avec l'appui du{" "}
              <Link
                href="/pole-jeunesse"
                className="text-primary font-semibold hover:underline underline-offset-4"
              >
                pôle jeunesse
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ════ Action réalisée — Sortie Paintball ════ */}
      <Section className="bg-surface-muted">
        <FadeIn className="max-w-3xl mb-14">
          <span className="eyebrow text-primary-700 mb-3">Action réalisée</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Sortie Paintball :<br />
            <span className="text-primary">citoyenneté par le sport.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
              <Image
                src="https://i.imgur.com/bTwviXR.jpeg"
                alt="Jeunes lors de la sortie paintball"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
              <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-4">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <CalendarBlank size={18} weight="duotone" className="text-primary-700" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-primary-700 font-semibold">
                      Date
                    </p>
                    <p className="text-sm text-text-primary mt-1 leading-snug font-medium">
                      Jeudi 30 avril 2026
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-4">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <UsersThree size={18} weight="duotone" className="text-primary-700" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-primary-700 font-semibold">
                      Participants
                    </p>
                    <p className="text-sm text-text-primary mt-1 leading-snug font-medium">
                      18 jeunes du quartier
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              <p>
                Une action innovante de sensibilisation à la citoyenneté par le sport. Les jeunes ont participé à une sortie paintball suivie d'un barbecue.
              </p>
              <p>
                <span className="font-semibold text-text-primary">L'objectif pédagogique :</span> montrer que le sport, comme la société, fonctionne sur des règles. Comprendre que respecter ces règles, c'est respecter les autres, c'est penser au bien-être collectif et non seulement à son plaisir personnel.
              </p>
              <p>
                Lors du barbecue, les jeunes ont pu discuter de ces valeurs dans un cadre convivial, créant un moment d'échange authentique autour de l'importance du respect et de la citoyenneté.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary-50/40 px-4 py-3">
              <p className="text-sm text-primary-900 font-medium">
                ✓ Une action du pôle sociétal pour lutter contre les rixes et prévenir les tensions entre jeunes par des valeurs de respect et d'engagement civique.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Galerie photos */}
        <FadeIn delay={0.15} className="mt-12">
          <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 md:p-8">
            <p className="eyebrow text-primary-700 mb-6">Moments de l'événement</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                "https://i.imgur.com/vVP44rF.jpeg",
                "https://i.imgur.com/yEw1KzY.jpeg",
                "https://i.imgur.com/HrwYaEr.jpeg",
                "https://i.imgur.com/HcRO6qo.jpeg",
                "https://i.imgur.com/gVPK8Cp.jpeg",
                "https://i.imgur.com/ojXbPZm.jpeg",
                "https://i.imgur.com/NYZvvAd.jpeg",
                "https://i.imgur.com/fzsG38l.jpeg",
              ].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-surface-muted shadow-diffuse hover:shadow-diffuse transition-shadow">
                  <Image
                    src={img}
                    alt={`Moment ${i + 1} de la sortie paintball`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ════ Projets à venir ════ */}
      <Section>
        <FadeIn className="max-w-3xl mb-14">
          <span className="eyebrow text-primary-700 mb-3">Projets à venir</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            D'autres actions<br />
            en développement.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {upcomingProjects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-8 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <project.icon size={28} weight="duotone" className="text-primary-700" />
                  </div>
                  <span
                    className={`text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full ${project.status === "À venir"
                        ? "bg-primary-100 text-primary-800"
                        : "bg-surface-muted text-text-secondary border border-border-subtle"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="eyebrow text-text-muted mb-2">{project.date}</p>
                <h3 className="font-heading font-bold text-xl leading-tight tracking-tight text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ CTA — bloc clair, plus institutionnel ════ */}
      <Section className="pt-0">
        <FadeIn>
          <div className="relative rounded-[28px] border border-primary/15 bg-paper-warm p-10 md:p-16 overflow-hidden">
            <div className="grain-light absolute inset-0 pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow text-primary-700 mb-4">S'engager</span>
                <h2 className="mt-3 font-heading font-black text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-primary-950 max-w-[16ch]">
                  Soutenir nos<br />
                  <span className="text-primary">actions sociales.</span>
                </h2>
                <p className="mt-6 text-lg text-text-secondary max-w-[52ch] leading-relaxed">
                  Rejoignez l'équipe, proposez une action ou prenez contact
                  avec l'association pour contribuer au pôle sociétal.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link href="/contact">
                  <Button size="lg" className="w-full justify-between">
                    Devenir bénévole
                    <HandHeart size={18} weight="duotone" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full justify-between">
                    Proposer une action
                    <Sparkle size={18} weight="duotone" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="w-full justify-between">
                    <span className="inline-flex items-center gap-2">
                      <EnvelopeSimple size={18} weight="duotone" />
                      Nous contacter
                    </span>
                    <ArrowRight size={16} weight="bold" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
