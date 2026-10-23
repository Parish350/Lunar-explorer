import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunar Explorer — Journey to the Moon",
  description: "Explore humanity's greatest adventure to the Moon. Discover Apollo & Artemis missions, an interactive timeline from 1959 to the 2020s, surprising lunar facts, mission control quiz, and real-time AI guide Luna AI.",
  keywords: ["Moon", "Lunar Explorer", "Apollo 11", "Artemis", "NASA", "Space Exploration", "Luna AI"],
  authors: [{ name: "Lunar Explorer Expedition" }],
  openGraph: {
    title: "Lunar Explorer — Journey to the Moon",
    description: "An interactive, educational space adventure exploring humanity's past and future missions to the Moon.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
