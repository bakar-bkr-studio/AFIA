"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44 text-center">
      {/* Image de fond */}
      <Image
        src="https://i.imgur.com/SqbljKJ.jpeg"
        alt="Bénévoles d'AFIA mobilisés lors d'une action de quartier"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Voile sombre pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-950/78 to-primary-950/92" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
        >
          <span className="eyebrow text-accent-300 mb-8">
            Association loi 1901 · Meaux · depuis 2010
          </span>

          <h1 className="font-heading font-black text-[clamp(48px,7.5vw,96px)] leading-[1.0] tracking-[-0.025em] text-white max-w-4xl mx-auto mt-6">
            Créer du lien.
            <br />
            Partager.
            <br />
            <span className="text-accent-300">Construire ensemble.</span>
          </h1>

          <p className="mt-8 text-[clamp(16px,1.4vw,21px)] leading-relaxed text-primary-100 max-w-[680px] mx-auto">
            AFIA rassemble les familles du quartier de Beauval, à Meaux.
            Sorties, aide aux devoirs, fêtes de quartier, repas solidaires :
            depuis 2010, nous tissons les liens qui font tenir un quartier
            debout.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Link
              href="#poles"
              className="inline-flex items-center gap-2 px-8 py-[18px] bg-white hover:bg-primary-50 text-primary-800 font-heading font-bold text-[15px] rounded-full transition-colors duration-200 shadow-lg"
            >
              Découvrir nos actions
              <ArrowRight size={18} weight="bold" />
            </Link>
            <Link
              href="/adhesion"
              className="inline-flex items-center gap-2 px-8 py-[18px] bg-transparent hover:bg-white/10 text-white font-heading font-bold text-[15px] rounded-full ring-2 ring-white/50 hover:ring-white/70 transition-colors duration-200"
            >
              Nous soutenir
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
