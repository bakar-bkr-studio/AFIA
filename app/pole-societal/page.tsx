import type { Metadata } from "next";
import { PoleSocietal } from "@/components/pages/PoleSocietal";

export const metadata: Metadata = {
  title: "Pôle Sociétal",
  description:
    "Aide aux devoirs, forums santé et justice, prévention des rixes et accompagnement des familles : le pôle sociétal d'AFIA agit au cœur du quartier de Beauval à Meaux.",
};

export default function PoleSocietalPage() {
  return <PoleSocietal />;
}
