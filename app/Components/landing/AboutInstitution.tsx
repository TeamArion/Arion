import Image from "next/image";

export default function AboutInstitution() {
  return (
    <section className="bg-black py-24 border-b border-white/5 relative">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="w-12 h-1 bg-[#00D3B0] mb-8"></div>
          <span className="font-body text-[#00D3B0] tracking-widest uppercase text-xs">
            OUR ROOTS
          </span>
          <h2 className="font-display font-black text-5xl text-white uppercase tracking-tight">
            ABOUT THE INSTITUTION
          </h2>
          <p className="text-white/70 font-body leading-relaxed text-lg">
            Our journey began with a vision to redefine engineering excellence. 
            Supported by our esteemed institution, we transformed a passion for motorsport 
            into a rigorous platform for innovation, hands-on learning, and technological leadership. 
          </p>
        </div>
        <div className="flex-1 relative aspect-video w-full overflow-hidden rounded-sm border border-white/10">
          <div className="absolute inset-0 bg-[#0D1111] flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/20w/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 mb-4">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
            <span className="text-white/30 font-display tracking-widest text-sm uppercase">Institutional Imagery Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
