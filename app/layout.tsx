import type { Metadata } from "next";
import { Montserrat, Open_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AFIA — Association Familles d’Ici et d’Ailleurs",
    template: "%s | AFIA",
  },
  description:
    "Depuis 2010, AFIA rassemble les familles du quartier de Beauval à Meaux. Sorties, aide aux devoirs, repas citoyens — créer du lien, partager, construire ensemble.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-surface text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
