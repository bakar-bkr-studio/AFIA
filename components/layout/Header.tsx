"use client";

import Link from "next/link";
import {
  CalendarBlank,
  CaretDown,
  FacebookLogo,
  GameController,
  HandHeart,
  InstagramLogo,
  List,
  Phone,
  SnapchatLogo,
  TiktokLogo,
  UsersThree,
  X,
} from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LIBELLE_BOUTON_ADHESION } from "@/lib/adhesion";
import { reseaux } from "@/lib/actualites";
import * as React from "react";
import { createPortal } from "react-dom";

const polesItems = [
  { name: "Pôle ludique", href: "/pole-ludique", desc: "Sorties, fêtes et ateliers", icon: GameController, accent: true },
  { name: "Pôle sociétal", href: "/pole-societal", desc: "Aide aux devoirs, forums, prévention", icon: HandHeart },
  { name: "Pôle jeunesse", href: "/pole-jeunesse", desc: "Projets et activités des jeunes", icon: UsersThree },
];

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "L'association", href: "/association" },
  { name: "Nos pôles", href: "#", children: polesItems },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

const reseauIcons = {
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  TikTok: TiktokLogo,
  Snapchat: SnapchatLogo,
};

function Logo({ compact }: { compact: boolean }) {
  return (
    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" aria-label="AFIA, retour à l'accueil">
      <div
        className={cn(
          "relative shrink-0 transition-all duration-300",
          compact ? "h-11 w-[29px]" : "h-[46px] w-[30px] lg:h-14 lg:w-[37px]"
        )}
      >
        <Image
          src="/images/logo-emblem.webp"
          alt="Logo AFIA"
          fill
          className="object-contain"
          sizes="40px"
          priority
        />
      </div>
      <div className="leading-tight border-l border-primary/20 pl-3">
        <p className="font-heading font-black text-lg lg:text-xl tracking-[-0.01em] text-primary-800">
          AFIA
        </p>
        <p className="text-[12px] lg:text-[13px] font-medium text-text-secondary">
          Association Familles d’Ici et d’Ailleurs
        </p>
      </div>
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [polesOpen, setPolesOpen] = React.useState(false);
  const [mobilePolesOpen, setMobilePolesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const polesRef = React.useRef<HTMLDivElement>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedByHover = React.useRef(false);

  // Le menu mobile est rendu dans <body> : le flou de la barre (backdrop-filter)
  // emprisonnerait sinon ses éléments « fixed » dans la hauteur de la barre.
  React.useEffect(() => setMounted(true), []);

  // Barre affinée au défilement
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu des pôles : clic extérieur ou touche Échap
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (polesRef.current && !polesRef.current.contains(e.target as Node)) {
        setPolesOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setPolesOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Bloquer le défilement de la page derrière le menu mobile
  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function openPoles(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openedByHover.current = true;
    setPolesOpen(true);
  }
  function closePolesSoon(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = setTimeout(() => {
      openedByHover.current = false;
      setPolesOpen(false);
    }, 150);
  }
  function togglePoles() {
    // Ouvert au survol : un clic le laisse ouvert. Sinon (tactile, clavier) : bascule.
    if (openedByHover.current && polesOpen) return;
    setPolesOpen(!polesOpen);
  }

  const isPolesActive = polesItems.some((p) => pathname === p.href);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-shadow duration-300",
        scrolled && "shadow-[0_4px_20px_rgba(58,24,84,0.08)]"
      )}
      style={{
        background: "rgba(250, 247, 245, 0.94)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(90, 42, 122, 0.08)",
      }}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-12 transition-all duration-300",
          scrolled ? "py-2" : "py-3 lg:py-4"
        )}
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Logo compact={scrolled} />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  ref={polesRef}
                  onPointerEnter={openPoles}
                  onPointerLeave={closePolesSoon}
                >
                  <button
                    type="button"
                    onClick={togglePoles}
                    aria-expanded={polesOpen}
                    aria-haspopup="true"
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer",
                      isPolesActive
                        ? "text-primary-700"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {item.name}
                    <CaretDown
                      size={13}
                      weight="bold"
                      className={cn(
                        "transition-transform duration-200",
                        polesOpen && "rotate-180"
                      )}
                    />
                    {isPolesActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[18px] h-[2px] rounded-full bg-accent" />
                    )}
                  </button>

                  <AnimatePresence>
                    {polesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                      >
                        <div className="w-80 rounded-2xl border border-border-subtle bg-surface-elevated shadow-lg p-2">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setPolesOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 rounded-xl px-3 py-3 transition-colors duration-150",
                                  isChildActive ? "bg-primary-50" : "hover:bg-surface-muted"
                                )}
                              >
                                <span
                                  className={cn(
                                    "h-10 w-10 rounded-xl flex items-center justify-center shrink-0",
                                    child.accent ? "bg-accent-100" : "bg-primary-50"
                                  )}
                                >
                                  <child.icon
                                    size={20}
                                    weight="duotone"
                                    className={child.accent ? "text-accent-700" : "text-primary-700"}
                                  />
                                </span>
                                <span>
                                  <span
                                    className={cn(
                                      "block text-sm font-semibold",
                                      isChildActive ? "text-primary-700" : "text-text-primary"
                                    )}
                                  >
                                    {child.name}
                                  </span>
                                  <span className="block text-xs text-text-muted mt-0.5">
                                    {child.desc}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary-700"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[18px] h-[2px] rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA orange */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/adhesion"
            className="inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-[14px] rounded-full transition-colors duration-200 shadow-[0_2px_0_rgba(212,84,30,0.4)]"
          >
            {LIBELLE_BOUTON_ADHESION}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <List size={26} weight="bold" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mounted && createPortal(
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary-950/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-surface-elevated shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
                <Logo compact />
                <button
                  type="button"
                  className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <X size={24} weight="bold" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-8 pt-4">
                <div className="space-y-1">
                  {navigation.map((item) => {
                    if (item.children) {
                      return (
                        <div key={item.name}>
                          <button
                            type="button"
                            onClick={() => setMobilePolesOpen(!mobilePolesOpen)}
                            aria-expanded={mobilePolesOpen}
                            className={cn(
                              "w-full flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors cursor-pointer",
                              isPolesActive
                                ? "text-primary-700 bg-primary-50"
                                : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                            )}
                          >
                            {item.name}
                            <CaretDown
                              size={16}
                              weight="bold"
                              className={cn(
                                "transition-transform duration-200",
                                mobilePolesOpen && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {mobilePolesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-2 space-y-1 mt-1">
                                  {item.children.map((child) => {
                                    const isChildActive = pathname === child.href;
                                    return (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                          "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors",
                                          isChildActive ? "bg-primary-50" : "hover:bg-surface-muted"
                                        )}
                                      >
                                        <child.icon
                                          size={20}
                                          weight="duotone"
                                          className={child.accent ? "text-accent-700" : "text-primary-700"}
                                        />
                                        <span>
                                          <span className={cn("block text-sm font-semibold", isChildActive ? "text-primary-700" : "text-text-primary")}>
                                            {child.name}
                                          </span>
                                          <span className="block text-xs text-text-muted">{child.desc}</span>
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "text-primary-700 bg-primary-50"
                            : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <Link
                    href="/adhesion"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-4 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-base rounded-full transition-colors duration-200"
                  >
                    {LIBELLE_BOUTON_ADHESION}
                  </Link>
                </div>

                {/* Contact rapide */}
                <div className="mt-8 rounded-2xl bg-primary-50 p-5 space-y-3">
                  <a href="tel:+33981109027" className="flex items-center gap-3 font-semibold text-text-primary">
                    <Phone size={20} weight="duotone" className="text-primary-700" />
                    09.81.10.90.27
                  </a>
                  <p className="flex items-start gap-3 text-sm text-text-secondary">
                    <CalendarBlank size={20} weight="duotone" className="text-primary-700 shrink-0" />
                    <span>
                      <span className="font-semibold text-text-primary">Permanence</span>
                      <br />
                      Un mercredi sur deux, 17h30 – 19h
                    </span>
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    {reseaux.map((r) => {
                      const Icon = reseauIcons[r.label];
                      return (
                        <a
                          key={r.label}
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={r.label}
                          className="h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-primary-700 hover:text-primary transition-colors"
                        >
                          <Icon size={20} weight="duotone" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
      )}
    </header>
  );
}
