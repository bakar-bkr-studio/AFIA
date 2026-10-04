import type { Metadata } from "next";
import { Actualites } from "@/components/pages/Actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Les prochains rendez-vous d'AFIA, le récit de nos sorties et événements à Beauval, Meaux.",
};

export default function ActualitesPage() {
  return <Actualites />;
}
