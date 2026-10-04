"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  CalendarBlank,
  ChalkboardTeacher,
  ClockAfternoon,
  EnvelopeSimple,
  GraduationCap,
  HandHeart,
  Heartbeat,
  MapPin,
  MegaphoneSimple,
  Phone,
  ShieldCheck,
  Tag,
  UsersThree,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

/* ── Coordonnées ── */

const contactEmail = "famillesdicietdailleurs@gmail.com";
const contactPhoneDisplay = "09.81.10.90.27";
const contactPhoneHref = "+33981109027";
const homeworkMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("[Site AFIA] Inscription aide aux devoirs")}&body=${encodeURIComponent("Bonjour,\n\nJe souhaite inscrire mon enfant à l'aide aux devoirs.\n\nNom et prénom de l'enfant :\nClasse :\nNom du parent :\nTéléphone :\n\nMerci.")}`;
const volunteerMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("[Site AFIA] Bénévolat")}`;

/* ── Données ── */

const audience =
  "Familles, parents, enfants en difficulté scolaire et habitants du quartier.";

const axes = [
  {
    icon: GraduationCap,
    verb: "Accompagner",
    title: "Aide aux devoirs",
    desc: "Deux séances par semaine pour les enfants du CP à la 3ème.",
    href: "#aide-aux-devoirs",
  },
  {
    icon: MegaphoneSimple,
    verb: "Informer",
    title: "Forums santé, justice et emploi",
    desc: "Les institutions viennent répondre aux habitants, dans le quartier.",
    href: "#forums",
  },
  {
    icon: ShieldCheck,
    verb: "Prévenir",
    title: "Prévention des rixes",
    desc: "Des moments partagés pour apaiser les tensions entre jeunes.",
    href: "#prevention",
  },
];

const homeworkInfos: { icon: Icon; label: string; value: string }[] = [
  { icon: GraduationCap, label: "Pour qui", value: "Enfants du CP à la 3ème" },
  { icon: CalendarBlank, label: "Quand", value: "Tous les mardis et vendredis" },
  { icon: ClockAfternoon, label: "Horaires", value: "16h30 – 18h" },
  { icon: MapPin, label: "Où", value: "Local de l’association, 4 Square de la Brie, Meaux" },
  { icon: ChalkboardTeacher, label: "Encadrement", value: "Une professeure des écoles et des bénévoles" },
  { icon: Tag, label: "Tarif", value: "Gratuit" },
  { icon: UsersThree, label: "Places", value: "10 élèves maximum" },
];

const forums = [
  {
    icon: Briefcase,
    title: "Forum insertion jeunes",
    tag: "Septembre 2026",
    facts: ["16 septembre 2026", "Square de la Brie", "Gratuit · 16 à 25 ans"],
    desc: "Huit structures réunies pour informer et orienter les jeunes vers l’emploi et la formation : Mission Locale, EPIDE, CIO, École de la 2e Chance, ADSEA 77 et d’autres. Organisé avec la Ville de Meaux.",
    href: "/actualites",
  },
  {
    icon: Heartbeat,
    title: "Forum santé",
    tag: "Déjà organisé",
    facts: [],
    desc: "La CPAM et d’autres acteurs de la santé sont venus dans le quartier : échanges, conseils et dépistages accessibles à tous.",
  },
  {
    icon: ShieldCheck,
    title: "Forum justice",
    tag: "Déjà organisé",
    facts: [],
    desc: "Des avocats et professionnels du droit ont répondu aux questions des habitants et expliqué leurs droits au quotidien.",
  },
];

const forumStrengths = [
  "Accès direct aux professionnels",
  "Échanges simples et accessibles",
  "Sans se déplacer",
];

const mealFacts = [
  { icon: CalendarBlank, label: "Date", value: "2 mars 2026" },
  { icon: MapPin, label: "Lieu", value: "Colisée de Meaux" },
  { icon: UsersThree, label: "Participants", value: "+230 personnes" },
];

const paintballFacts = [
  { icon: CalendarBlank, label: "Date", value: "30 avril 2026" },
  { icon: UsersThree, label: "Participants", value: "18 jeunes du quartier" },
];

const paintballGallery = [
  "https://i.imgur.com/vVP44rF.jpeg",
  "https://i.imgur.com/yEw1KzY.jpeg",
  "https://i.imgur.com/HrwYaEr.jpeg",
  "https://i.imgur.com/HcRO6qo.jpeg",
];

/* ── Petits composants ── */

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <FadeIn className="max-w-3xl mb-12 md:mb-14">
      <span className="eyebrow text-primary-700 mb-3">{eyebrow}</span>
      <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-text-secondary max-w-[60ch]">
          {intro}
        </p>
      )}
    </FadeIn>
  );
}

function FactRow({ facts }: { facts: { icon: Icon; label: string; value: string }[] }) {
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-4 border-y border-border-subtle py-5">
      {facts.map((fact) => (
        <div key={fact.label} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
            <fact.icon size={18} weight="duotone" className="text-primary-700" />
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.14em] text-primary-700 font-semibold">
              {fact.label}
            </dt>
            <dd className="text-sm text-text-primary font-medium">{fact.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

/* ── Composant ── */

export function PoleSocietal() {
  return (
    <>
      {/* ════ Hero ════ */}
      <section className="relative pt-14 md:pt-20 pb-20 md:pb-28 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <FadeIn className="lg:col-span-7">
              <span className="eyebrow text-primary-700 mb-6">Pôle sociétal</span>
              <h1 className="font-heading font-black text-[clamp(44px,6.5vw,88px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Accompagner.<br />
                Informer.<br />
                <span className="text-primary">Prévenir.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[54ch]">
                Le pôle sociétal soutient les familles et les jeunes de Beauval
                face aux difficultés du quotidien : école, accès aux droits,
                santé et tensions dans le quartier.
              </p>
              <p className="mt-5 flex items-start gap-2 text-sm text-text-muted max-w-[54ch]">
                <UsersThree size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-text-primary">Pour qui :</span>{" "}
                  {audience}
                </span>
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
                <a
                  href="#aide-aux-devoirs"
                  className="absolute -bottom-6 left-4 sm:-left-6 md:-left-10 glass rounded-2xl px-6 py-5 max-w-[260px] group"
                >
                  <p className="eyebrow text-primary-700">Aide aux devoirs</p>
                  <p className="mt-2 font-heading font-black text-[28px] leading-none text-primary-800 tracking-[-0.03em]">
                    Mar. & Ven.
                  </p>
                  <p className="mt-2 text-sm text-text-secondary font-medium flex items-center gap-1.5">
                    16h30 – 18h · CP à 3ème
                    <ArrowDown size={14} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
                  </p>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════ Nos 3 axes — sommaire cliquable ════ */}
      <Section className="py-16 md:py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {axes.map((axe, i) => (
            <StaggerItem key={axe.href}>
              <a
                href={axe.href}
                className="group h-full flex flex-col rounded-3xl border border-border-subtle bg-surface-elevated p-7 hover:border-primary/30 hover:shadow-diffuse transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <axe.icon size={24} weight="duotone" className="text-primary-700" />
                  </div>
                  <span className="font-heading font-black text-sm text-text-muted">
                    0{i + 1}
                  </span>
                </div>
                <span className="eyebrow text-primary-700 mb-2">{axe.verb}</span>
                <h2 className="font-heading font-bold text-xl leading-tight tracking-tight text-text-primary">
                  {axe.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                  {axe.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  En savoir plus
                  <ArrowDown size={14} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ 01 — Aide aux devoirs ════ */}
      <Section id="aide-aux-devoirs" className="bg-surface-muted scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
              <Image
                src="https://i.imgur.com/IHB9NJd.jpeg"
                alt="Séance d'aide aux devoirs à l'AFIA"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <span className="eyebrow text-primary-700 mb-4">01 · Accompagner</span>
            <h2 className="mt-2 font-heading font-black text-[clamp(28px,3.5vw,44px)] leading-[1.05] tracking-[-0.025em] text-primary-950 max-w-[20ch]">
              Aide aux devoirs
            </h2>
            <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-[58ch]">
              Un cadre régulier, bienveillant et structuré pour aider les
              enfants à faire leurs devoirs et à reprendre confiance à l’école.
            </p>

            {/* Infos pratiques */}
            <div className="mt-8 rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-8">
              <p className="eyebrow text-primary-700 mb-5">Infos pratiques</p>
              <dl className="divide-y divide-border-subtle">
                {homeworkInfos.map((info) => (
                  <div key={info.label} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                    <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <info.icon size={18} weight="duotone" className="text-primary-700" />
                    </div>
                    <div className="min-w-0 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-4">
                      <dt className="sm:w-28 shrink-0 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-text-muted font-semibold">
                        {info.label}
                      </dt>
                      <dd className="text-sm md:text-base text-text-primary font-medium">
                        {info.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-6 border-t border-border-subtle">
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  <span className="font-semibold text-text-primary">Inscription obligatoire :</span>{" "}
                  les places sont limitées. Envoyez-nous un e-mail pour
                  demander l’inscription de votre enfant.
                </p>
                <a href={homeworkMailto} className="block sm:inline-block">
                  <Button size="lg" className="w-full">
                    <EnvelopeSimple size={18} weight="duotone" />
                    Demander une inscription
                  </Button>
                </a>
                <p className="mt-3 text-xs text-text-muted break-all">
                  {contactEmail}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ════ 02 — Forums ════ */}
      <Section id="forums" className="scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-14">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-primary-700 mb-3">02 · Informer</span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Des forums<br />
              <span className="text-primary">au cœur du quartier.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-text-secondary max-w-[60ch]">
              Nous faisons venir les institutions directement dans le quartier,
              pour que chacun puisse poser ses questions et connaître ses droits.
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {forums.map((forum) => (
            <StaggerItem key={forum.title}>
              <article className="h-full flex flex-col rounded-3xl border border-border-subtle bg-surface-elevated p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <forum.icon size={28} weight="duotone" className="text-primary-700" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full bg-primary-100 text-primary-800">
                    {forum.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl leading-tight tracking-tight text-text-primary mb-3">
                  {forum.title}
                </h3>
                {forum.facts.length > 0 && (
                  <ul className="mb-3 space-y-1 text-sm font-medium text-primary-800">
                    {forum.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                )}
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {forum.desc}
                </p>
                {forum.href && (
                  <Link
                    href={forum.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
                  >
                    Lire l’actualité
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ 03 — Prévention des rixes ════ */}
      <Section id="prevention" className="bg-surface-muted scroll-mt-20">
        <SectionHeading
          eyebrow="03 · Prévenir"
          title={
            <>
              Prévenir les rixes<br />
              <span className="text-primary">en créant du lien.</span>
            </>
          }
          intro="Pour éviter les affrontements entre jeunes, nous organisons des moments où habitants, familles et jeunes se rencontrent et parlent respect, règles et vivre-ensemble."
        />

        <div className="space-y-16 md:space-y-24">
          {/* Repas solidaire */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                <Image
                  src="https://i.imgur.com/yzcueAS.jpeg"
                  alt="Repas solidaire au Colisée de Meaux"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <span className="inline-block rounded-full bg-primary-100 text-primary-800 text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 mb-4">
                Action réalisée
              </span>
              <h3 className="font-heading font-black text-[clamp(24px,2.6vw,34px)] leading-[1.1] tracking-[-0.02em] text-primary-950">
                Repas solidaire
              </h3>
              <div className="mt-6">
                <FactRow facts={mealFacts} />
              </div>
              <div className="mt-6 space-y-4 text-base text-text-secondary leading-relaxed max-w-[60ch]">
                <p>
                  Un moment convivial qui a réuni habitants, familles et jeunes,
                  en présence du maire de Meaux. La soirée a permis d’échanger
                  ouvertement, entre générations, sur les rixes.
                </p>
                <p>
                  Des denrées alimentaires ont aussi été collectées puis
                  redistribuées à des associations d’aide aux personnes dans le
                  besoin.
                </p>
              </div>
              <p className="mt-5 text-sm text-text-muted">
                Avec l’appui du{" "}
                <Link
                  href="/pole-jeunesse"
                  className="text-primary font-semibold hover:underline underline-offset-4"
                >
                  pôle jeunesse
                </Link>
                .
              </p>
            </FadeIn>
          </article>

          {/* Sortie paintball */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <FadeIn className="lg:col-span-5 lg:order-2">
              <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                <Image
                  src="https://i.imgur.com/bTwviXR.jpeg"
                  alt="Jeunes lors de la sortie paintball"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7 lg:order-1">
              <span className="inline-block rounded-full bg-primary-100 text-primary-800 text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 mb-4">
                Action réalisée
              </span>
              <h3 className="font-heading font-black text-[clamp(24px,2.6vw,34px)] leading-[1.1] tracking-[-0.02em] text-primary-950">
                Sortie paintball : la citoyenneté par le sport
              </h3>
              <div className="mt-6">
                <FactRow facts={paintballFacts} />
              </div>
              <div className="mt-6 space-y-4 text-base text-text-secondary leading-relaxed max-w-[60ch]">
                <p>
                  Une après-midi paintball suivie d’un barbecue pour faire
                  passer un message simple : le sport, comme la société,
                  fonctionne avec des règles.
                </p>
                <p>
                  Respecter les règles, c’est respecter les autres. Autour du
                  barbecue, les jeunes ont pu en parler librement.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2 md:gap-3">
                {paintballGallery.map((img, i) => (
                  <div
                    key={img}
                    className="relative aspect-square rounded-xl overflow-hidden bg-surface-muted"
                  >
                    <Image
                      src={img}
                      alt={`Moment ${i + 1} de la sortie paintball`}
                      fill
                      sizes="(min-width: 1024px) 12vw, 25vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </article>
        </div>
      </Section>

      {/* ════ CTA ════ */}
      <Section className="pt-0">
        <FadeIn>
          <div className="relative rounded-[28px] border border-primary/15 bg-paper-warm p-8 md:p-16 overflow-hidden">
            <div className="grain-light absolute inset-0 pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow text-primary-700 mb-4">Une question ? Envie d’aider ?</span>
                <h2 className="mt-3 font-heading font-black text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-primary-950 max-w-[16ch]">
                  Parlons-en<br />
                  <span className="text-primary">ensemble.</span>
                </h2>
                <p className="mt-6 text-lg text-text-secondary max-w-[52ch] leading-relaxed">
                  Pour inscrire votre enfant, poser une question, proposer une
                  action ou devenir bénévole : l’équipe vous répond.
                </p>
                <ul className="mt-8 space-y-3 text-base">
                  <li>
                    <a href={`tel:${contactPhoneHref}`} className="inline-flex items-center gap-3 text-text-primary font-medium hover:text-primary transition-colors">
                      <Phone size={20} weight="duotone" className="text-primary-700" />
                      {contactPhoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-3 text-text-primary font-medium hover:text-primary transition-colors break-all">
                      <EnvelopeSimple size={20} weight="duotone" className="text-primary-700 shrink-0" />
                      {contactEmail}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link href="/contact">
                  <Button size="lg" className="w-full justify-between">
                    Nous contacter
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                </Link>
                <a href={volunteerMailto}>
                  <Button variant="outline" size="lg" className="w-full justify-between">
                    Devenir bénévole
                    <HandHeart size={18} weight="duotone" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
