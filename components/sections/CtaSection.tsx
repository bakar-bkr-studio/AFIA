"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { ArrowRight, HandHeart, EnvelopeSimple } from "@phosphor-icons/react";

export function CtaSection() {
  return (
    <Section className="bg-surface">
      <FadeIn>
        <div className="rounded-3xl bg-primary-950 p-12 md:p-20 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-800/30 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-start lg:items-center lg:text-center gap-8">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-white mb-5 leading-[1.1]">
                {"Envie de faire partie de l'aventure ?"}
              </h2>
              <p className="text-base md:text-lg text-primary-200 leading-relaxed max-w-[55ch] lg:mx-auto">
                {"Adhérez, donnez de votre temps ou simplement posez vos questions. L'AFIA se construit avec ses habitants."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:justify-center">
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
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent"
                >
                  <HandHeart size={18} weight="duotone" />
                  Devenir bénévole
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  <EnvelopeSimple size={18} weight="duotone" />
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
