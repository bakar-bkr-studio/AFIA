import type { Metadata } from "next";
import { Activites } from "@/components/pages/Activites";

export const metadata: Metadata = {
  title: "Nos Activit\u00e9s",
  description:
    "Découvrez les activités AFIA à Meaux : aide aux devoirs, animations de quartier, ateliers et calendrier des prochains rendez-vous.",
};

export default function ActivitesPage() {
  return <Activites />;
}
