import type { Metadata } from "next";
import { PoleLudique } from "@/components/pages/PoleLudique";

export const metadata: Metadata = {
  title: "Pôle Ludique",
  description:
    "Sorties, animations de quartier, ateliers créatifs et activités sportives : le pôle ludique d'AFIA anime la vie du quartier de Beauval à Meaux.",
};

export default function PoleLudiquePage() {
  return <PoleLudique />;
}
