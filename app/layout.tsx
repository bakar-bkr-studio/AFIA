import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AFIA — Association pour la Formation et l\u2019Insertion par l\u2019Action",
    template: "%s | AFIA",
  },
  description:
    "L\u2019AFIA accompagne, forme et soutient chaque parcours vers l\u2019insertion professionnelle et sociale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-surface text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
