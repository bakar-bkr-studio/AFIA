import type { Metadata } from "next";
import { PoleJeunesse } from "@/components/pages/PoleJeunesse";

export const metadata: Metadata = {
  title: "Pôle Jeunesse",
  description:
    "Maraudes, actions solidaires, sorties culturelles et projets citoyens : le pôle jeunesse d'AFIA permet aux jeunes de Meaux de devenir acteurs du changement.",
};

export default function PoleJeunessePage() {
  return <PoleJeunesse />;
}
