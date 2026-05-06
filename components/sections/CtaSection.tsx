"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";
import { ArrowRight, HandHeart, EnvelopeSimple } from "@phosphor-icons/react";

export function CtaSection() {
  return (
    <Section className="bg-surface">
      <FadeIn>
        <div className="grain-light relative rounded-3xl overflow-hidden bg-primary-900 p-12 md:p-20">
          {/* Blobs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-start lg:items-center lg:text-center gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow text-accent-300 mb-4 block">
                Passer à l&apos;action
              </span>
              <h2 className="font-heading font-black text-3xl md:text-[52px] tracking-[-0.025em] text-white leading-[1.05]">
                Envie de faire partie
                <br />
                de l&apos;aventure&nbsp;?
              </h2>
              <p className="mt-5 text-base md:text-lg text-primary-200 leading-relaxed max-w-[55ch] lg:mx-auto">
                Adhérez, donnez de votre temps ou simplement posez vos
                questions. AFIA se construit avec ses habitants.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:justify-center">
              <Link
                href="/adhesion"
                className="inline-flex items-center gap-2 px-8 py-[16px] bg-accent hover:bg-accent-hover text-white font-heading font-bold text-[15px] rounded-full transition-colors duration-200 shadow-[0_3px_0_rgba(212,84,30,0.5)]"
              >
                Adhérer · 22 €
                <ArrowRight size={17} weight="bold" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-[16px] bg-transparent hover:bg-white/10 text-white font-heading font-bold text-[15px] rounded-full ring-2 ring-white/30 hover:ring-white/50 transition-all duration-200"
              >
                <HandHeart size={17} weight="duotone" />
                Devenir bénévole
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-[16px] bg-transparent hover:bg-white/10 text-white/80 hover:text-white font-heading font-bold text-[15px] rounded-full transition-all duration-200"
              >
                <EnvelopeSimple size={17} weight="duotone" />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
