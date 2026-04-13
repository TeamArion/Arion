import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});


export const metadata: Metadata = {
  title: "Team Arion | Electric Racing",
  description:
    "Official website for Team Arion - Custom machined precision engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} antialiased min-h-screen flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container`}
      >
        <Navbar />
        <main className="flex-grow w-full pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}