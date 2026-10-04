"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";

const valeurs = ["Lien social", "Solidarité", "Citoyenneté", "Proximité", "Convivialité"];

export function AboutTeaser() {
  return (
    <Section className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <FadeIn className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted shadow-diffuse">
              <Image
                src="https://i.imgur.com/SqbljKJ.jpeg"
                alt="Familles et bénévoles d'AFIA réunis dans le quartier"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 right-4 sm:-right-6 rounded-2xl bg-accent text-white px-6 py-5 shadow-diffuse">
              <p className="font-heading font-black text-[40px] leading-none tracking-[-0.04em]">2010</p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-white/90">
                Création à Beauval
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-7">
          <span className="eyebrow text-primary-700 mb-4">Qui sommes-nous</span>
          <h2 className="mt-2 font-heading font-black text-[clamp(28px,3.5vw,48px)] tracking-[-0.025em] text-primary-950 leading-[1.05]">
            Une association née<br />
            <span className="text-primary">au pied des immeubles.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-[58ch]">
            <p>
              En 2010, Fouzia BELRAAM constate le manque d’animations et de
              lien entre les habitants du quartier de Beauval. Elle crée
              l’Association Familles d’Ici et d’Ailleurs pour offrir aux
              familles des moments de partage.
            </p>
            <p>
              Seize ans plus tard, AFIA s’organise autour de trois pôles et
              rassemble une trentaine de familles adhérentes, avec une équipe
              de bénévoles engagés.
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2">
            {valeurs.map((v) => (
              <li
                key={v}
                className="rounded-full border border-primary/15 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-800"
              >
                {v}
              </li>
            ))}
          </ul>

          <Link
            href="/association"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline underline-offset-4"
          >
            Découvrir notre histoire
            <ArrowRight size={16} weight="bold" />
          </Link>
        </FadeIn>
      </div>
    </Section>
  );
}
