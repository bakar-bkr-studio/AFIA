"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { MeauxBientot } from "@/components/actualites/MeauxBientot";
import {
  ArrowRight,
  CalendarBlank,
  ClockAfternoon,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  TiktokLogo,
  SnapchatLogo,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  actusAVenir,
  actusMeaux,
  actusPassees,
  MEAUX_DISPONIBLE,
  poles,
  reseaux,
  type Actu,
} from "@/lib/actualites";

const reseauIcons = {
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  TikTok: TiktokLogo,
  Snapchat: SnapchatLogo,
};

// Vraies photos AFIA (mêmes que sur les pages pôles)
const heroPhotos = [
  { src: "https://i.imgur.com/SqbljKJ.jpeg", alt: "Animation du pôle ludique AFIA" },
  { src: "https://i.imgur.com/yzcueAS.jpeg", alt: "Repas solidaire au Colisée de Meaux" },
  { src: "https://i.imgur.com/bTwviXR.jpeg", alt: "Sortie paintball avec les jeunes du quartier" },
];

const filtres = ["Toutes", "Sorties", "Événements", "Programmes"] as const;
type Filtre = (typeof filtres)[number];
const filtreCategorie: Record<Exclude<Filtre, "Toutes">, string> = {
  Sorties: "Sortie",
  Événements: "Événement",
  Programmes: "Programme",
};

/* ── Petits composants ── */

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "px-5 py-2.5 text-sm font-semibold rounded-full transition-colors",
        active ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"
      )}
    >
      {children}
    </button>
  );
}

function ActuCard({ a }: { a: Actu }) {
  return (
    <Link
      href={`/actualites/${a.id}`}
      className="group h-full flex flex-col rounded-3xl overflow-hidden border border-border-subtle bg-surface-elevated hover:border-primary/30 hover:shadow-diffuse transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        <Image
          src={a.image}
          alt={a.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] font-semibold text-primary-800">
          {a.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted mb-3">
          <span className="inline-flex items-center gap-1.5">
            <CalendarBlank size={14} weight="duotone" className="text-primary-700" />
            {a.date}
          </span>
          {a.lieu && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} weight="duotone" className="text-primary-700" />
              {a.lieu}
            </span>
          )}
        </div>
        <h3 className="font-heading text-lg font-bold tracking-tight leading-snug text-text-primary group-hover:text-primary transition-colors">
          {a.title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2 flex-1">
          {a.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Lire la suite
          <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function FeaturedCard({ a }: { a: Actu }) {
  return (
    <Link
      href={`/actualites/${a.id}`}
      className="group grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden border border-border-subtle bg-surface-elevated hover:border-primary/30 hover:shadow-diffuse transition-all duration-300"
    >
      <div className="relative md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[340px] overflow-hidden bg-surface-muted">
        <Image
          src={a.image}
          alt={a.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(min-width: 768px) 58vw, 100vw"
        />
      </div>
      <div className="md:col-span-5 p-7 md:p-10 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="rounded-full bg-primary-950 text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
            La plus récente
          </span>
          <span className="rounded-full bg-primary-100 text-primary-800 text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
            {a.category}
          </span>
        </div>
        <h3 className="font-heading font-black text-[clamp(22px,2.4vw,30px)] leading-[1.1] tracking-[-0.02em] text-primary-950 group-hover:text-primary transition-colors">
          {a.title}
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarBlank size={16} weight="duotone" className="text-primary-700" />
            {a.date}
          </span>
          {a.lieu && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} weight="duotone" className="text-primary-700" />
              {a.lieu}
            </span>
          )}
        </div>
        <p className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed line-clamp-3">
          {a.excerpt}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Lire la suite
          <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function UpcomingCard({ a }: { a: Actu }) {
  const facts = [
    { icon: CalendarBlank, label: "Quand", value: a.date },
    a.heure && { icon: ClockAfternoon, label: "Horaires", value: a.heure },
    a.lieu && { icon: MapPin, label: "Où", value: a.lieu },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden border border-primary/15 bg-surface-elevated shadow-diffuse">
      <div className="relative md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[320px] bg-surface-muted">
        <Image
          src={a.image}
          alt={a.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>
      <div className="md:col-span-7 p-7 md:p-10 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="rounded-full bg-accent text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
            {a.statut === "en_cours" ? "En ce moment" : "À venir"}
          </span>
          <span className="rounded-full bg-primary-100 text-primary-800 text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
            {a.category}
          </span>
        </div>
        <h3 className="font-heading font-black text-[clamp(22px,2.4vw,30px)] leading-[1.1] tracking-[-0.02em] text-primary-950">
          {a.title}
        </h3>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-y border-border-subtle py-5">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                <f.icon size={18} weight="duotone" className="text-primary-700" />
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-primary-700 font-semibold">
                  {f.label}
                </dt>
                <dd className="text-sm text-text-primary font-medium">{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm md:text-base text-text-secondary leading-relaxed line-clamp-3">
          {a.excerpt}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href={`/actualites/${a.id}`}>
            <Button className="w-full">
              Voir le détail
              <ArrowRight size={16} weight="bold" />
            </Button>
          </Link>
          {a.pole && (
            <Link href={poles[a.pole].href}>
              <Button variant="outline" className="w-full">
                {poles[a.pole].label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Composant ── */

export function Actualites() {
  const [tab, setTab] = React.useState<"afia" | "meaux">("afia");
  const [filtre, setFiltre] = React.useState<Filtre>("Toutes");

  const passees =
    filtre === "Toutes"
      ? actusPassees
      : actusPassees.filter((a) => a.category === filtreCategorie[filtre]);

  const [premiere, ...suivantes] = passees;

  return (
    <>
      {/* ════ Hero ════ */}
      <section className="relative pt-14 md:pt-20 pb-14 md:pb-16 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="eyebrow text-primary-700 mb-6">Actualités</span>
                <h1 className="font-heading font-black text-[clamp(44px,6.5vw,88px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4">
                  Le fil<br />
                  <span className="text-primary">d’actu.</span>
                </h1>
                <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[54ch]">
                  Les prochains rendez-vous de l’association, le récit de nos
                  sorties et événements, et bientôt les infos utiles de la Ville
                  de Meaux.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-10">
                <div className="inline-flex items-center gap-1 p-1 rounded-full border border-border-subtle bg-surface-elevated">
                  <TabButton active={tab === "afia"} onClick={() => setTab("afia")}>
                    Actualités AFIA
                  </TabButton>
                  <TabButton active={tab === "meaux"} onClick={() => setTab("meaux")}>
                    Ville de Meaux
                  </TabButton>
                </div>
              </FadeIn>
            </div>

            {/* Collage photos */}
            <FadeIn delay={0.15} className="lg:col-span-6">
              <div className="relative grid grid-cols-5 grid-rows-2 gap-3 md:gap-4 h-[300px] sm:h-[380px] lg:h-[460px]">
                <div className="relative col-span-3 row-span-2 rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                  <Image src={heroPhotos[0].src} alt={heroPhotos[0].alt} fill priority className="object-cover" sizes="(min-width: 1024px) 30vw, 60vw" />
                </div>
                {heroPhotos.slice(1).map((p) => (
                  <div key={p.src} className="relative col-span-2 rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
                    <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(min-width: 1024px) 20vw, 40vw" />
                  </div>
                ))}
                {actusPassees[0] && (
                  <Link
                    href={`/actualites/${actusPassees[0].id}`}
                    className="group hidden sm:block absolute -bottom-6 -left-6 max-w-[280px] glass rounded-2xl px-5 py-4 shadow-diffuse"
                  >
                    <p className="eyebrow text-primary-700">Dernière actu</p>
                    <p className="mt-1.5 font-heading font-bold text-sm leading-snug text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                      {actusPassees[0].title}
                    </p>
                    <p className="mt-1.5 text-xs text-text-muted inline-flex items-center gap-1.5">
                      {actusPassees[0].date}
                      <ArrowRight size={12} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </Link>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {tab === "meaux" ? (
        <Section className="py-14 md:py-20">
          {MEAUX_DISPONIBLE ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {actusMeaux.map((a) => (
                <StaggerItem key={a.id}>
                  <ActuCard a={a} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <MeauxBientot />
            </FadeIn>
          )}
        </Section>
      ) : (
        <>
          {/* ════ À ne pas manquer ════ */}
          {actusAVenir.length > 0 && (
            <Section className="pt-16 md:pt-20 pb-0 md:pb-0">
              <FadeIn className="mb-8">
                <span className="eyebrow text-primary-700 mb-3">À ne pas manquer</span>
                <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
                  En ce moment <span className="text-primary">et bientôt.</span>
                </h2>
              </FadeIn>
              <div className="space-y-6">
                {actusAVenir.map((a) => (
                  <FadeIn key={a.id}>
                    <UpcomingCard a={a} />
                  </FadeIn>
                ))}
              </div>
            </Section>
          )}

          {/* ════ Ce qui s'est passé ════ */}
          <Section className="pt-14 md:pt-20 pb-14 md:pb-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <FadeIn>
                <span className="eyebrow text-primary-700 mb-3">Retour sur</span>
                <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
                  Ce qui s’est <span className="text-primary">passé.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap gap-2">
                  {filtres.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFiltre(f)}
                      aria-pressed={filtre === f}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium border transition-colors",
                        filtre === f
                          ? "bg-primary-950 text-white border-primary-950"
                          : "bg-surface-elevated text-text-secondary border-border-subtle hover:border-primary/40 hover:text-text-primary"
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </FadeIn>
            </div>

            {!premiere ? (
              <p className="text-text-secondary">Aucune actualité dans cette catégorie pour le moment.</p>
            ) : (
              <div key={filtre} className="space-y-6">
                <FadeIn>
                  <FeaturedCard a={premiere} />
                </FadeIn>
                {suivantes.length > 0 && (
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suivantes.map((a) => (
                      <StaggerItem key={a.id}>
                        <ActuCard a={a} />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                )}
              </div>
            )}
          </Section>
        </>
      )}

      {/* ════ Ne rien manquer ════ */}
      <Section className="pt-0 md:pt-0 pb-16 md:pb-24">
        <FadeIn>
          <div className="grain relative rounded-[28px] bg-primary-950 p-8 md:p-14 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow text-accent-300 mb-4">Ne rien manquer</span>
                <h2 className="mt-3 font-heading font-black text-[clamp(30px,4vw,52px)] leading-[0.95] tracking-[-0.03em] text-white">
                  Suivez-nous sur<br />les réseaux.
                </h2>
                <p className="mt-5 text-base md:text-lg text-primary-100 max-w-[50ch] leading-relaxed">
                  Les inscriptions aux sorties et aux activités sont annoncées
                  sur nos réseaux et par affiches dans le quartier.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                {reseaux.map((r) => {
                  const Icon = reseauIcons[r.label];
                  return (
                    <a
                      key={r.label}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white hover:bg-white/10 hover:border-white/30 transition-colors"
                    >
                      <span className="inline-flex items-center gap-3 font-semibold">
                        <Icon size={22} weight="duotone" className="text-accent-300" />
                        {r.label}
                      </span>
                      <ArrowRight size={16} weight="bold" className="text-white/60 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
