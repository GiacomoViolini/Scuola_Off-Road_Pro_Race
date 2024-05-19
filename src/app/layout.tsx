import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scuola OFF ROAD PRO-RACE",
  description:
    "La SCUOLA OFF ROAD PRO-RACE nasce dalla passione per lo sport motociclistico di Pierluigi Lasaponara e dei suoi soci ed ha l’obiettivo istituzionale di avvicinare chi lo desidera all’uso sicuro e consapevole dei mezzi a due ruote a motore, sia fuoristrada che nell’uso stradale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
