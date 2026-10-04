import data from "@/data/actualites.json";

export type Pole = "ludique" | "societal" | "jeunesse";
export type Statut = "a_venir" | "en_cours" | "termine" | "permanent" | "a_verifier";

export type Actu = {
  id: string;
  category: string;
  title: string;
  date: string;
  dateIso: string | null;
  heure: string | null;
  lieu: string | null;
  pole: Pole | null;
  excerpt: string;
  image: string;
  statut: Statut;
};

type ActuData = {
  id: string;
  category: string;
  title: string;
  date: string;
  date_iso: string | null;
  heure: string | null;
  lieu: string | null;
  pole: string | null;
  excerpt: string;
  image: string;
  statut: string;
  publie: boolean;
};

// L'onglet « Ville de Meaux » affiche un message « bientôt disponible » tant que
// ce réglage est à false (en attendant le branchement avec la boîte mail).
export const MEAUX_DISPONIBLE = false;

export const poles: Record<Pole, { label: string; href: string }> = {
  ludique: { label: "Pôle ludique", href: "/pole-ludique" },
  societal: { label: "Pôle sociétal", href: "/pole-societal" },
  jeunesse: { label: "Pôle jeunesse", href: "/pole-jeunesse" },
};

const isUpcoming = (a: Actu) => a.statut === "a_venir" || a.statut === "en_cours";

// À venir / en cours d'abord (le plus proche en premier), puis le reste du plus
// récent au plus ancien. Les actualités sans date_iso gardent l'ordre du fichier.
function sortActus(liste: Actu[]): Actu[] {
  return liste
    .map((a, i) => ({ a, i }))
    .sort((x, y) => {
      const ux = isUpcoming(x.a), uy = isUpcoming(y.a);
      if (ux !== uy) return ux ? -1 : 1;
      if (x.a.dateIso && y.a.dateIso && x.a.dateIso !== y.a.dateIso) {
        return ux
          ? x.a.dateIso.localeCompare(y.a.dateIso)
          : y.a.dateIso.localeCompare(x.a.dateIso);
      }
      return x.i - y.i;
    })
    .map(({ a }) => a);
}

// Seules les actualités avec "publie": true apparaissent sur le site.
// Pour modifier les actualités, éditer data/actualites.json (voir CONSIGNES_ACTUALITES.md).
const visibles = (liste: ActuData[]): Actu[] =>
  sortActus(
    liste
      .filter((a) => a.publie)
      .map((a) => ({
        id: a.id,
        category: a.category,
        title: a.title,
        date: a.date,
        dateIso: a.date_iso,
        heure: a.heure,
        lieu: a.lieu,
        pole: (a.pole as Pole | null) ?? null,
        excerpt: a.excerpt,
        image: a.image,
        statut: a.statut as Statut,
      }))
  );

export const actusAfia: Actu[] = visibles(data.afia as ActuData[]);
export const actusMeaux: Actu[] = visibles(data.meaux as ActuData[]);

export const actusAVenir = actusAfia.filter(isUpcoming);
export const actusPassees = actusAfia.filter((a) => !isUpcoming(a));

export function getActu(id: string): Actu | undefined {
  return actusAfia.find((a) => a.id === id);
}

// « 2026-08-18 » → « Août 2026 »
export function moisLabel(a: Actu): string {
  if (!a.dateIso) return "Plus tôt";
  const label = new Date(`${a.dateIso}T12:00:00`).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export const reseaux = [
  { label: "Facebook", href: "https://www.facebook.com/afia.association" },
  { label: "Instagram", href: "https://www.instagram.com/afia.association" },
  { label: "TikTok", href: "https://www.tiktok.com/@afia.association" },
  { label: "Snapchat", href: "https://www.snapchat.com/add/afia.asso" },
] as const;
