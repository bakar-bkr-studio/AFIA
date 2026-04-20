import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="min-h-[70dvh] flex flex-col justify-center">
      <Section>
        <div className="max-w-md">
          <div className="h-16 w-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8">
            <WarningCircle size={32} weight="duotone" className="text-primary" />
          </div>
          <h1 className="font-heading text-5xl font-bold tracking-tighter text-text-primary mb-3">
            404
          </h1>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Page introuvable
          </h2>
          <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-[45ch]">
            {"Désolé, la page que vous recherchez n'existe pas ou a été déplacée."}
          </p>
          <Link href="/">
            <Button size="lg">{"Retour à l'accueil"}</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
