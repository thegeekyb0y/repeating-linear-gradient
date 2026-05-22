import type { Metadata } from "next";
import "./globals.css";
import { Inter, EB_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Diagonal Lines Component",
  description: "Practicing creating cool components using Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
