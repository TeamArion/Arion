import { Metadata } from 'next';
import SponsorsSection from '@/app/Components/sponsors/SponsorsSection';

export const metadata: Metadata = {
  title: 'Sponsors | Team Arion Racing',
  description: 'Meet the visionary partners and sponsors who power Formula Student India\'s premier electric racing team.',
};

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] selection:bg-[#E8001A] selection:text-[#fff9f8] pt-24 font-body">
      
      {/* Hero Header Section */}
      <section className="relative px-6 py-20 border-b border-[#2a2a2a] overflow-hidden">
        {/* Kinetic Tech Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e] z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col items-start gap-6">
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter text-white">
            Partners in <span className="text-[#E8001A]">Speed</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl font-light text-[#c8c6c5] leading-relaxed">
            The engineering, financial, and logistical foundations that drive Team Arion's pursuit of motorsport perfection.
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <SponsorsSection />
    </main>
  );
}
