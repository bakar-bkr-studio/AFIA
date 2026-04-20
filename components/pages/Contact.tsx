"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  ArrowRight,
  Buildings,
  CalendarBlank,
  ChatCircleDots,
  Clock,
  EnvelopeSimple,
  HandHeart,
  MapPin,
  Phone,
  Question,
  UserFocus,
  UsersThree,
} from "@phosphor-icons/react";

const contactEmail = "famillesdicietdailleurs@gmail.com";
const contactPhoneDisplay = "09.81.10.90.27";
const contactPhoneHref = "+33981109027";
const contactAddress = "4 Square de la Brie, Apt 25 — 77100 Meaux";
const volunteerMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("[Site AFIA] Bénévolat")}`;

const subjectOptions = [
  "Demande d’information",
  "Inscription activité",
  "Partenariat",
  "Autre",
];

const reasons = [
  {
    icon: UsersThree,
    title: "Inscrire un enfant",
    desc: "Aide aux devoirs, activités éducatives et actions de quartier.",
  },
  {
    icon: HandHeart,
    title: "Devenir bénévole",
    desc: "Rejoindre l’équipe AFIA sur les actions locales et événements.",
  },
  {
    icon: Buildings,
    title: "Proposer un partenariat",
    desc: "Construire un projet commun avec une structure locale ou institutionnelle.",
  },
  {
    icon: Question,
    title: "Poser une question",
    desc: "Obtenir une réponse sur l’association, ses projets et ses activités.",
  },
];

const availability = [
  {
    icon: Clock,
    title: "Réponse sous 48h",
    desc: "Nous répondons aux demandes par email dans un délai indicatif de 48 heures ouvrées.",
  },
  {
    icon: CalendarBlank,
    title: "Permanences",
    desc: "Des temps de présence sont organisés régulièrement sur le quartier, selon le planning associatif.",
  },
  {
    icon: Phone,
    title: "Horaires d’appel",
    desc: "Téléphone disponible aux heures d’ouverture de l’association, en journée.",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjectOptions[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mailSubject = `[Site AFIA] ${subject} - ${name || "Contact"}`;
    const mailBody = [
      `Nom / Prénom : ${name}`,
      `Email : ${email}`,
      `Sujet : ${subject}`,
      "",
      "Message :",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <Badge variant="primary" className="mb-6">
              Contact
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-2xl leading-[1.05]">
              Un projet ? Une question ? Parlons-en.
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-text-secondary max-w-[58ch]">
              {
                "Que vous soyez habitant, partenaire ou futur bénévole, l’équipe AFIA est à votre écoute."
              }
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-muted">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Échange entre membres d'une équipe associative"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-primary-900/5 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Prise de contact */}
      <Section className="bg-surface-elevated">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <FadeIn className="lg:col-span-7">
            <div className="rounded-2xl border border-border-subtle bg-surface p-6 md:p-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tighter text-text-primary">
                Prise de contact rapide
              </h2>
              <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed max-w-[60ch]">
                Remplissez le formulaire ci-dessous pour nous envoyer votre demande.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                    className="mt-2 w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-text-primary">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    placeholder="vous@email.com"
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
                    className="mt-2 w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  >
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
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
                    className="mt-2 w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    placeholder="Décrivez votre demande"
                  />
                </div>

                <Button type="submit" size="lg">
                  Envoyer ma demande
                  <ArrowRight size={18} weight="bold" />
                </Button>
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-border-subtle bg-surface p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary">
                Infos directes
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-border-subtle bg-surface-elevated p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <EnvelopeSimple size={18} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                        Email
                      </p>
                      <p className="text-sm text-text-primary mt-1 break-all">{contactEmail}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border-subtle bg-surface-elevated p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Phone size={18} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                        Téléphone
                      </p>
                      <p className="text-sm text-text-primary mt-1">{contactPhoneDisplay}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border-subtle bg-surface-elevated p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} weight="duotone" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                        Adresse
                      </p>
                      <p className="text-sm text-text-primary mt-1">{contactAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={`tel:${contactPhoneHref}`}>
                  <Button variant="outline" className="w-full">
                    <Phone size={16} weight="duotone" />
                    Appeler
                  </Button>
                </a>
                <a href={`mailto:${contactEmail}`}>
                  <Button className="w-full">
                    <EnvelopeSimple size={16} weight="duotone" />
                    Envoyer un email
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Localisation */}
      <Section>
        <FadeIn className="mb-8">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Localisation
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Nous trouver
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border-subtle overflow-hidden bg-surface-elevated">
            <iframe
              title="Carte AFIA - 4 Square de la Brie, Meaux"
              src="https://www.google.com/maps?q=4+Square+de+la+Brie,+77100+Meaux&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </Section>

      {/* Pourquoi contacter */}
      <Section className="bg-surface-elevated">
        <FadeIn className="max-w-3xl mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Orientation
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Dans quel cas nous contacter ?
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6">
                <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <reason.icon size={20} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{reason.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Disponibilité */}
      <Section>
        <FadeIn className="max-w-3xl mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Disponibilité
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Nos délais et disponibilités
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {availability.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
                <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <item.icon size={20} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Bloc humain */}
      <Section className="pt-0">
        <FadeIn>
          <div className="rounded-3xl bg-primary-950 p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-primary-800/25 blur-3xl pointer-events-none" />
            <div className="relative max-w-3xl">
              <Badge className="bg-white/15 text-white border border-white/20 mb-5">
                Une équipe à votre écoute
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white leading-[1.1]">
                Une équipe engagée, proche des habitants
              </h2>
              <p className="mt-4 text-primary-100 leading-relaxed">
                {
                  "AFIA, c’est avant tout une équipe engagée, proche des habitants et disponible pour accompagner chaque demande."
                }
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <FadeIn>
          <div className="rounded-3xl border border-border-subtle bg-surface-elevated p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">Passer à l’action</p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary leading-[1.1]">
                Prêt à nous rejoindre ou à échanger ?
              </h2>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href={`mailto:${contactEmail}`}>
                <Button>
                  <ChatCircleDots size={18} weight="duotone" />
                  Nous écrire
                </Button>
              </a>
              <Link href="/adhesion">
                <Button variant="outline">
                  <UserFocus size={18} weight="duotone" />
                  Adhérer
                </Button>
              </Link>
              <a href={volunteerMailto}>
                <Button variant="ghost">
                  <HandHeart size={18} weight="duotone" />
                  Devenir bénévole
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
