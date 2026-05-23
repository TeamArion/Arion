export default function About() {
  return (
    <section className="bg-[#0D1111] py-24 border-b border-outline-variant/20 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16">
        
        {/* Side Heading */}
        <div className="md:w-12 flex items-center">
          <h2 className="font-display font-bold text-4xl text-white/5 uppercase tracking-tight whitespace-nowrap md:rotate-180 md:[writing-mode:vertical-lr]">
            ABOUT US
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
            
            <div className="flex flex-col gap-2">
              <span className="font-display font-bold text-5xl text-white">
                3
              </span>
              <span className="font-body text-[#00D3B0] tracking-widest uppercase text-xs">
                SEASONS COMPLETED
              </span>
            </div>

            <div className="md:border-l border-t md:border-t-0 border-white/5 md:pl-8 pt-8 md:pt-0 flex flex-col gap-2">
              <span className="font-display font-bold text-5xl text-white">
                50+
              </span>
              <span className="font-body text-[#00D3B0] tracking-widest uppercase text-xs">
                ACTIVE MEMBERS
              </span>
            </div>

            <div className="md:border-l border-t md:border-t-0 border-white/5 md:pl-8 pt-8 md:pt-0 flex flex-col gap-2">
              <span className="font-display font-bold text-5xl text-white">
                TOP 10
              </span>
              <span className="font-body text-[#00D3B0] tracking-widest uppercase text-xs">
                NATIONAL RANKING
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-12 text-white/70 font-body leading-relaxed max-w-3xl text-lg">
            We are Team Arion, a collective of visionaries, mechanics, and
            computational designers at the forefront of Formula Student India.
            Every component we machine is a testament to our pursuit of
            kinematic perfection.
          </p>

        </div>
      </div>
    </section>
  );
}