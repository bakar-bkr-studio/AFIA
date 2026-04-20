"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

const benefits = [
  "Participer aux sorties et animations organisées par l\u2019association à tarif préférentiel",
  "Voter lors des Assemblées Générales et prendre part aux décisions",
  "Être informé en priorité de nos événements, activités et projets",
  "Contribuer au lien social et à la vie du quartier de Beauval",
  "Soutenir les actions éducatives, citoyennes et culturelles de l\u2019AFIA",
];

export function Adhesion() {
  return (
    <>
      <Section className="pt-32 md:pt-40 pb-16">
        <FadeIn>
          <Badge className="mb-6">Nous soutenir</Badge>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-xl leading-none">
            Devenir Adhérent
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary max-w-[55ch]">
            {"Rejoignez l'AFIA et participez activement à la vie du quartier. Votre adhésion nous permet de financer nos sorties, animations et projets citoyens tout au long de l'année."}
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Benefits */}
          <FadeIn className="lg:col-span-7">
            <div className="rounded-2xl border border-border-subtle p-8 md:p-10">
              <h2 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-8">
                {"Pourquoi adhérer ?"}
              </h2>
              <StaggerContainer className="space-y-5">
                {benefits.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex gap-4">
                      <CheckCircle
                        size={22}
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
            <div className="rounded-2xl bg-primary-950 p-8 md:p-10 text-white h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-primary-300">
                  Cotisation annuelle
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold font-heading tracking-tighter">
                    {"22\u00a0€"}
                  </span>
                  <span className="text-sm text-primary-300">/ an</span>
                </div>
                <p className="mt-6 text-sm text-primary-200 leading-relaxed">
                  {"Le paiement en ligne via Hello Asso sera bientôt disponible. En attendant, contactez-nous directement."}
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full bg-white text-primary-950 hover:bg-zinc-100 border-none"
                  >
                    {"Nous contacter pour adhérer"}
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
