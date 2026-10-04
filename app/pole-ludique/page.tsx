import type { Metadata } from "next";
import { PoleLudique } from "@/components/pages/PoleLudique";

export const metadata: Metadata = {
  title: "Pôle Ludique",
  description:
    "Sorties familles, fêtes de quartier, jeux et ateliers créatifs : le pôle ludique d'AFIA anime la vie du quartier de Beauval à Meaux.",
};

export default function PoleLudiquePage() {
  return <PoleLudique />;
}
