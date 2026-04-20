import type { Metadata } from "next";
import { Adhesion } from "@/components/pages/Adhesion";

export const metadata: Metadata = {
  title: "Adh\u00e9sion",
  description: "Rejoignez l\u2019association AFIA en devenant adh\u00e9rent.",
};

export default function AdhesionPage() {
  return <Adhesion />;
}
