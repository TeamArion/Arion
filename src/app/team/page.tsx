import { Metadata } from 'next';
import TeamSection from "@/components/OurTeam/TeamSection";
import MentorSection from "@/components/OurTeam/MentorSection";

export const metadata: Metadata = {
  title: 'Our Team | TEAM ARION',
  description: 'A team of Engineers and Planners committed to pushing the limits of Formula Student',
};

export default function TeamPage() {
  return (
    <div className="bg-[#0d1514] text-[#dce4e2] font-body selection:bg-[#0beae0] selection:text-[#006560] min-h-screen relative overflow-hidden">

      {/* Massive Parallax Background Text (from previous request) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none opacity-[0.03]">
        <h1 className="font-display font-black uppercase tracking-tight leading-[0.9] text-white text-[clamp(3rem,8vw,8rem)]"> ENGINEERS <br /> OF <br /> SPEED </h1> </div>
      <main className="pt-32 pb-20 relative z-10">
        <MentorSection />


        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <h1 className="font-display text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-[0.9] text-white">
            OUR <span className="text-[#0beae0]">TEAM</span>
          </h1>
          <div className="flex justify-between items-end border-t border-[#3b4a48] pt-6">
            <p className="max-w-xl text-[#c6c6c7] font-light text-lg text-justify leading-relaxed">
              A team of Engineers and Planners committed to pushing the limits of Formula Student, where every member plays a vital role in the pursuit of speed and innovation.
            </p>
            <div className="hidden md:block text-right">
              <span className="font-label text-xs tracking-widest text-[#849492] uppercase block mb-1">CURRENT ROSTER</span>
              <span className="font-display text-4xl font-bold text-white">54 MEMBERS</span>
            </div>
          </div>
        </section>

        <TeamSection />

      </main>
    </div>
  );
}
