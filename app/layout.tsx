import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Seda Healthcare Solutions | Medical Equipment & Supply",
  description: "Comprehensive medical equipment, laboratory, theatre, and ward supply solutions across Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${sourceSerif.variable} ${inter.variable} font-serif antialiased text-dark bg-paper`}>
        {children}
      </body>
    </html>
  );
}