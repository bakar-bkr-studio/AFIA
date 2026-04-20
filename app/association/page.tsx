import type { Metadata } from "next";
import { Association } from "@/components/pages/Association";

export const metadata: Metadata = {
  title: "L\u2019Association",
  description:
    "Découvrez l’histoire de l’AFIA, sa mission, ses valeurs, sa gouvernance et ses partenaires à Meaux.",
};

export default function AssociationPage() {
  return <Association />;
}
