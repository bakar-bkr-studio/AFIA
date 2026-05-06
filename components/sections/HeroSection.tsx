"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="grain relative overflow-hidden bg-paper-warm py-32 md:py-44 text-center">
      {/* Blobs décoratifs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary-100 blur-[60px] opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-accent-100 blur-[60px] opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
        >
          <span className="eyebrow text-accent mb-8">
            Association loi 1901 · Meaux · depuis 2010
          </span>

          <h1 className="font-heading font-black text-[clamp(48px,7.5vw,96px)] leading-[1.0] tracking-[-0.025em] text-primary-800 max-w-4xl mx-auto mt-6">
            Créer du lien.
            <br />
            Partager.
            <br />
            <span className="text-accent">Construire ensemble.</span>
          </h1>

          <p className="mt-8 text-[clamp(16px,1.4vw,21px)] leading-relaxed text-text-secondary max-w-[680px] mx-auto">
            AFIA rassemble les familles du quartier de Beauval, à Meaux.
            Sorties, ateliers, accompagnement scolaire, repas citoyens —
            depuis quinze ans, nous tissons les liens qui font tenir un
            quartier debout.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Link
              href="/activites"
              className="inline-flex items-center gap-2 px-8 py-[18px] bg-primary-700 hover:bg-primary-800 text-white font-heading font-bold text-[15px] rounded-full transition-colors duration-200 shadow-[0_4px_0_rgba(42,15,62,0.3)]"
            >
              Découvrir nos activités
              <ArrowRight size={18} weight="bold" />
            </Link>
            <Link
              href="/adhesion"
              className="inline-flex items-center gap-2 px-8 py-[18px] bg-transparent hover:bg-primary-50 text-primary-700 font-heading font-bold text-[15px] rounded-full ring-2 ring-primary-700 transition-colors duration-200"
            >
              Nous soutenir
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
