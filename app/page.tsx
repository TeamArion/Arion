"use client";

import Hero from "./Components/landing/Hero";
import About from "./Components/landing/About";
import MissionVision from "./Components/landing/MissionVision";
import AboutInstitution from "./Components/landing/AboutInstitution";

export default function Home() {
  return (
    <div className="pt-0 bg-black">
      <Hero />
      <About />
      <MissionVision />
      <AboutInstitution />
    </div>
  );
}