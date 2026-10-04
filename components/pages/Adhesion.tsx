"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  Bell,
  CalendarBlank,
  CaretDown,
  CheckCircle,
  CreditCard,
  EnvelopeSimple,
  Files,
  FacebookLogo,
  Heart,
  House,
  IdentificationCard,
  InstagramLogo,
  Lock,
  Megaphone,
  Money,
  Phone,
  Scales,
  SealCheck,
  Tag,
  TiktokLogo,
  SnapchatLogo,
  UsersThree,
  Crown,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { reseaux } from "@/lib/actualites";
import { ADHESIONS_OUVERTES, ANNEE, HELLOASSO_WIDGET, PROCHAINE_SESSION } from "@/lib/adhesion";

/* ── Coordonnées ── */

const contactEmail = "famillesdicietdailleurs@gmail.com";
const contactPhoneDisplay = "09.81.10.90.27";
const contactPhoneHref = "+33981109027";
const permanence = "Un mercredi sur deux, de 17h30 à 19h";
const notifyMailto = `mailto:${contactEmail}?subject=${encodeURIComponent(`[Site AFIA] Prévenez-moi à l'ouverture des adhésions`)}&body=${encodeURIComponent("Bonjour,\n\nJe souhaite être prévenu(e) à l'ouverture des prochaines adhésions.\n\nNom :\nTéléphone :\n\nMerci.")}`;

/* ── Données ── */

const benefits: { icon: Icon; title: string; desc: string }[] = [
  { icon: Tag, title: "Tarif réduit", desc: "Sur les sorties familles organisées par l’association." },
  { icon: Crown, title: "Priorité aux inscriptions", desc: "Les adhérents passent en premier quand les places sont limitées." },
  { icon: UsersThree, title: "Réunion des adhérents", desc: `${permanence}, au local de l’association.` },
  { icon: Scales, title: "Droit de vote", desc: "Participez aux Assemblées générales et aux décisions." },
  { icon: Megaphone, title: "Informé en priorité", desc: "Des événements, activités et projets de l’association." },
  { icon: Heart, title: "Soutenir le quartier", desc: "Votre cotisation finance les actions d’AFIA à Beauval." },
];

const documents = [
  "Votre pièce d’identité et celle de votre conjoint",
  "Pour les enfants : le livret de famille ou la pièce d’identité de chaque enfant",
  "Un justificatif de domicile de moins de 3 mois",
];

const faq = [
  {
    q: "Faut-il être adhérent pour participer aux sorties ?",
    a: "Non, les sorties sont ouvertes à tous. Les adhérents bénéficient simplement d’un tarif réduit et sont prioritaires à l’inscription.",
  },
  {
    q: "Qui est couvert par l’adhésion ?",
    a: "Tout le foyer. Quand un parent adhère, son conjoint et ses enfants deviennent automatiquement adhérents et profitent des mêmes avantages.",
  },
  {
    q: "Jusqu’à quand mon adhésion est-elle valable ?",
    a: "L’adhésion est valable pour l’année civile, jusqu’au 31 décembre. Elle se renouvelle chaque année lors de la session d’adhésion.",
  },
  {
    q: "Quand peut-on adhérer ?",
    a: "Les adhésions sont ouvertes en début d’année, généralement en janvier et février. En dehors de cette période, il faut attendre la session suivante.",
  },
  {
    q: "Comment payer ?",
    a: "Par carte bancaire en ligne via HelloAsso, ou en espèces et par chèque à la permanence de l’association.",
  },
  {
    q: "Pourquoi fournir des justificatifs ?",
    a: "Le livret de famille ou les pièces d’identité permettent de vérifier le lien entre le parent qui adhère et ses enfants, puisque l’adhésion couvre tout le foyer. Les documents sont à apporter à la permanence.",
  },
];

const reseauIcons = {
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  TikTok: TiktokLogo,
  Snapchat: SnapchatLogo,
};

/* ── Composant ── */

export function Adhesion() {
  const steps: { icon: Icon; title: string; content: ReactNode }[] = [
    {
      icon: CreditCard,
      title: "Je paie la cotisation",
      content: (
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CreditCard size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
            <span>Par carte bancaire, en ligne via HelloAsso</span>
          </li>
          <li className="flex items-start gap-2">
            <Money size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
            <span>En espèces ou par chèque, à la permanence</span>
          </li>
        </ul>
      ),
    },
    {
      icon: Files,
      title: "J’apporte mes justificatifs à la permanence",
      content: (
        <ul className="space-y-2">
          {documents.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <CheckCircle size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: SealCheck,
      title: "Mon adhésion est validée",
      content: (
        <p>
          Nous vous remettons le règlement intérieur et des documents sur la vie
          de l’association. Toute la famille profite des avantages adhérents
          jusqu’au 31 décembre.
        </p>
      ),
    },
  ];

  return (
    <>
      {/* ════ Hero + carte tarif ════ */}
      <section className="relative pt-14 md:pt-20 pb-14 md:pb-20 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-7">
              <span className="eyebrow text-primary-700 mb-6">Adhésion</span>
              <h1 className="font-heading font-black text-[clamp(44px,6vw,80px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Rejoignez<br />
                la famille <span className="text-primary">AFIA.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[52ch]">
                Une seule adhésion pour tout le foyer : vous, votre conjoint et
                vos enfants profitez des avantages adhérents toute l’année.
              </p>
              <p className="mt-5 flex items-start gap-2 text-sm text-text-muted max-w-[52ch]">
                <House size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-text-primary">Bon à savoir :</span>{" "}
                  les sorties restent ouvertes à tous, adhérents ou non.
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="grain relative overflow-hidden rounded-3xl bg-primary-950 p-7 md:p-9 text-white shadow-diffuse">
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="eyebrow text-accent-300">Cotisation annuelle</span>
                    <span
                      className={`rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] font-semibold ${
                        ADHESIONS_OUVERTES ? "bg-emerald-400/20 text-emerald-200" : "bg-white/10 text-white/80"
                      }`}
                    >
                      {ADHESIONS_OUVERTES ? `Adhésions ${ANNEE} ouvertes` : `Adhésions ${ANNEE} fermées`}
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-heading font-black text-[64px] leading-none tracking-[-0.04em]">22 €</span>
                    <span className="text-base text-primary-200">/ an</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-white">Pour tout le foyer</p>

                  <ul className="mt-6 space-y-2.5 text-sm text-primary-100">
                    <li className="flex items-center gap-2.5">
                      <UsersThree size={18} weight="duotone" className="text-accent-300" />
                      Parent, conjoint et enfants
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CalendarBlank size={18} weight="duotone" className="text-accent-300" />
                      Valable jusqu’au 31 décembre
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CreditCard size={18} weight="duotone" className="text-accent-300" />
                      Carte bancaire, espèces ou chèque
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/15">
                    {ADHESIONS_OUVERTES ? (
                      <div className="space-y-3">
                        <a href="#paiement" className="block">
                          <Button size="lg" className="w-full justify-between bg-accent text-white hover:bg-accent-700 border-none">
                            Adhérer en ligne
                            <ArrowRight size={18} weight="bold" />
                          </Button>
                        </a>
                        <p className="text-xs text-primary-200 text-center">
                          Ou en espèces et par chèque à la permanence
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-sm text-primary-100 leading-relaxed">
                          Les adhésions {ANNEE} sont closes. Prochaine session :{" "}
                          <span className="font-semibold text-white">{PROCHAINE_SESSION}</span>.
                        </p>
                        <a href={notifyMailto} className="block">
                          <Button size="lg" className="w-full justify-between bg-accent text-white hover:bg-accent-700 border-none">
                            Être prévenu à l’ouverture
                            <Bell size={18} weight="duotone" />
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════ Avantages ════ */}
      <Section className="py-16 md:py-20">
        <FadeIn className="max-w-3xl mb-10">
          <span className="eyebrow text-primary-700 mb-3">Pourquoi adhérer</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Vos avantages <span className="text-primary">adhérents.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-7">
                <div className="h-12 w-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                  <b.icon size={24} weight="duotone" className="text-primary-700" />
                </div>
                <h3 className="font-heading font-bold text-lg leading-snug text-text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ════ 3 étapes ════ */}
      <Section className="bg-surface-muted py-16 md:py-20">
        <FadeIn className="max-w-3xl mb-10">
          <span className="eyebrow text-primary-700 mb-3">Comment ça marche</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Adhérer en <span className="text-primary">3 étapes.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative h-full rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center font-heading font-black text-xl">
                    {i + 1}
                  </div>
                  <step.icon size={28} weight="duotone" className="text-primary-300" />
                </div>
                <h3 className="font-heading font-bold text-xl leading-snug text-text-primary mb-4">
                  {step.title}
                </h3>
                <div className="text-sm text-text-secondary leading-relaxed">{step.content}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.1} className="mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-primary/15 bg-primary-50/60 px-5 py-4 text-sm text-text-secondary">
            <IdentificationCard size={22} weight="duotone" className="text-primary-700 shrink-0" />
            <p>
              <span className="font-semibold text-text-primary">Permanence :</span>{" "}
              {permanence}, au 4 Square de la Brie (Apt 25, interphone AFIA).
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ════ Paiement en ligne (pendant la session uniquement) ════ */}
      {ADHESIONS_OUVERTES && (
        <Section id="paiement" className="py-16 md:py-20 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-end">
            <FadeIn className="lg:col-span-7">
              <span className="eyebrow text-primary-700 mb-3">Paiement en ligne</span>
              <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
                Adhérer <span className="text-primary">depuis le site.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-5 space-y-2 text-sm text-text-secondary">
              <p className="flex items-start gap-2">
                <Lock size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
                Paiement sécurisé par HelloAsso.
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle size={18} weight="duotone" className="text-primary-700 shrink-0 mt-0.5" />
                HelloAsso propose une contribution facultative pour son service : vous pouvez la modifier ou la mettre à 0 €.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="rounded-3xl border border-border-subtle overflow-hidden bg-surface-elevated">
              <iframe
                id="haWidget"
                title={`Formulaire d'adhésion ${ANNEE} HelloAsso`}
                scrolling="auto"
                src={HELLOASSO_WIDGET}
                style={{ width: "100%", height: "750px", border: "none" }}
                onLoad={() => {
                  window.addEventListener("message", function (e: MessageEvent) {
                    const data = e.data as { height?: number };
                    const dataHeight = data.height;
                    const el = document.getElementById("haWidget") as HTMLIFrameElement | null;
                    if (el && dataHeight && dataHeight > parseFloat(el.style.height || "0")) {
                      el.style.height = dataHeight + "px";
                    }
                  });
                }}
              />
            </div>
          </FadeIn>
        </Section>
      )}

      {/* ════ Questions fréquentes ════ */}
      <Section className={ADHESIONS_OUVERTES ? "bg-surface-muted py-16 md:py-20" : "py-16 md:py-20"}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-4">
            <span className="eyebrow text-primary-700 mb-3">Vos questions</span>
            <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
              Questions <span className="text-primary">fréquentes.</span>
            </h2>
            <p className="mt-5 text-base text-text-secondary leading-relaxed">
              Vous ne trouvez pas votre réponse ? Venez nous voir à la
              permanence ou contactez-nous.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-8">
            <div className="divide-y divide-border-subtle rounded-3xl border border-border-subtle bg-surface-elevated">
              {faq.map((item) => (
                <details key={item.q} className="group px-6 md:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading font-bold text-base md:text-lg text-text-primary [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <CaretDown size={18} weight="bold" className="shrink-0 text-primary-700 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-5 -mt-1 text-sm md:text-base text-text-secondary leading-relaxed max-w-[65ch]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ════ Une question ? ════ */}
      <Section className="pt-0 md:pt-0 pb-16 md:pb-24">
        <FadeIn>
          <div className="relative rounded-[28px] border border-primary/15 bg-paper-warm p-8 md:p-14 overflow-hidden">
            <div className="grain-light absolute inset-0 pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow text-primary-700 mb-4">Une question ?</span>
                <h2 className="mt-3 font-heading font-black text-[clamp(30px,4vw,52px)] leading-[0.95] tracking-[-0.03em] text-primary-950">
                  Venez nous voir<br />
                  <span className="text-primary">à la permanence.</span>
                </h2>
                <p className="mt-5 text-lg text-text-secondary max-w-[48ch] leading-relaxed">
                  {permanence}. Vous pouvez aussi nous appeler pendant ce créneau
                  ou nous écrire à tout moment.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  {reseaux.map((r) => {
                    const IconCmp = reseauIcons[r.label];
                    return (
                      <a
                        key={r.label}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={r.label}
                        className="h-11 w-11 rounded-full border border-border-subtle bg-surface-elevated flex items-center justify-center text-primary-700 hover:text-primary hover:border-primary/30 transition-colors"
                      >
                        <IconCmp size={20} weight="duotone" />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <a href={`tel:${contactPhoneHref}`}>
                  <Button size="lg" className="w-full justify-between">
                    {contactPhoneDisplay}
                    <Phone size={18} weight="duotone" />
                  </Button>
                </a>
                <a href={`mailto:${contactEmail}`}>
                  <Button variant="outline" size="lg" className="w-full justify-between">
                    Écrire un e-mail
                    <EnvelopeSimple size={18} weight="duotone" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="w-full justify-between">
                    Toutes nos coordonnées
                    <ArrowRight size={18} weight="bold" />
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
