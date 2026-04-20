import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  Clock,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10 rounded-xl overflow-hidden">
                <Image
                  src="/images/logo-afia.png"
                  alt="Logo AFIA"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-lg tracking-tight">
                AFIA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary max-w-[38ch]">
              {"Association Familles d'Ici et d'Ailleurs — créer du lien, partager et construire ensemble au cœur du quartier de Beauval, Meaux."}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/afia.association"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary-200 transition-colors"
              >
                <InstagramLogo size={18} weight="duotone" />
              </a>
              <a
                href="https://www.facebook.com/afia.association"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary-200 transition-colors"
              >
                <FacebookLogo size={18} weight="duotone" />
              </a>
              <a
                href="https://www.tiktok.com/@afia.association"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="h-9 w-9 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary-200 transition-colors"
              >
                <TiktokLogo size={18} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-medium tracking-widest uppercase text-text-muted mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "L\u2019Association", href: "/association" },
                { name: "Activités", href: "/activites" },
                { name: "Projets", href: "/projets" },
                { name: "Actualités", href: "/actualites" },
                { name: "Adhésion", href: "/adhesion" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-medium tracking-widest uppercase text-text-muted mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  weight="duotone"
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-sm text-text-secondary leading-relaxed">
                  4 Square de la Brie, Apt 25
                  <br />
                  77100 Meaux
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  weight="duotone"
                  className="text-primary shrink-0"
                />
                <a
                  href="tel:+33981109027"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  09.81.10.90.27
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple
                  size={18}
                  weight="duotone"
                  className="text-primary shrink-0"
                />
                <a
                  href="mailto:famillesdicietdailleurs@gmail.com"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 break-all"
                >
                  famillesdicietdailleurs@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-medium tracking-widest uppercase text-text-muted mb-6">
              Réunions
            </h3>
            <div className="flex items-start gap-3">
              <Clock
                size={18}
                weight="duotone"
                className="text-primary mt-0.5 shrink-0"
              />
              <div className="text-sm text-text-secondary leading-relaxed">
                Tous les 15 jours
                <br />
                le mercredi
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            {"© "}{year}{" Association Familles d'Ici et d'Ailleurs. Tous droits réservés."}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              Statuts
            </Link>
            <Link
              href="#"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
