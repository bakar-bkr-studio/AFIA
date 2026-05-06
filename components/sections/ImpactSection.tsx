"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "230",
    label: "Repas citoyens servis",
    sub: "Colisée de Meaux · 2 mars 2026",
  },
  {
    value: "60",
    label: "Jeunes accompagnés",
    sub: "Programme aide aux devoirs",
  },
  {
    value: "6",
    label: "Sorties familles",
    sub: "Avril → août 2026",
  },
  {
    value: "15",
    label: "Années de service",
    sub: "Depuis 2010 — Beauval, Meaux",
  },
];

export function ImpactSection() {
  return (
    <section className="grain-light relative bg-primary-700 py-14 md:py-18 overflow-hidden">
      {/* Blob décoratif */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 80, damping: 20 }}
              className={cn(
                "px-4 md:px-8 py-6 md:py-0",
                i > 0 && "md:border-l border-white/20",
                i >= 2 && "border-t md:border-t-0 border-white/20"
              )}
            >
              <div className="font-heading font-black text-[clamp(48px,4.5vw,72px)] text-white tracking-[-0.03em] leading-none">
                {stat.value}
              </div>
              <div className="eyebrow text-accent-300 mt-3">
                {stat.label}
              </div>
              <div className="font-mono text-[12px] text-white/65 mt-1 leading-snug">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
