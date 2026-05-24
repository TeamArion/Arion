import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional (useful for Tailwind)
});

export const metadata: Metadata = {
  title: "Team Arion | CV Racing",
  description:
    "The official website of Team Arion Racing - NMIT's Formula Student CV Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container`}
      >
        <Navbar />
        <main className="flex-grow w-full pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
