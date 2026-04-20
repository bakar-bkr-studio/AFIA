import type { Metadata } from "next";
import { Projets } from "@/components/pages/Projets";

export const metadata: Metadata = {
  title: "Nos Projets",
  description:
    "Découvrez les projets AFIA à Meaux : repas solidaire, forums santé et justice, quartiers d’été et actions locales.",
};

export default function ProjetsPage() {
  return <Projets />;
}
