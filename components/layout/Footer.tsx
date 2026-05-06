import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="grain-light relative overflow-hidden"
      style={{ background: "var(--color-primary-900)", color: "white" }}
    >
      {/* Blob décoratif */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo-white.png"
                  alt="Logo AFIA"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-[36ch]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Association loi 1901 — créée en 2010 à Meaux, quartier Beauval.
              Créer du lien, partager et construire ensemble au cœur du quartier.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { href: "https://www.instagram.com/afia.association", label: "Instagram", Icon: InstagramLogo },
                { href: "https://www.facebook.com/afia.association", label: "Facebook", Icon: FacebookLogo },
                { href: "https://www.tiktok.com/@afia.association", label: "TikTok", Icon: TiktokLogo },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Icon size={16} weight="duotone" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3
              className="text-[11px] font-heading font-bold tracking-[0.18em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Naviguer
            </h3>
            <ul className="space-y-3">
              {[
                { name: "L'Association", href: "/association" },
                { name: "Activités", href: "/activites" },
                { name: "Projets", href: "/projets" },
                { name: "Actualités", href: "/actualites" },
                { name: "Adhésion", href: "/adhesion" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3
              className="text-[11px] font-heading font-bold tracking-[0.18em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={17} weight="duotone" className="shrink-0 mt-0.5" style={{ color: "var(--color-accent-300)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  4 Square de la Brie, Apt 25
                  <br />
                  77100 Meaux
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} weight="duotone" className="shrink-0" style={{ color: "var(--color-accent-300)" }} />
                <a
                  href="tel:+33981109027"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  09.81.10.90.27
                </a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={17} weight="duotone" className="shrink-0 mt-0.5" style={{ color: "var(--color-accent-300)" }} />
                <a
                  href="mailto:famillesdicietdailleurs@gmail.com"
                  className="text-sm transition-colors duration-200 break-all"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  famillesdicietdailleurs@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Réunions */}
          <div className="md:col-span-2">
            <h3
              className="text-[11px] font-heading font-bold tracking-[0.18em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Réunions
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Tous les 15 jours
              <br />
              le mercredi
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          <p
            className="font-mono text-[11px]"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © {year} Association Familles {"d'Ici et d'Ailleurs"}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Statuts", "Mentions légales", "Confidentialité"].map((label) => (
              <Link
                key={label}
                href="#"
                className="font-mono text-[11px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
