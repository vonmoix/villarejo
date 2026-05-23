import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuel Villarejo — IT Director & Enterprise Engineering Leader",
  description:
    "IT Director and Enterprise Engineering Leader with 19 years designing and scaling enterprise technology platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable} ${firaCode.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
