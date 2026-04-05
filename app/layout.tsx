import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/layout/Navbar";


import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Arion | Electric Racing",
  description:
    "Official website for Team Arion - Custom machined precision engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
       <main className="flex-grow w-full pt-20">
  {children}
</main>
        
      </body>
    </html>
  );
}
