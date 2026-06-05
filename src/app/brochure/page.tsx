import BrochureCard from "@/app/components/brochure_card";

export default function BrochurePage() {
  return (
    <section className="relative min-h-screen bg-[#050505] px-6 py-24 sm:px-16 lg:px-24 flex flex-col justify-center overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[40%] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 mb-20 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-cyan-400/50" />
          <p className="text-cyan-400 text-sm font-medium tracking-[0.25em] uppercase">
            Vault Access: Documentation
          </p>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
          Sponsorship <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Resources
          </span>
        </h1>
        <p className="mt-8 text-lg text-white/50 max-w-xl font-light leading-relaxed">
          Access our documentation containig detailed insights into the progress of the team.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl">

        <BrochureCard
          tag="PARTNERSHIP KIT"
          title="SPONSORSHIP PACK"
          description="Team Arion's Sponsorship Brochure for the season 2026-2027, detailing partnership opportunities and benefits and growth of the team over the years."
          type="sponsor"
          file="/pdf/sponsorship.pdf"
        />
      </div>
    </section>
  );
}