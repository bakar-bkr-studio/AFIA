"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowDown,
  ArrowRight,
  Bus,
  CalendarBlank,
  Confetti,
  Crown,
  Egg,
  EnvelopeSimple,
  Ghost,
  HandHeart,
  Megaphone,
  MapPin,
  Microphone,
  PaintBrush,
  Phone,
  PuzzlePiece,
  Scissors,
  BowlingBall,
  Snowflake,
  Sparkle,
  Star,
  Sun,
  Tag,
  Ticket,
  Train,
  UsersThree,
  Waves,
  Balloon,
  House,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

/* ── Coordonnées ── */

const contactEmail = "famillesdicietdailleurs@gmail.com";
const contactPhoneDisplay = "09.81.10.90.27";
const contactPhoneHref = "+33981109027";
const volunteerMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("[Site AFIA] Bénévolat pôle ludique")}`;

/* ── Données ── */

const audience = "Familles, enfants et habitants du quartier de Beauval.";

const axes = [
  {
    icon: Train,
    verb: "S’évader",
    title: "Sorties familles",
    desc: "Parcs d’attractions et plages, en car, pendant les vacances.",
    href: "#sorties",
  },
  {
    icon: Confetti,
    verb: "Fêter",
    title: "Fêtes de quartier",
    desc: "De Pâques à Noël, des rendez-vous festifs toute l’année.",
    href: "#fetes",
  },
  {
    icon: PuzzlePiece,
    verb: "Jouer",
    title: "Jeux et ateliers",
    desc: "Des séances de jeux et d’ateliers créatifs pour animer le quartier.",
    href: "#ateliers",
  },
];

// Ajouter une propriété `image` à chaque sortie quand les photos seront disponibles.
const summerOutings: {
  icon: Icon;
  place: string;
  type: string;
  date: string;
  participants: string;
  image?: string;
}[] = [
  { icon: Star, place: "Aventure Land", type: "Parc d’attractions", date: "16 juillet 2026", participants: "≈ 54 participants" },
  { icon: Waves, place: "Fort-Mahon", type: "Plage", date: "10 août 2026", participants: "60 participants" },
  { icon: Sparkle, place: "Nigloland", type: "Parc d’attractions", date: "18 août 2026", participants: "63 participants" },
];

const pastDestinations = [
  "Parc Astérix",
  "Disneyland Paris",
  "La Mer de Sable",
  "Plage de Cabourg",
];

const howToJoin: { icon: Icon; label: string; value: string }[] = [
  { icon: UsersThree, label: "Pour qui", value: "Ouvert à tous" },
  { icon: Tag, label: "Tarif", value: "Payant, tarif réduit pour les adhérents" },
  { icon: Crown, label: "Priorité", value: "Les adhérents sont prioritaires" },
  { icon: Megaphone, label: "Inscriptions", value: "Ouvertes environ un mois avant, annoncées par affiches et sur le site" },
  { icon: Bus, label: "Transport", value: "En car" },
];

const seasons: { icon: Icon; period: string; title: string; desc: string }[] = [
  { icon: Egg, period: "Pâques", title: "Chasse aux œufs", desc: "Les enfants partent à la recherche des chocolats." },
  { icon: House, period: "Mai – juin", title: "Fête des voisins", desc: "Un moment convivial pour se rencontrer entre voisins." },
  { icon: Sun, period: "Juillet – août", title: "Sorties d’été", desc: "Parcs et plages pour les familles pendant les vacances." },
  { icon: Ghost, period: "Octobre", title: "Halloween", desc: "Déguisements et animations pour petits et grands." },
  { icon: Snowflake, period: "Décembre", title: "Marché de Noël", desc: "Un marché festif pour clôturer l’année ensemble." },
];

const familyDayFacts = [
  { icon: CalendarBlank, label: "Date", value: "21 août 2026" },
  { icon: MapPin, label: "Lieu", value: "Espace Bessières" },
  { icon: UsersThree, label: "Participants", value: "250 à 300 personnes" },
];

const familyDayHighlights: { icon: Icon; label: string }[] = [
  { icon: PaintBrush, label: "Stands de maquillage" },
  { icon: Balloon, label: "Jeux d’extérieur" },
  { icon: Microphone, label: "Scène ouverte « Incroyable Talent »" },
  { icon: Ticket, label: "Tombola : une vingtaine de lots" },
];

const workshops: { icon: Icon; label: string }[] = [
  { icon: Balloon, label: "Châteaux gonflables" },
  { icon: UsersThree, label: "Jeux collectifs" },
  { icon: BowlingBall, label: "Mini bowling" },
  { icon: PuzzlePiece, label: "Parcours ludiques" },
  { icon: PaintBrush, label: "Peinture" },
  { icon: Scissors, label: "Collage et création" },
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
      <span className="eyebrow text-accent mb-3">{eyebrow}</span>
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

/* ── Composant ── */

export function PoleLudique() {
  return (
    <>
      {/* ════ Hero ════ */}
      <section className="relative pt-14 md:pt-20 pb-20 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 100% at 100% 0%, rgba(255,230,212,0.55) 0%, transparent 50%), linear-gradient(180deg, #faf7f5 0%, #f3eef2 100%)",
          }}
        />
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <FadeIn className="lg:col-span-7">
              <span className="eyebrow text-accent mb-6">Pôle ludique</span>
              <h1 className="font-heading font-black text-[clamp(44px,6.5vw,88px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Des moments<br />
                qui <span className="text-accent">rassemblent.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[54ch]">
                Sorties en famille, fêtes de quartier, jeux et ateliers
                créatifs : le pôle ludique anime la vie de Beauval tout au long
                de l’année.
              </p>
              <p className="mt-5 flex items-start gap-2 text-sm text-text-muted max-w-[54ch]">
                <UsersThree size={18} weight="duotone" className="text-accent shrink-0 mt-0.5" />
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
                    src="https://i.imgur.com/SqbljKJ.jpeg"
                    alt="Animation du pôle ludique AFIA à Beauval"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-primary-950/10 to-transparent" />
                </div>
                <a
                  href="#sorties"
                  className="group absolute -bottom-6 right-4 sm:-right-6 md:-right-10 rounded-2xl bg-accent text-white px-6 py-5 max-w-[240px] shadow-diffuse"
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/85">
                    Été 2026
                  </p>
                  <p className="mt-2 font-heading font-black text-[40px] leading-none tracking-[-0.04em]">
                    +170
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/90 flex items-center gap-1.5">
                    participants · 3 sorties
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
                className="group h-full flex flex-col rounded-3xl border border-border-subtle bg-surface-elevated p-7 hover:border-accent/40 hover:shadow-diffuse transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-accent-100 flex items-center justify-center">
                    <axe.icon size={24} weight="duotone" className="text-accent-700" />
                  </div>
                  <span className="font-heading font-black text-sm text-text-muted">
                    0{i + 1}
                  </span>
                </div>
                <span className="eyebrow text-accent mb-2">{axe.verb}</span>
                <h2 className="font-heading font-bold text-xl leading-tight tracking-tight text-text-primary">
                  {axe.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                  {axe.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
                  En savoir plus
                  <ArrowDown size={14} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ 01 — Sorties familles ════ */}
      <Section id="sorties" className="bg-surface-muted scroll-mt-20">
        <SectionHeading
          eyebrow="01 · S’évader"
          title={
            <>
              Sorties familles<br />
              <span className="text-accent">en parcs et à la plage.</span>
            </>
          }
          intro="Pendant les vacances, nous emmenons les familles du quartier en car pour une journée de détente et de découverte."
        />

        {/* L'été 2026 */}
        <FadeIn>
          <p className="eyebrow text-text-muted mb-5">L’été 2026</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {summerOutings.map((outing) => (
            <StaggerItem key={outing.place}>
              <article className="h-full rounded-3xl overflow-hidden border border-border-subtle bg-surface-elevated">
                <div className="relative aspect-[16/10] bg-accent-100 flex items-center justify-center overflow-hidden">
                  {outing.image ? (
                    <Image
                      src={outing.image}
                      alt={`Sortie familles à ${outing.place}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(80% 80% at 100% 0%, rgba(232,102,43,0.25) 0%, transparent 60%), radial-gradient(80% 80% at 0% 100%, rgba(138,78,176,0.18) 0%, transparent 60%)",
                        }}
                      />
                      <outing.icon size={56} weight="duotone" className="relative text-accent-700" />
                    </>
                  )}
                  <span className="absolute top-4 left-4 rounded-full bg-white/85 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] font-semibold text-accent-700">
                    {outing.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl leading-tight tracking-tight text-text-primary">
                    {outing.place}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarBlank size={16} weight="duotone" className="text-accent" />
                      {outing.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-text-primary">
                      <UsersThree size={16} weight="duotone" className="text-accent" />
                      {outing.participants}
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-text-primary mr-2">Déjà visités :</span>
          {pastDestinations.map((place) => (
            <span
              key={place}
              className="rounded-full border border-border-subtle bg-surface-elevated px-4 py-2 text-sm text-text-secondary"
            >
              {place}
            </span>
          ))}
        </FadeIn>

        {/* Comment participer */}
        <FadeIn className="mt-14 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-10">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent mb-3">Infos pratiques</p>
              <h3 className="font-heading font-black text-[clamp(24px,2.6vw,32px)] leading-[1.1] tracking-[-0.02em] text-primary-950">
                Comment participer à une sortie ?
              </h3>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                Les prochaines sorties sont annoncées dans les actualités du
                site et par affiches dans le quartier.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/adhesion">
                  <Button className="w-full bg-accent text-white hover:bg-accent-700">
                    Adhérer pour le tarif réduit
                  </Button>
                </Link>
                <Link href="/actualites">
                  <Button variant="outline" className="w-full">
                    Voir les annonces
                    <ArrowRight size={16} weight="bold" />
                  </Button>
                </Link>
              </div>
            </div>

            <dl className="lg:col-span-8 divide-y divide-border-subtle">
              {howToJoin.map((info) => (
                <div key={info.label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="h-10 w-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                    <info.icon size={20} weight="duotone" className="text-accent-700" />
                  </div>
                  <div className="min-w-0 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-4">
                    <dt className="sm:w-32 shrink-0 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-text-muted font-semibold">
                      {info.label}
                    </dt>
                    <dd className="text-sm md:text-base text-text-primary font-medium">
                      {info.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </Section>

      {/* ════ 02 — Fêtes de quartier ════ */}
      <Section id="fetes" className="scroll-mt-20">
        <SectionHeading
          eyebrow="02 · Fêter"
          title={
            <>
              Des fêtes<br />
              <span className="text-accent">au fil des saisons.</span>
            </>
          }
          intro="Chaque année, nous donnons rendez-vous aux familles du quartier pour des moments festifs et conviviaux."
        />

        {/* Calendrier */}
        <div className="relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-border-subtle" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {seasons.map((season) => (
              <StaggerItem key={season.title}>
                <div className="relative h-full flex md:flex-col items-start md:items-center md:text-center gap-4 md:gap-0 rounded-3xl md:rounded-none border md:border-0 border-border-subtle bg-surface-elevated md:bg-transparent p-5 md:p-0">
                  <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-accent-100 flex items-center justify-center">
                    <season.icon size={26} weight="duotone" className="text-accent-700" />
                  </div>
                  <div className="md:mt-5">
                    <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-accent">
                      {season.period}
                    </p>
                    <h3 className="mt-1 font-heading font-bold text-lg leading-tight text-text-primary">
                      {season.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                      {season.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Temps fort — Journée des Familles */}
        <FadeIn className="mt-16 md:mt-24">
          <article
            className="grain relative overflow-hidden rounded-[28px] p-8 md:p-12 text-white"
            style={{
              background:
                "linear-gradient(135deg, #e8662b 0%, #d4541e 45%, #8a4eb0 100%)",
            }}
          >
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6">
                <span className="inline-block rounded-full bg-white/20 text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 mb-5">
                  Temps fort 2026
                </span>
                <h3 className="font-heading font-black text-[clamp(28px,3.2vw,42px)] leading-[1.05] tracking-[-0.02em]">
                  Journée des Familles d’Ici et d’Ailleurs
                </h3>
                <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed max-w-[52ch]">
                  Une après-midi gratuite pour toute la famille, avec le
                  soutien de nos sponsors, de la Politique de la Ville et de
                  3F Immobilier.
                </p>
                <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  {familyDayFacts.map((fact) => (
                    <div key={fact.label} className="flex items-center gap-3">
                      <fact.icon size={22} weight="duotone" className="text-white/90" />
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.14em] text-white/70 font-semibold">
                          {fact.label}
                        </dt>
                        <dd className="text-sm font-semibold">{fact.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              <ul className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {familyDayHighlights.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl bg-white/12 border border-white/20 backdrop-blur-sm p-5"
                  >
                    <item.icon size={26} weight="duotone" className="text-white mb-3" />
                    <p className="text-sm font-semibold leading-snug">{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </FadeIn>
      </Section>

      {/* ════ 03 — Jeux et ateliers ════ */}
      <Section id="ateliers" className="bg-surface-muted scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5">
            <span className="eyebrow text-accent mb-3">03 · Jouer</span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Jeux et<br />
              <span className="text-accent">ateliers créatifs.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-text-secondary max-w-[50ch]">
              Plusieurs fois dans l’année, des séances de jeux et d’ateliers
              pour amuser les enfants et faire vivre le quartier. Les dates
              sont annoncées dans les actualités.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-700 text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
              <Sparkle size={14} weight="fill" />
              Nouvelles séances prochainement
            </span>
          </FadeIn>

          <StaggerContainer className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {workshops.map((item) => (
              <StaggerItem key={item.label}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-5 md:p-6">
                  <div className="h-11 w-11 rounded-xl bg-accent-100 flex items-center justify-center mb-4">
                    <item.icon size={22} weight="duotone" className="text-accent-700" />
                  </div>
                  <p className="text-sm md:text-base font-semibold text-text-primary leading-snug">
                    {item.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ════ CTA ════ */}
      <Section>
        <FadeIn>
          <div className="grain relative rounded-[28px] bg-primary-950 p-8 md:p-16 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow text-accent-300 mb-4">Participer</span>
                <h2 className="mt-3 font-heading font-black text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-white max-w-[14ch]">
                  Envie de nous<br />rejoindre ?
                </h2>
                <p className="mt-6 text-lg text-primary-100 max-w-[52ch] leading-relaxed">
                  Adhérez pour profiter du tarif réduit et de la priorité sur
                  les sorties, ou rejoignez l’équipe bénévole pour animer le
                  quartier.
                </p>
                <ul className="mt-8 space-y-3 text-base">
                  <li>
                    <a href={`tel:${contactPhoneHref}`} className="inline-flex items-center gap-3 text-white font-medium hover:text-accent-300 transition-colors">
                      <Phone size={20} weight="duotone" className="text-accent-300" />
                      {contactPhoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-3 text-white font-medium hover:text-accent-300 transition-colors break-all">
                      <EnvelopeSimple size={20} weight="duotone" className="text-accent-300 shrink-0" />
                      {contactEmail}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link href="/adhesion">
                  <Button
                    size="lg"
                    className="w-full justify-between bg-accent text-white hover:bg-accent-700 border-none"
                  >
                    Adhérer à l’association
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                </Link>
                <a href={volunteerMailto}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-between border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:text-white bg-transparent"
                  >
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
