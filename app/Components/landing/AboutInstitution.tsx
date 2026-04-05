import Image from "next/image";

export default function AboutInstitution() {
  return (
    <section className="bg-black pt-24 pb-12 border-b border-white/5 relative">
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
          <Image
            src="/images/Car_1.jpeg"
            alt="Institution imagery"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
