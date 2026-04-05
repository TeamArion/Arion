"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-outline-variant/20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/videos/car_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 speed-lines z-0 pointer-events-none"></div>
      <div className="absolute inset-0 kinetic-gradient z-0 opacity-80 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <p className="font-display font-bold text-[#00D3B0] tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
          FORMULA STUDENT INDIA — 2026
        </p>
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none mb-8">
          BUILT TO BREAK
          <br />
          LIMITS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <Link href="/brochure" className="group flex flex-col items-center">
            <div className="w-12 h-1 bg-[#00D3B0] mb-4 transition-all group-hover:w-16"></div>
            <span className="font-display font-bold text-white text-sm md:text-base tracking-[0.2em] uppercase">
              OUR BROCHURE
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="flex items-center gap-4 text-outline-variant">
          <span className="font-body text-[10px] tracking-widest uppercase">
            LATERAL_G FORCE
          </span>
          <div className="w-32 h-[1px] bg-white/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00D3B0]"></div>
          </div>
          <span className="font-display font-bold text-white text-xs">
            2.4 G
          </span>
        </div>
      </div>
    </section>
  );
}
