"use client";

import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import MissionVision from "../components/landing/MissionVision";
import AboutInstitution from "../components/landing/AboutInstitution";


export default function Home() {
  return (
    <div className="pt-0 bg-black">
      <Hero />
      <About />
      <AboutInstitution />
      <MissionVision />
    </div>
  );
}