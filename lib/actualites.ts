import data from "@/data/actualites.json";

export type Actu = {
  category: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

type ActuData = Actu & { id: string; publie: boolean };

// Seules les actualités avec "publie": true apparaissent sur le site.
// Pour modifier les actualités, éditer data/actualites.json (voir CONSIGNES_ACTUALITES.md).
const visibles = (liste: ActuData[]): Actu[] =>
  liste
    .filter((a) => a.publie)
    .map(({ category, title, date, excerpt, image }) => ({
      category,
      title,
      date,
      excerpt,
      image,
    }));

export const actusAfia: Actu[] = visibles(data.afia as ActuData[]);
export const actusMeaux: Actu[] = visibles(data.meaux as ActuData[]);
