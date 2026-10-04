import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActualiteDetail } from "@/components/pages/ActualiteDetail";
import { actusAfia, getActu } from "@/lib/actualites";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return actusAfia.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const actu = getActu((await params).id);
  if (!actu) return {};
  return {
    title: actu.title,
    description: actu.excerpt,
    openGraph: {
      title: actu.title,
      description: actu.excerpt,
      images: [actu.image],
    },
  };
}

export default async function ActualiteDetailPage({ params }: Props) {
  const actu = getActu((await params).id);
  if (!actu) notFound();
  return <ActualiteDetail actu={actu} />;
}
