"use client";

import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/partenaires";
import { ADHESIONS_OUVERTES, LIBELLE_BOUTON_ADHESION, PROCHAINE_SESSION } from "@/lib/adhesion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowDown,
  ArrowRight,
  Buildings,
  CalendarCheck,
  EnvelopeSimple,
  GameController,
  HandHeart,
  Handshake,
  HouseLine,
  IdentificationCard,
  Lightbulb,
  ShieldCheck,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

/* ── Données (source : MEMOIRE_AFIA.md) ── */

const timeline = [
  {
    year: "2010",
    title: "Création à Beauval",
    desc: "Fouzia BELRAAM constate le manque d’animations et de lien entre les habitants. Elle crée l’association pour offrir aux familles des sorties, des fêtes et des moments de partage.",
  },
  {
    year: "2022",
    title: "Structuration en pôles",
    desc: "AFIA organise ses activités autour d’un pôle ludique et d’un pôle social. Un pôle de défense des locataires est aussi lancé, actif pendant une année.",
  },
  {
    year: "Janvier 2026",
    title: "Un nouveau Bureau",
    desc: "L’assemblée générale élit un nouveau Bureau. Aboubakar en devient le président, avec l’ambition de dynamiser les actions au service du quartier.",
  },
  {
    year: "Aujourd’hui",
    title: "Trois pôles, 30 familles",
    desc: "Pôle ludique, pôle sociétal et pôle jeunesse : AFIA rassemble une trentaine de familles adhérentes, soit environ 110 adhérents.",
    current: true,
  },
];

const mission: { icon: Icon; title: string; desc: string }[] = [
  { icon: UsersThree, title: "Rassembler les familles", desc: "Un espace d’accueil, de discussion et d’échanges au cœur du quartier." },
  { icon: Sparkle, title: "Créer du lien", desc: "Des animations variées tout au long de l’année pour que les habitants se rencontrent." },
  { icon: Handshake, title: "Faire dialoguer", desc: "Favoriser les échanges entre les générations et entre les cultures." },
  { icon: HouseLine, title: "Améliorer la vie du quartier", desc: "Agir pour la qualité de vie des familles et le dynamisme local." },
  { icon: Lightbulb, title: "Porter les projets des adhérents", desc: "Aider les habitants à concrétiser leurs idées sur le terrain." },
  { icon: ShieldCheck, title: "Défendre les locataires", desc: "Représenter leurs intérêts auprès du bailleur, de la mairie et des autres interlocuteurs." },
];

const valeurs = ["Lien social", "Solidarité", "Citoyenneté", "Proximité", "Convivialité"];

const poles = [
  {
    icon: GameController,
    name: "Pôle ludique",
    desc: "Sorties familles, fêtes de quartier, jeux et ateliers créatifs.",
    href: "/pole-ludique",
    image: "https://i.imgur.com/SqbljKJ.jpeg",
    accent: true,
  },
  {
    icon: HandHeart,
    name: "Pôle sociétal",
    desc: "Aide aux devoirs, forums d’information et prévention des rixes.",
    href: "/pole-societal",
    image: "https://i.imgur.com/IHB9NJd.jpeg",
  },
  {
    icon: UsersThree,
    name: "Pôle jeunesse",
    desc: "Une cinquantaine de jeunes bénévoles de Meaux qui portent leurs propres projets.",
    href: "/pole-jeunesse",
    image: "https://i.imgur.com/bTwviXR.jpeg",
  },
];

const bureau = [
  { role: "Président", person: "Aboubakar" },
  { role: "Trésorière", person: "Véronique" },
  { role: "Secrétaire", person: "Christine" },
];

// Partenaires par catégorie. Les logos viennent de lib/partenaires.ts quand ils existent.
const logoByName = Object.fromEntries(partners.map((p) => [p.name, p.logo]));
const partnerGroups: { title: string; items: { name: string; logoKey?: string }[] }[] = [
  {
    title: "Collectivités et institutions",
    items: [
      { name: "Ville de Meaux", logoKey: "Mairie de Meaux" },
      { name: "Préfet de Seine-et-Marne", logoKey: "Préfecture de Seine-et-Marne" },
      { name: "Pays de Meaux (communauté d’agglomération)" },
    ],
  },
  {
    title: "Bailleurs sociaux",
    items: [
      { name: "Groupe 3F", logoKey: "Groupe 3F" },
      { name: "Pays de Meaux Habitat", logoKey: "Pays de Meaux Habitat" },
    ],
  },
  {
    title: "Insertion, emploi et orientation",
    items: [
      { name: "Mission Locale de Meaux", logoKey: "Mission locale" },
      { name: "CIO", logoKey: "CIO de Créteil" },
      { name: "École de la 2e Chance 77", logoKey: "E2C 77" },
      { name: "Maison de l’Emploi" },
      { name: "Bureau Information Jeunesse (BIJ)" },
    ],
  },
  {
    title: "Associations partenaires",
    items: [
      { name: "Transmission" },
      { name: "OneGoal Academy" },
      { name: "Le Collectif Meldois" },
      { name: "BFC" },
      { name: "Handi Zen" },
      { name: "Dynamic Jeunes" },
    ],
  },
];

const identite: { label: string; value: string }[] = [
  { label: "Nom", value: "Association Familles d’Ici et d’Ailleurs (AFIA)" },
  { label: "Statut", value: "Association loi 1901, déclarée à la sous-préfecture de Meaux" },
  { label: "Création", value: "5 janvier 2010" },
  { label: "Siège", value: "Appartement 25, 4 Square de la Brie, 77100 Meaux" },
  { label: "N° RNA", value: "W771002607" },
  { label: "N° SIREN", value: "531 632 347" },
  { label: "Secteur", value: "Membre de l’Économie sociale et solidaire (ESS)" },
];

/* ── Petits composants ── */

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <FadeIn className="max-w-3xl mb-10 md:mb-12">
      <span className="eyebrow text-primary-700 mb-3">{eyebrow}</span>
      <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-text-secondary max-w-[60ch]">{intro}</p>
      )}
    </FadeIn>
  );
}

function GovLevel({
  step,
  icon: IconCmp,
  title,
  children,
  dark,
}: {
  step: string;
  icon: Icon;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 ${
        dark ? "grain overflow-hidden bg-primary-950 text-white" : "border border-border-subtle bg-surface-elevated"
      }`}
    >
      {dark && <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />}
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${dark ? "bg-white/10" : "bg-primary-50"}`}>
            <IconCmp size={22} weight="duotone" className={dark ? "text-accent-300" : "text-primary-700"} />
          </div>
          <div>
            <p className={`text-[10px] uppercase tracking-[0.14em] font-semibold ${dark ? "text-accent-300" : "text-primary-700"}`}>
              {step}
            </p>
            <h3 className={`font-heading font-bold text-xl ${dark ? "text-white" : "text-text-primary"}`}>{title}</h3>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function GovArrow() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <ArrowDown size={22} weight="bold" className="text-primary-300" />
    </div>
  );
}

/* ── Composant ── */

export function Association() {
  return (
    <>
      {/* ════ Hero ════ */}
      <section className="relative pt-14 md:pt-20 pb-14 md:pb-20 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6">
              <span className="eyebrow text-primary-700 mb-6">L’association</span>
              <h1 className="font-heading font-black text-[clamp(40px,5.6vw,76px)] leading-[0.98] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Née au cœur<br />
                <span className="text-primary">de Beauval.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[52ch]">
                Depuis 2010, l’Association Familles d’Ici et d’Ailleurs rassemble
                les familles du quartier de Beauval, à Meaux. Notre approche :
                être présents sur le terrain, écouter les besoins réels et
                construire des actions utiles.
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {["Créée en 2010", "Association loi 1901", "Économie sociale et solidaire"].map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-primary/15 bg-surface-elevated px-4 py-2 text-sm font-semibold text-primary-800"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                  <Image
                    src="https://i.imgur.com/yzcueAS.jpeg"
                    alt="Membres et partenaires d'AFIA lors du repas solidaire au Colisée de Meaux"
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-primary-950/10 to-transparent" />
                </div>
                <div className="absolute -bottom-6 left-4 sm:-left-6 max-w-[300px] rounded-2xl bg-accent text-white px-6 py-5 shadow-diffuse">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/85">Notre devise</p>
                  <p className="mt-1.5 font-heading font-black text-lg leading-snug">
                    Créer du lien, partager, construire ensemble.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════ Histoire ════ */}
      <Section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="Notre histoire"
          title={
            <>
              Seize ans <span className="text-primary">au service du quartier.</span>
            </>
          }
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {timeline.map((item) => (
            <StaggerItem key={item.year}>
              <div
                className={`relative h-full rounded-3xl p-6 md:p-7 ${
                  item.current
                    ? "bg-primary-950 text-white"
                    : "border border-border-subtle bg-surface-elevated"
                }`}
              >
                <p
                  className={`font-heading font-black text-[28px] leading-none tracking-[-0.03em] ${
                    item.current ? "text-accent-300" : "text-primary"
                  }`}
                >
                  {item.year}
                </p>
                <div className={`my-5 h-px ${item.current ? "bg-white/15" : "bg-border-subtle"}`} />
                <h3 className={`font-heading font-bold text-lg ${item.current ? "text-white" : "text-text-primary"}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${item.current ? "text-primary-100" : "text-text-secondary"}`}>
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ Ce qui nous guide ════ */}
      <Section className="bg-surface-muted py-16 md:py-24">
        <SectionHeading
          eyebrow="Ce qui nous guide"
          title={
            <>
              Notre mission <span className="text-primary">et nos valeurs.</span>
            </>
          }
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {mission.map((m) => (
            <StaggerItem key={m.title}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-7">
                <div className="h-12 w-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                  <m.icon size={24} weight="duotone" className="text-primary-700" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary">{m.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.1} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-text-primary mr-1">Nos valeurs :</span>
          {valeurs.map((v) => (
            <span
              key={v}
              className="rounded-full bg-primary-950 px-4 py-2 text-sm font-semibold text-white"
            >
              {v}
            </span>
          ))}
        </FadeIn>
      </Section>

      {/* ════ Nos pôles ════ */}
      <Section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="Notre organisation"
          title={
            <>
              Trois pôles <span className="text-primary">complémentaires.</span>
            </>
          }
          intro="Chaque pôle a son propre champ d’action et collabore avec les autres quand les projets le demandent."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {poles.map((p) => (
            <StaggerItem key={p.name}>
              <Link
                href={p.href}
                className="group h-full flex flex-col rounded-3xl overflow-hidden border border-border-subtle bg-surface-elevated hover:-translate-y-1 hover:shadow-diffuse transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${p.accent ? "bg-accent-100" : "bg-primary-50"}`}>
                      <p.icon size={20} weight="duotone" className={p.accent ? "text-accent-700" : "text-primary-700"} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-text-primary">{p.name}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">{p.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Découvrir le pôle
                    <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ Gouvernance ════ */}
      <Section className="bg-paper-warm py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-primary-700 mb-3">Gouvernance</span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Comment fonctionne <span className="text-primary">AFIA ?</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-text-secondary">
              Les adhérents sont au cœur des décisions : ce sont eux qui
              proposent et choisissent les activités. Le Bureau valide et
              assure la gestion courante, puis les pôles et les bénévoles
              passent à l’action.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <GovLevel step="1 · Proposer et choisir" icon={UsersThree} title="Les adhérents">
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <CalendarCheck size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold text-text-primary">En réunion :</span> ils proposent
                    et choisissent les sorties et activités, et proposent les tarifs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Buildings size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold text-text-primary">En assemblée générale :</span> ils
                    valident les grandes orientations, approuvent les bilans et élisent le Bureau.
                  </span>
                </li>
              </ul>
            </GovLevel>
            <GovArrow />
            <GovLevel step="2 · Valider et gérer" icon={ShieldCheck} title="Le Bureau" dark>
              <p className="text-sm text-primary-100 leading-relaxed">
                Il valide les propositions des adhérents, assure la gestion
                courante et le suivi financier.
              </p>
              <ul className="mt-5 grid grid-cols-3 gap-3">
                {bureau.map((m) => (
                  <li key={m.role} className="rounded-2xl bg-white/10 border border-white/15 p-4 text-center">
                    <span className="mx-auto h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center font-heading font-black text-lg text-accent-300">
                      {m.person.charAt(0)}
                    </span>
                    <p className="mt-3 font-heading font-bold text-white">{m.person}</p>
                    <p className="text-xs text-primary-200">{m.role}</p>
                  </li>
                ))}
              </ul>
            </GovLevel>
            <GovArrow />
            <GovLevel step="3 · Agir" icon={HandHeart} title="Les pôles et les bénévoles">
              <p className="text-sm text-text-secondary leading-relaxed">
                Ils organisent et animent les actions sur le terrain : sorties,
                aide aux devoirs, fêtes, forums et projets des jeunes.
              </p>
            </GovLevel>
          </FadeIn>
        </div>
      </Section>

      {/* ════ Partenaires ════ */}
      <Section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="Partenaires"
          title={
            <>
              Ils agissent <span className="text-primary">à nos côtés.</span>
            </>
          }
          intro="Collectivités, bailleurs, structures d’insertion et associations : nos actions se construisent avec un réseau de partenaires engagés."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {partnerGroups.map((g, gi) => (
            <FadeIn key={g.title} delay={gi * 0.05}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-8">
                <p className="eyebrow text-primary-700 mb-5">{g.title}</p>
                <ul className="flex flex-wrap gap-3">
                  {g.items.map((it) => {
                    const logo = it.logoKey ? logoByName[it.logoKey] : undefined;
                    return logo ? (
                      <li
                        key={it.name}
                        className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-white pl-2 pr-4 py-2"
                      >
                        <span className="relative h-10 w-16 shrink-0">
                          <Image src={logo} alt="" fill className="object-contain" sizes="64px" />
                        </span>
                        <span className="text-sm font-semibold text-text-primary">{it.name}</span>
                      </li>
                    ) : (
                      <li
                        key={it.name}
                        className="flex items-center gap-2 rounded-2xl border border-border-subtle bg-surface-muted px-4 py-3 text-sm font-semibold text-text-primary"
                      >
                        <Handshake size={18} weight="duotone" className="text-primary-700" />
                        {it.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ════ Fiche d'identité ════ */}
      <Section className="bg-surface-muted py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-4">
            <div className="h-12 w-12 rounded-2xl bg-primary-950 flex items-center justify-center mb-5">
              <IdentificationCard size={24} weight="duotone" className="text-accent-300" />
            </div>
            <span className="eyebrow text-primary-700 mb-3">Transparence</span>
            <h2 className="font-heading font-black text-[clamp(26px,3vw,38px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Fiche d’identité
            </h2>
            <p className="mt-4 text-base text-text-secondary leading-relaxed">
              Les informations officielles de l’association.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-8">
            <dl className="rounded-3xl border border-border-subtle bg-surface-elevated divide-y divide-border-subtle">
              {identite.map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 md:px-8 py-4">
                  <dt className="sm:w-32 shrink-0 text-xs uppercase tracking-[0.12em] text-text-muted font-semibold">
                    {row.label}
                  </dt>
                  <dd className="text-sm md:text-base text-text-primary font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </Section>

      {/* ════ CTA ════ */}
      <Section className="py-16 md:py-24">
        <FadeIn>
          <div className="grain rounded-[28px] bg-primary-950 p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow text-accent-300 mb-4">Passer à l’action</span>
                <h2 className="mt-3 font-heading font-black text-[clamp(30px,4vw,52px)] leading-[0.98] tracking-[-0.03em] text-white">
                  Rejoignez une association<br />qui agit concrètement.
                </h2>
                <p className="mt-5 text-lg text-primary-100 max-w-[50ch] leading-relaxed">
                  Adhérez, devenez bénévole ou échangez avec nous pour construire
                  les prochains projets du quartier.
                  {!ADHESIONS_OUVERTES && (
                    <span className="block mt-2 text-sm text-primary-300">
                      Prochaine session d’adhésion : {PROCHAINE_SESSION}.
                    </span>
                  )}
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link href="/adhesion">
                  <Button size="lg" className="w-full justify-between bg-accent text-white hover:bg-accent-700 border-none">
                    {LIBELLE_BOUTON_ADHESION}
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                </Link>
                <Link href="/#benevoles">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-between border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:text-white bg-transparent"
                  >
                    Devenir bénévole
                    <HandHeart size={18} weight="duotone" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="w-full justify-between text-white hover:bg-white/10 hover:text-white">
                    Nous contacter
                    <EnvelopeSimple size={18} weight="duotone" />
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
