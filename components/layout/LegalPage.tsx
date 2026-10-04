import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

/* Gabarit commun des pages légales (mentions légales, confidentialité). */
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative pt-14 md:pt-20 pb-12 md:pb-16 overflow-hidden bg-paper-warm">
        <div className="grain-light absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-[860px] px-6 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} weight="bold" />
            Retour à l’accueil
          </Link>
          <span className="eyebrow text-primary-700 mt-8 mb-4 block">{eyebrow}</span>
          <h1 className="font-heading font-black text-[clamp(36px,5vw,60px)] leading-[1] tracking-[-0.03em] text-primary-950">
            {title}
          </h1>
          <p className="mt-5 text-sm text-text-muted">Dernière mise à jour : {updated}</p>
        </div>
      </section>
      <div className="mx-auto max-w-[860px] px-6 sm:px-8 py-14 md:py-20 space-y-12">
        {children}
      </div>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading font-bold text-xl md:text-2xl tracking-tight text-primary-950 mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-base leading-relaxed text-text-secondary [&_strong]:text-text-primary [&_a]:text-primary [&_a]:font-semibold [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
