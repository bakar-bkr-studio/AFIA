"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarBlank,
  Check,
  ClockAfternoon,
  MapPin,
  ShareNetwork,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { actusAfia, poles, type Actu } from "@/lib/actualites";

function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = React.useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* partage annulé */
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function whatsapp() {
    const text = `${title} ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={whatsapp} className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white">
        <WhatsappLogo size={18} weight="fill" />
        Partager sur WhatsApp
      </Button>
      <Button variant="outline" onClick={share} className="w-full">
        {copied ? <Check size={18} weight="bold" /> : <ShareNetwork size={18} weight="duotone" />}
        {copied ? "Lien copié" : "Partager le lien"}
      </Button>
    </div>
  );
}

export function ActualiteDetail({ actu }: { actu: Actu }) {
  const facts = [
    { icon: CalendarBlank, label: "Date", value: actu.date },
    actu.heure && { icon: ClockAfternoon, label: "Horaires", value: actu.heure },
    actu.lieu && { icon: MapPin, label: "Lieu", value: actu.lieu },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  const autres = actusAfia.filter((a) => a.id !== actu.id).slice(0, 3);
  const pole = actu.pole ? poles[actu.pole] : null;
  const isUpcoming = actu.statut === "a_venir" || actu.statut === "en_cours";

  return (
    <>
      {/* ════ En-tête ════ */}
      <section className="relative pt-10 md:pt-14 pb-12 md:pb-16 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1000px] px-6 sm:px-8">
          <FadeIn>
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} weight="bold" />
              Toutes les actualités
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {isUpcoming && (
                <span className="rounded-full bg-accent text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
                  {actu.statut === "en_cours" ? "En ce moment" : "À venir"}
                </span>
              )}
              <span className="rounded-full bg-primary-100 text-primary-800 text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
                {actu.category}
              </span>
            </div>

            <h1 className="mt-5 font-heading font-black text-[clamp(32px,4.8vw,60px)] leading-[1.02] tracking-[-0.03em] text-primary-950 text-balance">
              {actu.title}
            </h1>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle flex items-center justify-center shrink-0">
                    <f.icon size={20} weight="duotone" className="text-primary-700" />
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.14em] text-primary-700 font-semibold">
                      {f.label}
                    </dt>
                    <dd className="text-sm md:text-base text-text-primary font-medium">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* ════ Contenu ════ */}
      <Section className="pt-0 md:pt-0 pb-16 md:pb-24" containerClassName="max-w-[1000px]">
        <FadeIn>
          <div className="relative -mt-2 aspect-[16/9] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
            <Image
              src={actu.image}
              alt={actu.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1000px) 1000px, 100vw"
            />
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-text-primary">
              {actu.excerpt}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-4">
            <div className="rounded-3xl border border-border-subtle bg-surface-elevated p-6 space-y-6">
              <div>
                <p className="eyebrow text-primary-700 mb-3">Partager</p>
                <ShareButtons title={actu.title} />
              </div>
              {pole && (
                <div className="pt-6 border-t border-border-subtle">
                  <p className="eyebrow text-primary-700 mb-3">En savoir plus</p>
                  <Link
                    href={pole.href}
                    className="group inline-flex items-center gap-2 font-semibold text-text-primary hover:text-primary transition-colors"
                  >
                    Découvrir le {pole.label.toLowerCase()}
                    <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ════ Autres actualités ════ */}
      {autres.length > 0 && (
        <Section className="bg-surface-muted">
          <FadeIn className="flex items-end justify-between gap-6 mb-10">
            <h2 className="font-heading font-black text-[clamp(26px,3vw,38px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Autres actualités
            </h2>
            <Link
              href="/actualites"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Tout voir
              <ArrowRight size={14} weight="bold" />
            </Link>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {autres.map((a) => (
              <StaggerItem key={a.id}>
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
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-text-muted mb-2">
                      {a.category} · {a.date}
                    </p>
                    <h3 className="font-heading text-base font-bold leading-snug text-text-primary group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}
    </>
  );
}
