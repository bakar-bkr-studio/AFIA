"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  Coins,
  Compass,
  Confetti,
  EnvelopeSimple,
  HandHeart,
  Handshake,
  HouseLine,
  MegaphoneSimple,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react";

const timeline = [
  {
    year: "2010",
    title: "Création à Beauval par Fouzia BELRAAM",
    desc: "L'association naît pour répondre à un besoin concret des familles : se rencontrer, partager et recréer une vie locale dynamique.",
  },
  {
    year: "2022",
    title: "Structuration en pôles",
    desc: "L'AFIA structure ses activités autour du pôle ludique et du pôle sociétal. Un pôle défense des locataires est aussi créé temporairement, actif une année.",
  },
  {
    year: "2026",
    title: "Nomination d'Aboubakar à la présidence",
    desc: "Sa nomination vise à dynamiser l'activité de l'association et à y apporter son expertise au service du quartier.",
  },
  {
    year: "Aujourd'hui",
    title: "Une organisation en trois pôles",
    desc: "L'association s'articule autour de trois pôles complémentaires — ludique, sociétal et jeunesse — ce dernier réunissant une cinquantaine de jeunes bénévoles de Meaux.",
  },
];

const poles = [
  {
    icon: Confetti,
    name: "Pôle ludique",
    desc: "Conçoit et organise les activités récréatives et conviviales pour créer du lien entre les habitants.",
    items: [
      "Activités pour les enfants",
      "Animations de quartier",
      "Sorties estivales",
      "Événements festifs et de lien social",
    ],
  },
  {
    icon: HandHeart,
    name: "Pôle sociétal",
    desc: "Agit sur les problématiques sociales du quartier, dans une logique d'écoute, de prévention et d'accompagnement.",
    items: [
      "Accès à l'information",
      "Lutte contre l'exclusion sociale",
      "Prévention des rixes",
      "Lutte contre les difficultés scolaires",
    ],
  },
  {
    icon: UsersThree,
    name: "Pôle jeunesse",
    desc: "Structure interne réunissant une cinquantaine de jeunes bénévoles de Meaux qui mènent leurs propres projets citoyens.",
    items: [
      "Maraudes solidaires",
      "Sorties culturelles",
      "Actions solidaires",
      "Animations de quartier",
    ],
  },
];

const mission = [
  {
    icon: UsersThree,
    title: "Créer du lien entre les familles",
    desc: "Offrir des espaces d'accueil, de dialogue et de rencontres au cœur du quartier.",
  },
  {
    icon: HouseLine,
    title: "Améliorer la qualité de vie locale",
    desc: "Déployer des actions utiles au quotidien pour renforcer le cadre de vie des habitants.",
  },
  {
    icon: Handshake,
    title: "Favoriser les échanges intergénérationnels",
    desc: "Faire dialoguer les générations et les cultures pour construire un vivre-ensemble solide.",
  },
  {
    icon: MegaphoneSimple,
    title: "Accompagner les projets des habitants",
    desc: "Soutenir les idées portées par les adhérents et faciliter leur mise en œuvre sur le terrain.",
  },
];

const memberPower = [
  {
    icon: CalendarCheck,
    title: "Choisir les activités",
    desc: "Sorties, ateliers et événements sont proposés puis retenus par les adhérents.",
  },
  {
    icon: Coins,
    title: "Fixer les tarifs",
    desc: "Cotisation et participations aux sorties sont décidées collectivement.",
  },
  {
    icon: Compass,
    title: "Orienter les missions",
    desc: "Les grandes priorités de l'association sont définies ensemble.",
  },
];

const instances = [
  {
    icon: UsersThree,
    title: "Assemblée générale",
    desc: "Instance souveraine : chaque adhérent y dispose d'une voix pour voter les décisions et le budget.",
  },
];

const bureau = [
  { role: "Président", person: "Aboubakar" },
  { role: "Trésorière", person: "Véronique" },
  { role: "Secrétaire", person: "Christine" },
];

const partners = [
  {
    name: "Mairie de Meaux",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/Logo_Meaux.svg/1920px-Logo_Meaux.svg.png?_=20180201204632",
    category: "Institution",
  },
  {
    name: "Préfecture de Seine-et-Marne",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f8/Pr%C3%A9fet_de_Seine-et-Marne.svg/500px-Pr%C3%A9fet_de_Seine-et-Marne.svg.png?_=20210421150709",
    category: "Institution",
  },
  {
    name: "Groupe 3F",
    logo: "https://www.groupe3f.fr/themes/custom/threef_theme/images/logo.svg",
    category: "Bailleur social",
  },
  {
    name: "Pays de Meaux Habitat",
    logo: "https://www.pays-de-meaux-habitat.fr/wp-content/uploads/2024/01/logo-CMJN-pays-2024.png",
    category: "Bailleur social",
  },
];



export function Association() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <Badge variant="primary" className="mb-6">
              Qui sommes-nous
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-2xl leading-[1.03]">
              Une association engagée au cœur de Meaux
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-text-secondary max-w-[58ch]">
              Depuis 2010, AFIA agit à Beauval avec les familles du quartier.
              Notre approche est simple : être présents sur le terrain, écouter
              les besoins réels et construire des actions utiles, accessibles et
              concrètes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <div className="rounded-xl border border-border-subtle bg-surface-elevated p-4">
                <p className="font-heading text-2xl font-bold tracking-tight text-text-primary">
                  2010
                </p>
                <p className="text-xs text-text-secondary mt-1">Création d&apos;AFIA</p>
              </div>
              <div className="rounded-xl border border-border-subtle bg-surface-elevated p-4">
                <p className="font-heading text-2xl font-bold tracking-tight text-text-primary">
                  Beauval
                </p>
                <p className="text-xs text-text-secondary mt-1">Ancrage local à Meaux</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-muted">
              <Image
                src="https://www.tourisme-seine-et-marne.fr/wp-content/uploads/apidae/2018705_fr.jpg"
                alt="La ville de Meaux, en Seine-et-Marne"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/45 via-primary-900/10 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 rounded-2xl bg-white/85 backdrop-blur p-4">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                  Slogan AFIA
                </p>
                <p className="text-sm text-text-primary mt-1">
                  Créer du lien, partager, construire ensemble.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-primary-950">
        <FadeIn className="mb-14 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-primary-300">
            Notre mission
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white max-w-xl mx-auto">
            Transformer les besoins du quartier en actions utiles
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mission.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group flex flex-col items-center text-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-400/40 transition-all duration-300 p-7">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors duration-300">
                  <item.icon size={26} weight="duotone" className="text-primary-200" />
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold tracking-tight text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-primary-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Histoire */}
      <Section className="bg-surface-elevated">
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Notre histoire
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Une histoire née du terrain
          </h2>
        </FadeIn>

        <div className="relative border-l border-primary-200 ml-3 md:ml-5 pl-6 md:pl-10 space-y-8">
          {timeline.map((item, i) => (
            <FadeIn key={item.year} delay={i * 0.05}>
              <div className="relative rounded-2xl border border-border-subtle bg-surface p-6 md:p-7">
                <span className="absolute -left-[39px] md:-left-[55px] top-7 h-3 w-3 rounded-full bg-primary" />
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                  {item.year}
                </p>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-text-secondary max-w-[65ch]">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Pôles */}
      <Section>
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Notre organisation
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Une association structurée en trois pôles
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-[58ch]">
            Chaque pôle dispose de son propre champ d&apos;action et fonctionne
            de manière autonome, tout en collaborant avec les autres lorsque les
            projets le nécessitent.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {poles.map((pole) => (
            <StaggerItem key={pole.name}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7 hover:border-primary-200 hover:shadow-sm transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <pole.icon size={24} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-2">
                  {pole.name}
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {pole.desc}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-border-subtle pt-5">
                  {pole.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <CheckCircle
                        size={16}
                        weight="duotone"
                        className="text-primary mt-0.5 shrink-0"
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>



      {/* Gouvernance */}
      <Section>
        <FadeIn className="max-w-3xl mb-12 md:mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Gouvernance
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Une association pilotée par ses adhérents
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-[58ch]">
            À AFIA, les adhérents fonctionnent comme des sociétaires : ils
            ne se contentent pas de participer, ils décident. Ce sont eux qui
            orientent la vie et les missions de l&apos;association.
          </p>
        </FadeIn>

        {/* Le pouvoir des adhérents */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary-950 p-8 md:p-12">
            <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary-800/25 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-primary-300">
                  Au cœur des décisions
                </span>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                  Ce sont les adhérents qui donnent le cap
                </h3>
                <p className="mt-4 text-primary-100 leading-relaxed max-w-[46ch]">
                  Réunis en assemblée générale, les adhérents votent ensemble les
                  grandes orientations de l&apos;association. Chacun pèse sur ce
                  qu&apos;AFIA met en place, au plus près des besoins du
                  quartier.
                </p>
              </div>
              <div className="space-y-3">
                {memberPower.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-5"
                  >
                    <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <item.icon
                        size={22}
                        weight="duotone"
                        className="text-primary-200"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-primary-200 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Assemblée générale — banderole éditoriale pleine largeur */}
        <FadeIn>
          <div className="mt-6 rounded-3xl border border-primary/15 bg-primary-50/40 p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-1 flex md:flex-col items-center justify-start">
              <div className="h-14 w-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                <UsersThree size={28} weight="duotone" className="text-primary-700" />
              </div>
            </div>
            <div className="md:col-span-5">
              <span className="eyebrow text-primary-700 mb-2">Instance souveraine</span>
              <h3 className="mt-2 font-heading font-black text-2xl md:text-3xl tracking-[-0.025em] text-primary-950 leading-tight">
                Assemblée générale
              </h3>
            </div>
            <div className="md:col-span-6 md:border-l md:border-primary/15 md:pl-10">
              <p className="text-base text-text-secondary leading-relaxed">
                Instance souveraine de l&apos;association : chaque adhérent y
                dispose d&apos;une voix égale pour voter les décisions, valider
                le budget et fixer les grandes orientations.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Le bureau — layout éditorial */}
        <FadeIn>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Intro */}
            <div className="lg:col-span-4 rounded-3xl bg-primary-950 grain p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
              <div className="relative">
                <ShieldCheck size={28} weight="duotone" className="text-accent-300 mb-6" />
                <span className="eyebrow text-accent-300 mb-3">Gouvernance</span>
                <h3 className="mt-2 font-heading font-black text-2xl md:text-3xl tracking-[-0.025em] text-white leading-tight">
                  Le bureau
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-primary-100">
                  Pilotage, suivi financier et coordination des actions — dans
                  le cadre défini par les adhérents en assemblée générale.
                </p>
              </div>
            </div>

            {/* Membres */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {bureau.map((member) => (
                <div
                  key={member.role}
                  className="group rounded-3xl border border-border-subtle bg-surface-elevated p-7 flex flex-col gap-5 hover:border-primary/30 hover:-translate-y-1 hover:shadow-diffuse transition-all duration-300"
                >
                  {/* Initiale éditoriale */}
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary-100) 0%, var(--color-primary-200) 100%)",
                    }}
                  >
                    <span className="font-heading font-black text-[28px] leading-none tracking-[-0.04em] text-primary-700">
                      {member.person.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="eyebrow text-primary-600 mb-1">
                      {member.role}
                    </span>
                    <p className="mt-2 font-heading font-black text-xl tracking-[-0.025em] text-text-primary">
                      {member.person}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Partenaires */}
      <Section className="bg-surface-elevated">
        <FadeIn className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Partenaires
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-[52ch] mx-auto">
            Des partenaires engagés à nos côtés pour renforcer l&apos;impact de nos
            actions sur le terrain.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="group flex flex-col items-center rounded-2xl border border-border-subtle bg-surface hover:border-primary-200 hover:shadow-sm transition-all duration-300 p-6 gap-4">
                <div className="relative w-full h-16 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain transition-all duration-300"
                    sizes="(min-width: 768px) 20vw, 40vw"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                    {partner.category}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5 leading-snug">{partner.name}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <FadeIn>
          <div className="rounded-3xl bg-primary-950 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-primary-800/25 blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-primary-200 font-semibold">
                Passer à l&apos;action
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white max-w-3xl leading-[1.1]">
                Rejoindre une association qui agit concrètement
              </h2>
              <p className="mt-4 text-primary-100 max-w-[58ch] leading-relaxed">
                Adhérez, devenez bénévole ou échangez avec AFIA pour
                construire les prochains projets du quartier.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/adhesion">
                  <Button
                    size="lg"
                    className="bg-white text-primary-950 hover:bg-zinc-100 border-none"
                  >
                    Adhérer
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent"
                  >
                    <HandHeart size={18} weight="duotone" />
                    Devenir bénévole
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                    <EnvelopeSimple size={18} weight="duotone" />
                    Contact
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
