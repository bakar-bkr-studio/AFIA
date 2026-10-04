"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  Bell,
  Buildings,
  CalendarBlank,
  EnvelopeSimple,
  FacebookLogo,
  GraduationCap,
  HandHeart,
  IdentificationCard,
  InstagramLogo,
  MapPin,
  NavigationArrow,
  Phone,
  Question,
  TiktokLogo,
  SnapchatLogo,
  Train,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { reseaux } from "@/lib/actualites";

/* ── Coordonnées ── */

const contactEmail = "famillesdicietdailleurs@gmail.com";
const contactPhoneDisplay = "09.81.10.90.27";
const contactPhoneHref = "+33981109027";
const addressLine1 = "4 Square de la Brie, Apt 25";
const addressLine2 = "77100 Meaux";
const permanence = "Un mercredi sur deux, de 17h30 à 19h";
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=4+Square+de+la+Brie,+77100+Meaux";
const homeworkMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("[Site AFIA] Inscription aide aux devoirs")}&body=${encodeURIComponent("Bonjour,\n\nJe souhaite inscrire mon enfant à l'aide aux devoirs.\n\nNom et prénom de l'enfant :\nClasse :\nNom du parent :\nTéléphone :\n\nMerci.")}`;

/* ── Données ── */

const subjectOptions = [
  "Demande d’information",
  "Devenir bénévole",
  "Proposer un partenariat",
  "Inscription à une activité",
  "Autre",
];

type Intent =
  | { kind: "link"; href: string; external?: boolean }
  | { kind: "form"; subject: string };

const intents: { icon: Icon; title: string; desc: string; action: Intent; cta: string }[] = [
  {
    icon: GraduationCap,
    title: "Inscrire mon enfant à l’aide aux devoirs",
    desc: "Gratuit, du CP à la 3ème, 10 places. L’inscription se fait par e-mail.",
    action: { kind: "link", href: homeworkMailto, external: true },
    cta: "Écrire l’e-mail d’inscription",
  },
  {
    icon: Train,
    title: "Participer à une sortie",
    desc: "Ouvert à tous, tarif réduit et priorité pour les adhérents.",
    action: { kind: "link", href: "/pole-ludique#sorties" },
    cta: "Comment participer",
  },
  {
    icon: IdentificationCard,
    title: "Adhérer à l’association",
    desc: "Profitez des avantages adhérents et soutenez nos actions.",
    action: { kind: "link", href: "/adhesion" },
    cta: "Adhérer",
  },
  {
    icon: HandHeart,
    title: "Devenir bénévole",
    desc: "Donnez un peu de votre temps pour animer le quartier.",
    action: { kind: "form", subject: "Devenir bénévole" },
    cta: "Remplir le formulaire",
  },
  {
    icon: Buildings,
    title: "Proposer un partenariat",
    desc: "Structure locale, institution, entreprise : construisons un projet commun.",
    action: { kind: "form", subject: "Proposer un partenariat" },
    cta: "Remplir le formulaire",
  },
  {
    icon: Question,
    title: "Poser une autre question",
    desc: "Une question sur l’association, ses projets ou ses activités.",
    action: { kind: "form", subject: "Demande d’information" },
    cta: "Remplir le formulaire",
  },
];

const reseauIcons = {
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  TikTok: TiktokLogo,
  Snapchat: SnapchatLogo,
};

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";

/* ── Petits composants ── */

function InfoLine({
  icon: IconCmp,
  label,
  children,
}: {
  icon: Icon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
        <IconCmp size={20} weight="duotone" className="text-primary-700" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.14em] text-primary-700 font-semibold">
          {label}
        </p>
        <div className="mt-0.5 text-sm md:text-base text-text-primary font-medium">{children}</div>
      </div>
    </div>
  );
}

/* ── Composant ── */

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(subjectOptions[0]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  function goToForm(nextSubject: string) {
    setSubject(nextSubject);
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => document.getElementById("name")?.focus({ preventScroll: true }), 600);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message, website }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "L’envoi a échoué. Veuillez réessayer.");
      }

      setSubmitStatus("success");
      setSubmitMessage("Votre message a bien été envoyé. L’équipe AFIA vous répondra dès que possible.");
      setName("");
      setEmail("");
      setPhone("");
      setSubject(subjectOptions[0]);
      setMessage("");
      setWebsite("");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "L’envoi a échoué. Veuillez réessayer ou nous écrire directement."
      );
    }
  }

  return (
    <>
      {/* ════ Hero + contact direct ════ */}
      <section className="relative pt-14 md:pt-20 pb-14 md:pb-20 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6">
              <span className="eyebrow text-primary-700 mb-6">Contact</span>
              <h1 className="font-heading font-black text-[clamp(40px,5.2vw,68px)] leading-[0.95] tracking-[-0.03em] text-primary-950 mt-4 text-balance">
                Un projet&nbsp;?<br />
                Une question&nbsp;?<br />
                <span className="text-primary">Parlons-en.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-text-secondary max-w-[50ch]">
                Habitant, parent, partenaire ou futur bénévole : l’équipe AFIA
                est à votre écoute.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-6">
              <div className="rounded-3xl border border-border-subtle bg-surface-elevated shadow-diffuse p-6 md:p-8">
                <p className="eyebrow text-primary-700 mb-6">Contact direct</p>
                <div className="space-y-5">
                  <InfoLine icon={Phone} label="Téléphone">
                    <a href={`tel:${contactPhoneHref}`} className="hover:text-primary transition-colors">
                      {contactPhoneDisplay}
                    </a>
                  </InfoLine>
                  <InfoLine icon={EnvelopeSimple} label="E-mail">
                    <a href={`mailto:${contactEmail}`} className="break-all hover:text-primary transition-colors">
                      {contactEmail}
                    </a>
                  </InfoLine>
                  <InfoLine icon={MapPin} label="Adresse">
                    {addressLine1}, {addressLine2}
                  </InfoLine>
                  <InfoLine icon={CalendarBlank} label="Permanence (accueil et téléphone)">
                    {permanence}
                  </InfoLine>
                </div>
                <div className="mt-7 pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`tel:${contactPhoneHref}`}>
                    <Button className="w-full">
                      <Phone size={18} weight="duotone" />
                      Appeler
                    </Button>
                  </a>
                  <a href={`mailto:${contactEmail}`}>
                    <Button variant="outline" className="w-full">
                      <EnvelopeSimple size={18} weight="duotone" />
                      Écrire un e-mail
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════ Que souhaitez-vous faire ? ════ */}
      <Section className="py-16 md:py-20">
        <FadeIn className="max-w-3xl mb-10">
          <span className="eyebrow text-primary-700 mb-3">Pour aller plus vite</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Que souhaitez-vous <span className="text-primary">faire ?</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {intents.map((item) => {
            const content = (
              <>
                <div className="h-12 w-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                  <item.icon size={24} weight="duotone" className="text-primary-700" />
                </div>
                <h3 className="font-heading font-bold text-lg leading-snug tracking-tight text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{item.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {item.cta}
                  <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </>
            );
            const className =
              "group h-full w-full flex flex-col text-left rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-7 hover:border-primary/30 hover:shadow-diffuse transition-all duration-300 cursor-pointer";
            return (
              <StaggerItem key={item.title}>
                {item.action.kind === "form" ? (
                  <button
                    type="button"
                    onClick={() => goToForm((item.action as { subject: string }).subject)}
                    className={className}
                  >
                    {content}
                  </button>
                ) : item.action.external ? (
                  <a href={item.action.href} className={className}>
                    {content}
                  </a>
                ) : (
                  <Link href={item.action.href} className={className}>
                    {content}
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* ════ Formulaire + Bon à savoir ════ */}
      <Section id="formulaire" className="bg-surface-muted py-16 md:py-20 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <FadeIn className="lg:col-span-7">
            <div className="rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-10">
              <span className="eyebrow text-primary-700 mb-3">Formulaire</span>
              <h2 className="font-heading font-black text-[clamp(26px,3vw,38px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
                Écrivez-nous
              </h2>
              <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed">
                Nous vous répondrons par e-mail ou par téléphone.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-text-primary">
                      Nom / Prénom
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-text-primary">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={inputClass}
                    >
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-text-primary">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="vous@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-text-primary">
                      Téléphone <span className="font-normal text-text-muted">(facultatif)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={30}
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-text-primary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className={inputClass}
                    placeholder="Décrivez votre demande"
                  />
                </div>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Site internet</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                  <Button type="submit" size="lg" disabled={submitStatus === "sending"}>
                    {submitStatus === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                  <p className="text-xs text-text-muted leading-relaxed max-w-[40ch]">
                    Vos informations servent uniquement à répondre à votre demande.
                  </p>
                </div>

                {submitMessage && (
                  <p
                    className={submitStatus === "success" ? "text-sm text-primary" : "text-sm text-red-700"}
                    role={submitStatus === "error" ? "alert" : "status"}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5 space-y-5">
            <div className="grain relative overflow-hidden rounded-3xl bg-primary-950 p-6 md:p-8 text-white">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />
              <div className="relative">
                <p className="eyebrow text-accent-300 mb-4">Bon à savoir</p>
                <h3 className="font-heading font-bold text-xl leading-snug">
                  Venez nous rencontrer à la permanence
                </h3>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-semibold">
                  <CalendarBlank size={18} weight="duotone" className="text-accent-300" />
                  {permanence}
                </p>
                <p className="mt-5 text-sm text-primary-100 leading-relaxed">
                  La permanence a lieu pendant la réunion des adhérents. Tout le
                  monde est le bienvenu pour poser ses questions, sur place ou
                  par téléphone.
                </p>
                <p className="mt-3 text-sm text-primary-100 leading-relaxed">
                  En dehors de ces horaires, écrivez-nous par e-mail ou via le
                  formulaire.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-surface-elevated p-6 md:p-8">
              <p className="eyebrow text-primary-700 mb-4">Suivez-nous</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                Les inscriptions aux sorties et aux activités sont annoncées sur
                nos réseaux.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {reseaux.map((r) => {
                  const IconCmp = reseauIcons[r.label];
                  return (
                    <a
                      key={r.label}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 rounded-2xl border border-border-subtle bg-surface px-3 py-4 text-xs font-semibold text-text-primary hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      <IconCmp size={24} weight="duotone" className="text-primary-700" />
                      {r.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ════ Nous trouver ════ */}
      <Section className="py-16 md:py-20">
        <FadeIn className="max-w-3xl mb-10">
          <span className="eyebrow text-primary-700 mb-3">Localisation</span>
          <h2 className="font-heading font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Nous <span className="text-primary">trouver.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl border border-border-subtle overflow-hidden bg-surface-elevated">
            <iframe
              title="Carte AFIA - 4 Square de la Brie, Meaux"
              src="https://www.google.com/maps?q=4+Square+de+la+Brie,+77100+Meaux&output=embed"
              className="block w-full h-[320px] md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="md:absolute md:top-6 md:left-6 md:max-w-[360px] w-full bg-surface-elevated md:rounded-2xl md:shadow-diffuse md:border md:border-border-subtle p-6">
              <p className="eyebrow text-primary-700 mb-4">Le local AFIA</p>
              <div className="space-y-4">
                <InfoLine icon={MapPin} label="Adresse">
                  {addressLine1}
                  <br />
                  {addressLine2}
                </InfoLine>
                <InfoLine icon={Bell} label="Accès">
                  Sonnez à l’interphone au nom d’AFIA
                </InfoLine>
                <InfoLine icon={CalendarBlank} label="Permanence">
                  {permanence}
                </InfoLine>
              </div>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="block mt-6">
                <Button className="w-full">
                  <NavigationArrow size={18} weight="duotone" />
                  Itinéraire
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
