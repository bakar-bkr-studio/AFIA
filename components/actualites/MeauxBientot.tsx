import { Buildings, Hourglass } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

/* Message affiché dans l'onglet « Ville de Meaux » tant que le fil n'est pas branché. */
export function MeauxBientot({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-dashed border-primary/25 bg-primary-50/50 text-center",
        compact ? "px-6 py-12" : "px-6 py-16 md:py-24"
      )}
    >
      <div className="mx-auto h-16 w-16 rounded-2xl bg-surface-elevated border border-border-subtle flex items-center justify-center shadow-diffuse">
        <Buildings size={30} weight="duotone" className="text-primary-700" />
      </div>
      <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-800 text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5">
        <Hourglass size={14} weight="duotone" />
        Bientôt disponible
      </span>
      <h3 className="mt-4 font-heading font-black text-2xl md:text-3xl tracking-[-0.02em] text-primary-950">
        Les infos de la Ville arrivent bientôt
      </h3>
      <p className="mt-4 mx-auto max-w-[52ch] text-base text-text-secondary leading-relaxed">
        Nous mettons en place un fil d’informations utiles de la Ville de
        Meaux pour les familles du quartier : dispositifs, animations, culture.
        Revenez prochainement !
      </p>
    </div>
  );
}
