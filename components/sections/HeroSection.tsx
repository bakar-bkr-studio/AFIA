"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-surface">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
            className="max-w-xl"
          >
            <Badge variant="primary" className="mb-6 inline-flex items-center gap-1.5">
              <MapPin size={12} weight="fill" />
              Association locale à Meaux depuis 2010
            </Badge>

            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-text-primary mb-6">
              Créer du lien
              <br />
              entre les familles,
              <br />
              <span className="text-primary">ici et ailleurs</span>
            </h1>

            <p className="text-base text-text-secondary leading-relaxed max-w-[50ch] mb-10">
              {"Sorties, aide aux devoirs, forums, repas solidaires\u2026 L'AFIA anime le quartier de Beauval toute l'année pour rassembler, partager et construire ensemble."}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/adhesion">
                <Button size="lg">
                  {"Rejoindre l'association"}
                  <ArrowRight size={18} weight="bold" />
                </Button>
              </Link>
              <Link href="/activites">
                <Button variant="ghost" size="lg">
                  Découvrir nos actions
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-primary-100/30">
              <Image
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
                alt="Famille réunie pour un moment convivial"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 100, damping: 20 }}
                  className="glass rounded-2xl p-4 bg-white/80"
                >
                  <p className="text-2xl font-bold font-heading text-text-primary">60+</p>
                  <p className="text-xs text-text-secondary mt-1">Participants par sortie</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, type: "spring", stiffness: 100, damping: 20 }}
                  className="glass rounded-2xl p-4 bg-white/80"
                >
                  <p className="text-2xl font-bold font-heading text-text-primary">15+</p>
                  <p className="text-xs text-text-secondary mt-1">Événements par an</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
