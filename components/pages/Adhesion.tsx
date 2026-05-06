"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { ArrowRight, CheckCircle, EnvelopeSimple, Info } from "@phosphor-icons/react";

const benefits = [
  "Participer aux sorties et animations organisées par l'association à tarif préférentiel",
  "Voter lors des Assemblées Générales et prendre part aux décisions",
  "Être informé en priorité de nos événements, activités et projets",
  "Contribuer au lien social et à la vie du quartier de Beauval",
  "Soutenir les actions éducatives, citoyennes et culturelles de l'AFIA",
];

export function Adhesion() {
  return (
    <Section className="pt-32 md:pt-40 pb-20 md:pb-28">
      {/* Hero */}
      <FadeIn className="mb-12">
        <Badge className="mb-6">Nous soutenir</Badge>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-xl leading-none">
          Devenir Adhérent
        </h1>
        <p className="mt-6 text-base leading-relaxed text-text-secondary max-w-[55ch]">
          Rejoignez AFIA et participez activement à la vie du quartier. L&apos;adhésion est valable pour l&apos;ensemble du foyer et nous permet de financer nos sorties, animations et projets citoyens tout au long de l&apos;année.
        </p>
      </FadeIn>

      {/* Benefits + Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Benefits */}
        <FadeIn className="lg:col-span-7">
          <div className="rounded-2xl border border-border-subtle p-7 md:p-9 h-full">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-6">
              Pourquoi adhérer ?
            </h2>
            <StaggerContainer className="space-y-4">
              {benefits.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex gap-4">
                    <CheckCircle
                      size={20}
                      weight="duotone"
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Pricing card */}
        <FadeIn delay={0.15} className="lg:col-span-5">
          <div className="rounded-2xl bg-primary-950 p-7 md:p-9 text-white h-full flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-primary-300">
                Cotisation annuelle — foyer
              </span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold font-heading tracking-tighter">
                  22 €
                </span>
                <span className="text-sm text-primary-300">/ an</span>
              </div>
              <p className="mt-4 text-sm text-primary-200 leading-relaxed">
                L&apos;adhésion couvre l&apos;ensemble des membres du foyer pour une année complète.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <a href="#adhesion-widget">
                <Button
                  size="lg"
                  className="w-full bg-white text-primary-950 hover:bg-zinc-100 border-none"
                >
                  Adhérer en ligne
                  <ArrowRight size={18} weight="bold" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full text-primary-100 hover:bg-white/10 hover:text-white"
                >
                  <EnvelopeSimple size={18} weight="duotone" />
                  Régler autrement — nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Document notice */}
      <FadeIn>
        <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 md:p-7 flex gap-4">
          <Info size={20} weight="duotone" className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-text-primary mb-1">
              Validation de l&apos;adhésion
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Votre adhésion sera définitivement validée une fois que vous nous aurez fait parvenir les pièces suivantes pour{" "}
              <strong className="text-text-primary">chaque membre du foyer</strong> :
            </p>
            <ul className="mt-2.5 space-y-1.5">
              <li className="flex gap-2 items-start text-sm text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                Un justificatif de domicile récent (moins de 3 mois)
              </li>
              <li className="flex gap-2 items-start text-sm text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                La pièce d&apos;identité de chaque membre du foyer
              </li>
            </ul>
            <p className="mt-2.5 text-sm text-text-secondary">
              Ces documents peuvent être transmis par e-mail ou déposés directement auprès de l&apos;association.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* HelloAsso full widget */}
      <FadeIn delay={0.1} className="mt-10" id="adhesion-widget">
        <div className="mb-7">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Paiement en ligne
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Adhérer directement depuis le site
          </h2>
          <p className="mt-3 text-base text-text-secondary leading-relaxed max-w-[58ch]">
            Remplissez le formulaire ci-dessous pour finaliser votre adhésion 2026 en toute sécurité via HelloAsso.
          </p>
        </div>
        <div className="rounded-2xl border border-border-subtle overflow-hidden">
          <iframe
            id="haWidget"
            scrolling="auto"
            src="https://www.helloasso.com/associations/association-familles-d-ici-et-d-ailleurs-afia/adhesions/adhesion-2026/widget"
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
  );
}
