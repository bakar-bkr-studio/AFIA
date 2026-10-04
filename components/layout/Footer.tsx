import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  CalendarBlank,
  EnvelopeSimple,
  MapPin,
  Phone,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  SnapchatLogo,
} from "@phosphor-icons/react/dist/ssr";
import { reseaux } from "@/lib/actualites";
import { partners } from "@/lib/partenaires";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "L'association", href: "/association" },
  { name: "Pôle ludique", href: "/pole-ludique" },
  { name: "Pôle sociétal", href: "/pole-societal" },
  { name: "Pôle jeunesse", href: "/pole-jeunesse" },
  { name: "Actualités", href: "/actualites" },
  { name: "Adhésion", href: "/adhesion" },
  { name: "Contact", href: "/contact" },
];

const reseauIcons = {
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  TikTok: TiktokLogo,
  Snapchat: SnapchatLogo,
};

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=4+Square+de+la+Brie,+77100+Meaux";

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[11px] font-heading font-bold tracking-[0.18em] uppercase mb-5 text-accent-300">
      {children}
    </h3>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="grain-light relative overflow-hidden text-white"
      style={{ background: "var(--color-primary-900)" }}
    >
      {/* Blobs décoratifs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* ── Avec le soutien de ── */}
        <div className="py-10 border-b border-white/15">
          <p className="text-[11px] font-heading font-bold tracking-[0.18em] uppercase text-white/70 text-center mb-6">
            Avec le soutien de
          </p>
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
            {partners.map((p) => (
              <li
                key={p.name}
                className="relative h-14 w-[120px] md:w-[136px] rounded-xl bg-white px-3 py-2"
                title={p.name}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="136px"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Colonnes ── */}
        <div className="py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Association */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative h-14 w-14">
                <Image
                  src="/images/logo-white.webp"
                  alt="Logo AFIA"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="font-heading font-black text-2xl leading-[1.15] tracking-[-0.01em] max-w-[18ch]">
              Créer du lien, partager,{" "}
              <span className="text-accent-300">construire ensemble.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-[38ch]">
              Association Familles d’Ici et d’Ailleurs, créée en 2010 au cœur
              du quartier Beauval, à Meaux.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {reseaux.map((r) => {
                const Icon = reseauIcons[r.label];
                return (
                  <a
                    key={r.label}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={r.label}
                    className="h-11 w-11 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white hover:text-primary-900 transition-colors duration-200"
                  >
                    <Icon size={20} weight="duotone" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Permanence (en 2e sur mobile) */}
          <div className="lg:col-span-3 lg:order-4">
            <ColumnTitle>Permanence</ColumnTitle>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
              <p className="flex items-start gap-3 font-semibold">
                <CalendarBlank size={20} weight="duotone" className="text-accent-300 shrink-0 mt-0.5" />
                <span>
                  Un mercredi sur deux
                  <br />
                  de 17h30 à 19h
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Pendant la réunion des adhérents : venez poser vos questions,
                sur place ou par téléphone.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-white transition-colors"
              >
                Nous contacter
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>

          {/* Nous trouver */}
          <div className="lg:col-span-3 lg:order-3">
            <ColumnTitle>Nous trouver</ColumnTitle>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/85 hover:text-white transition-colors"
                >
                  <MapPin size={18} weight="duotone" className="shrink-0 mt-0.5 text-accent-300" />
                  <span className="leading-relaxed">
                    4 Square de la Brie, Apt 25
                    <br />
                    77100 Meaux
                    <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent-300 group-hover:text-white">
                      Itinéraire
                      <ArrowRight size={12} weight="bold" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/85">
                <Bell size={18} weight="duotone" className="shrink-0 mt-0.5 text-accent-300" />
                <span className="leading-relaxed">Interphone au nom d’AFIA</span>
              </li>
              <li>
                <a
                  href="tel:+33981109027"
                  className="flex items-center gap-3 text-white/85 hover:text-white transition-colors"
                >
                  <Phone size={18} weight="duotone" className="shrink-0 text-accent-300" />
                  09.81.10.90.27
                </a>
              </li>
              <li>
                <a
                  href="mailto:famillesdicietdailleurs@gmail.com"
                  className="flex items-start gap-3 text-white/85 hover:text-white transition-colors break-all"
                >
                  <EnvelopeSimple size={18} weight="duotone" className="shrink-0 mt-0.5 text-accent-300" />
                  famillesdicietdailleurs@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Naviguer */}
          <div className="lg:col-span-2 lg:order-2">
            <ColumnTitle>Naviguer</ColumnTitle>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Barre du bas ── */}
        <div className="py-7 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/15 text-center md:text-left">
          <p className="text-xs text-white/70 leading-relaxed">
            © {year} Association Familles d’Ici et d’Ailleurs · Association loi
            1901 · RNA W771002607
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-white/70 hover:text-white transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-xs text-white/70 hover:text-white transition-colors duration-200">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
