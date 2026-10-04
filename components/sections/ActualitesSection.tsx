"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDots } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";
import { actusAfia, actusMeaux, MEAUX_DISPONIBLE } from "@/lib/actualites";
import { MeauxBientot } from "@/components/actualites/MeauxBientot";

export function ActualitesSection() {
  const [tab, setTab] = React.useState<"afia" | "meaux">("afia");
  const [activeIdx, setActiveIdx] = React.useState(0);
  const showBientot = tab === "meaux" && !MEAUX_DISPONIBLE;
  const items = (tab === "afia" ? actusAfia : actusMeaux).slice(0, 4);
  const featured = items[activeIdx] ?? items[0];

  function selectTab(next: "afia" | "meaux") {
    setTab(next);
    setActiveIdx(0);
  }

  if (!featured) return null;

  return (
    <Section className="py-16 md:py-24">
      <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Le fil d&apos;actu
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            {"Actualités du moment"}
          </h2>
          <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[55ch]">
            {"Ce qui se passe à AFIA et dans la Ville de Meaux. Un fil pour rester informé, utile même si vous n'êtes pas encore adhérent."}
          </p>
        </div>

        <div className="inline-flex items-center gap-1 p-1 rounded-full border border-border-subtle bg-surface-elevated self-start md:self-auto">
          <button
            type="button"
            onClick={() => selectTab("afia")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              tab === "afia"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Actualités AFIA
          </button>
          <button
            type="button"
            onClick={() => selectTab("meaux")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              tab === "meaux"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Ville de Meaux
          </button>
        </div>
      </FadeIn>

      {showBientot ? (
        <FadeIn key="meaux-bientot">
          <MeauxBientot compact />
        </FadeIn>
      ) : (
      <div key={tab} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Actu mise en avant */}
        <FadeIn key={activeIdx} className="lg:col-span-7">
          <article className="block h-full rounded-2xl overflow-hidden border border-border-subtle bg-surface">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="primary">{featured.category}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <CalendarDots size={14} weight="duotone" />
                  {featured.date}
                </span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-3 max-w-[28ch]">
                {featured.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed max-w-[60ch] line-clamp-4">
                {featured.excerpt}
              </p>
              {tab === "afia" && (
                <Link
                  href={`/actualites/${featured.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
                >
                  Lire la suite
                  <ArrowRight size={14} weight="bold" />
                </Link>
              )}
            </div>
          </article>
        </FadeIn>

        {/* Liste cliquable */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {items.map((a, i) => {
            const isActive = i === activeIdx;
            return (
              <FadeIn key={a.id} delay={0.05 * (i + 1)}>
                <button
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex w-full gap-4 rounded-2xl border bg-surface p-4 text-left transition-all duration-300 cursor-pointer",
                    isActive
                      ? "border-primary ring-1 ring-primary/25 bg-primary-50/60"
                      : "border-border-subtle hover:border-primary-200 hover:bg-surface-elevated"
                  )}
                >
                  <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden bg-surface-muted">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-[10px] py-0.5 px-2">
                        {a.category}
                      </Badge>
                      <span className="text-[11px] text-text-muted">{a.date}</span>
                    </div>
                    <h4
                      className={cn(
                        "font-heading text-sm font-semibold tracking-tight leading-snug mb-1 line-clamp-2 transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-text-primary group-hover:text-primary"
                      )}
                    >
                      {a.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {a.excerpt}
                    </p>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>
      )}

      <div className="mt-10 flex justify-center">
        <Link href="/actualites">
          <Button variant="outline" size="lg">
            Voir toutes les actualités
            <ArrowRight size={18} weight="bold" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
