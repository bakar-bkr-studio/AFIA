"use client";

import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import * as React from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "L\u2019Association", href: "/association" },
  { name: "Activités", href: "/activites" },
  { name: "Projets", href: "/projets" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full glass">
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden">
              <Image
                src="/images/logo-afia.png"
                alt="Logo AFIA"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-text-primary">
              AFIA
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  isActive
                    ? "text-primary bg-primary-50"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/adhesion">
            <Button size="sm">Adhérer</Button>
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
              className="fixed inset-0 z-40 bg-zinc-950/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-surface-elevated shadow-2xl"
            >
              <div className="flex items-center justify-between p-6">
                <span className="font-heading font-bold text-lg tracking-tight">
                  AFIA
                </span>
                <button
                  type="button"
                  className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <X size={24} weight="bold" />
                </button>
              </div>
              <div className="px-6 pb-8">
                <div className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "text-primary bg-primary-50"
                            : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    href="/adhesion"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full" size="lg">
                      {"Rejoindre l'association"}
                    </Button>
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
