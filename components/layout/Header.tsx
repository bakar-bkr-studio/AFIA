"use client";

import Link from "next/link";
import { List, X, CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import * as React from "react";

const polesItems = [
  { name: "Pôle ludique", href: "/pole-ludique" },
  { name: "Pôle sociétal", href: "/pole-societal" },
  { name: "Pôle jeunesse", href: "/pole-jeunesse" },
];

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "L'Association", href: "/association" },
  { name: "Nos pôles", href: "#", children: polesItems },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [polesOpen, setPolesOpen] = React.useState(false);
  const [mobilePolesOpen, setMobilePolesOpen] = React.useState(false);
  const pathname = usePathname();
  const polesRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (polesRef.current && !polesRef.current.contains(e.target as Node)) {
        setPolesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isPolesActive = polesItems.some((p) => pathname === p.href);

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: "rgba(250, 247, 245, 0.94)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(90, 42, 122, 0.08)",
      }}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden">
              <Image
                src="/images/logo-violet-mono.webp"
                alt="Logo AFIA"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div
              style={{
                borderLeft: "1px solid rgba(90, 42, 122, 0.2)",
                paddingLeft: 12,
                fontFamily: "var(--font-open-sans)",
                fontSize: 12,
                lineHeight: 1.3,
                color: "var(--color-text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              Association Familles
              <br />
              {"d'Ici et d'Ailleurs"}
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <div key={item.name} className="relative" ref={polesRef}>
                  <button
                    type="button"
                    onClick={() => setPolesOpen(!polesOpen)}
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
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-52 rounded-xl border border-border-subtle bg-surface-elevated shadow-lg py-2 z-50"
                      >
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setPolesOpen(false)}
                              className={cn(
                                "block px-4 py-2.5 text-sm font-medium transition-colors duration-150",
                                isChildActive
                                  ? "text-primary-700 bg-primary-50"
                                  : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                              )}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
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
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary-700"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.name}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[18px] h-[2px] rounded-full bg-accent"
                  />
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
            Adhérer · 22 €
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <List size={24} weight="bold" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
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
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-surface-elevated shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 rounded-lg overflow-hidden">
                    <Image
                      src="/images/logo-violet-mono.webp"
                      alt="Logo AFIA"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-heading font-bold text-base tracking-tight text-primary-700">
                    AFIA
                  </span>
                </div>
                <button
                  type="button"
                  className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <X size={24} weight="bold" />
                </button>
              </div>
              <div className="px-6 pb-8 pt-4">
                <div className="space-y-1">
                  {navigation.map((item) => {
                    if (item.children) {
                      return (
                        <div key={item.name}>
                          <button
                            type="button"
                            onClick={() => setMobilePolesOpen(!mobilePolesOpen)}
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
                                <div className="pl-4 space-y-1 mt-1">
                                  {item.children.map((child) => {
                                    const isChildActive = pathname === child.href;
                                    return (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                          "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                                          isChildActive
                                            ? "text-primary-700 bg-primary-50"
                                            : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                                        )}
                                      >
                                        {child.name}
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
                <div className="mt-8 pt-6 border-t border-border-subtle">
                  <Link
                    href="/adhesion"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-4 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-base rounded-full transition-colors duration-200"
                  >
                    Adhérer · 22 €
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
