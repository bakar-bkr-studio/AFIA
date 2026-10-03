"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { CalendarDots, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { actusAfia, actusMeaux, type Actu } from "@/lib/actualites";


export function Actualites() {
  const [tab, setTab] = React.useState<"afia" | "meaux">("afia");
  const [selected, setSelected] = React.useState<Actu | null>(null);
  const items = tab === "afia" ? actusAfia : actusMeaux;

  React.useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <Section className="pt-32 md:pt-40 pb-10">
        <FadeIn>
          <Badge variant="primary" className="mb-6">
            Actualités
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-3xl leading-none">
            Le fil d&apos;actu
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-secondary max-w-[60ch]">
            {"Retrouvez ici tout ce qui se passe à AFIA, mais aussi les infos utiles de la Ville de Meaux pour les familles du quartier."}
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="mb-10 inline-flex items-center gap-1 p-1 rounded-full border border-border-subtle bg-surface-elevated">
          <button
            type="button"
            onClick={() => setTab("afia")}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full transition-colors",
              tab === "afia"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Actualités AFIA
          </button>
          <button
            type="button"
            onClick={() => setTab("meaux")}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full transition-colors",
              tab === "meaux"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Ville de Meaux
          </button>
        </div>

        <StaggerContainer
          key={tab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((a) => (
            <StaggerItem key={a.title}>
              <button
                type="button"
                onClick={() => setSelected(a)}
                className="group h-full w-full text-left rounded-2xl overflow-hidden border border-border-subtle bg-surface hover:border-primary-200 hover:shadow-sm transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="primary">{a.category}</Badge>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <CalendarDots size={14} weight="duotone" />
                      {a.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {a.excerpt}
                  </p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Popup actualité */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-primary-950/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 672px) 640px, 100vw"
                />
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Fermer"
                  className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-text-primary shadow-md transition-colors"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="primary">{selected.category}</Badge>
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <CalendarDots size={14} weight="duotone" />
                    {selected.date}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-4">
                  {selected.title}
                </h2>
                <p className="text-base text-text-secondary leading-relaxed">
                  {selected.excerpt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
