"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  Buildings,
  ClockCounterClockwise,
  EnvelopeSimple,
  HandHeart,
  Handshake,
  Heartbeat,
  HouseLine,
  Lightbulb,
  MapPin,
  Medal,
  MegaphoneSimple,
  Scales,
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
    year: "2010 - 2022",
    title: "Développement des actions locales",
    desc: "Sorties familiales, animations de quartier et événements conviviaux s'installent progressivement dans le quotidien des habitants.",
  },
  {
    year: "2022",
    title: "Structuration de l'association",
    desc: "L'AFIA renforce son organisation, formalise ses pôles d'action et pose les bases d'un fonctionnement durable.",
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

const values = [
  {
    icon: Handshake,
    title: "Solidarité",
    desc: "S'entraider au quotidien entre habitants, familles et bénévoles.",
  },
  {
    icon: Lightbulb,
    title: "Inclusion",
    desc: "Accueillir chacun sans distinction et donner sa place à toutes les voix.",
  },
  {
    icon: Medal,
    title: "Respect des cultures",
    desc: "Valoriser la diversité du quartier comme une richesse commune.",
  },
  {
    icon: Heartbeat,
    title: "Engagement citoyen",
    desc: "Agir concrètement pour améliorer notre environnement local.",
  },
];

const governance = [
  {
    icon: Buildings,
    title: "Conseil d'administration",
    desc: "Il fixe les orientations stratégiques, vote les priorités et valide les grandes décisions.",
  },
  {
    icon: ShieldCheck,
    title: "Bureau",
    desc: "Il assure la gestion courante de l'association : pilotage, suivi financier et coordination des actions.",
  },
  {
    icon: Scales,
    title: "Assemblée générale",
    desc: "Instance souveraine des adhérents, elle garantit un fonctionnement démocratique et transparent.",
  },
];

const bureau = [
  { role: "Président", person: "Aboubakar MAHAMADOU" },
  { role: "Vice-présidence", person: "Poste vacant" },
  { role: "Trésorière", person: "Véronique GUIOUGOU-MURAT" },
  { role: "Secrétaire", person: "Christine PANCRASSIN" },
];

const partners = [
  {
    title: "Institutions",
    intro: "En collaboration avec les acteurs publics locaux.",
    logos: ["Mairie de Meaux", "Préfecture de Seine-et-Marne"],
  },
  {
    title: "Bailleurs sociaux",
    intro: "En lien avec les partenaires logement du territoire.",
    logos: ["Immobilière 3F", "Acteurs habitat de proximité"],
  },
  {
    title: "Associations",
    intro: "En coopération avec le tissu associatif de Beauval.",
    logos: ["Associations locales de Meaux", "Collectifs habitants"],
  },
];

const fieldActions = [
  {
    icon: ClockCounterClockwise,
    title: "Aide aux devoirs toute l'année",
    desc: "Depuis janvier 2026, deux séances par semaine accompagnent les enfants de primaire et collège.",
  },
  {
    icon: UsersThree,
    title: "Repas et temps citoyens",
    desc: "Des rendez-vous intergénérationnels qui rassemblent les habitants, avec jusqu'à 230 participants.",
  },
  {
    icon: MapPin,
    title: "Sorties familiales",
    desc: "Des sorties culturelles et de loisirs pour permettre aux familles de partager des moments conviviaux.",
  },
];

const fieldGallery = [
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    alt: "Habitants réunis lors d'un événement associatif",
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80",
    alt: "Atelier collectif avec des jeunes et des familles",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    alt: "Bénévoles mobilisés sur une action locale",
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
              Depuis 2010, l&apos;AFIA agit à Beauval avec les familles du quartier.
              Notre approche est simple : être présents sur le terrain, écouter
              les besoins réels et construire des actions utiles, accessibles et
              concrètes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <div className="rounded-xl border border-border-subtle bg-surface-elevated p-4">
                <p className="font-heading text-2xl font-bold tracking-tight text-text-primary">
                  2010
                </p>
                <p className="text-xs text-text-secondary mt-1">Création de l&apos;AFIA</p>
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
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80"
                alt="Bénévoles et familles réunis lors d'une action de quartier"
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

      {/* Mission */}
      <Section>
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Notre mission
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Transformer les besoins du quartier en actions utiles
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {mission.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
                <div className="h-11 w-11 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <item.icon size={22} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Valeurs */}
      <Section className="bg-surface-elevated">
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Nos valeurs
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary max-w-xl">
            Ce qui guide nos décisions au quotidien
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="group flex gap-5 rounded-2xl border border-border-subtle bg-surface p-7 hover:border-primary-200 transition-colors duration-300">
                <div className="h-11 w-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors duration-300">
                  <v.icon size={22} weight="duotone" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Gouvernance */}
      <Section>
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Gouvernance
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Une organisation structurée
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-6">
          {governance.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
                <div className="h-11 w-11 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <item.icon size={22} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-7 md:p-8">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-4">
              Bureau actuel
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bureau.map((member) => (
                <div
                  key={member.role}
                  className="rounded-xl border border-border-subtle bg-surface px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-primary mt-1">{member.person}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Partenaires */}
      <Section className="bg-surface-elevated">
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Partenaires
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-[60ch]">
            Des partenaires engagés à nos côtés pour renforcer l&apos;impact de nos
            actions sur le terrain.
          </p>
        </FadeIn>

        <div className="space-y-8">
          {partners.map((group) => (
            <FadeIn key={group.title}>
              <div className="rounded-2xl border border-border-subtle bg-surface p-6 md:p-7">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{group.intro}</p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.logos.map((logo) => (
                    <div
                      key={logo}
                      className="h-20 rounded-xl border border-border bg-surface-elevated flex items-center justify-center px-4 grayscale hover:grayscale-0 hover:border-primary-200 transition-all duration-300"
                    >
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.14em] text-text-secondary text-center">
                        {logo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Terrain */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Engagement terrain
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary max-w-md">
              Une présence concrète sur le terrain
            </h2>
            <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[56ch]">
              Chaque action est pensée avec les habitants : prévention,
              accompagnement, sorties et temps collectifs. L&apos;objectif reste le
              même : renforcer la cohésion et ouvrir des perspectives.
            </p>
            <div className="mt-8 space-y-3">
              {fieldActions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border-subtle bg-surface-elevated p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <item.icon size={18} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                      <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fieldGallery.map((photo, i) => (
              <StaggerItem key={photo.src} className={i === 0 ? "sm:col-span-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden bg-surface-muted aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes={i === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
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
                Adhérez, devenez bénévole ou échangez avec l&apos;équipe AFIA pour
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
