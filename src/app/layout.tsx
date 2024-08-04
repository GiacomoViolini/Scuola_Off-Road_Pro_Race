import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title as ReactNode}</title>
        <meta name="description" content={metadata.description!} />
        <meta name="author" content="Scuola OFF ROAD PRO-RACE" />
        <meta name="robots" content="index, follow"></meta>
        <meta
          name="google-site-verification"
          content="33NisyScGn-AVWdkyP_2aC-gvZ2S8bVBUkL1zs_Z57s"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
