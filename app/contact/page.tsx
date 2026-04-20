import type { Metadata } from "next";
import { Contact } from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l’association AFIA à Meaux : formulaire, téléphone, email, adresse et accès direct à l’équipe.",
};

export default function ContactPage() {
  return <Contact />;
}
