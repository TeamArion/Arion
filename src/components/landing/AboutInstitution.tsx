import Image from "next/image";

export default function AboutInstitution() {
  return (
    <section className="bg-black pt-24 pb-12 border-b border-white/5 relative">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <div className="w-12 h-1 bg-[#00D3B0] mb-8"></div>

          <span className="font-body text-[#00D3B0] tracking-widest uppercase text-xs">
            OUR ROOTS
          </span>

          <h2 className="font-display font-bold text-5xl text-white uppercase tracking-tight">
            ABOUT THE INSTITUTION
          </h2>

          <p className="text-white/70 font-body leading-relaxed text-lg">
            Established in 2001, NMIT, Bangalore, is now an engineering institution under NITTE University. Ranked 101–150 in NIRF 2025, it holds NBA (Tier-1), NAAC A+, and AICTE-CII Platinum accreditations. NMIT, located in Yelahanka, is recognized for its academic excellence and industry-oriented approach.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 relative aspect-video w-full overflow-hidden rounded-sm bg-white/5 border border-white/10 flex items-center justify-center p-8">
          <Image
            src="/Nitte.svg"
            alt="Institution imagery"
            fill
            className="object-contain p-8"
          />
        </div>

      </div>
    </section>
  );
}