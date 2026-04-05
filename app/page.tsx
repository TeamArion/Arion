"use client";

import Hero from "./Components/landing/Hero";
import About from "./Components/landing/About";
import MissionVision from "./Components/landing/MissionVision";
import AboutInstitution from "./Components/landing/AboutInstitution";
import Footer from "./Components/layout/Footer";

export default function Home() {
  return (
    <div className="pt-0 bg-black">
      <Hero />
      <About />
      <AboutInstitution />
      <MissionVision />
      <Footer />
    </div>
  );
}