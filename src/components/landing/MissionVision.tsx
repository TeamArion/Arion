export default function MissionVision() {
  return (
    <section className="py-0 grid grid-cols-1 lg:grid-cols-2 min-h-[600px] bg-[#050505]">
      
      {/* Mission */}
      <div className="relative p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden group">
        
        {/* Background Number */}
        <span className="absolute top-0 right-0 font-display font-bold text-[20rem] text-white/5 -translate-y-1/4 translate-x-1/4 select-none">
          01
        </span>

        <div className="relative z-10">
          <div className="w-12 h-1 bg-[#00D3B0] mb-8"></div>

          <span className="font-body text-[#00D3B0] tracking-widest uppercase text-xs mb-4 block">
            OUR MISSION
          </span>

          <h3 className="font-display font-bold text-4xl text-white mb-6 uppercase tracking-tight">
            PRECISION BEYOND
            <br />
            THE CHASSIS
          </h3>

          <p className="text-white/70 max-w-md leading-relaxed font-body">
            To push the boundaries of automotive engineering through rigorous
            testing, computational fluid dynamics, and absolute discipline in
            the workshop.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="relative p-12 lg:p-24 flex flex-col justify-center overflow-hidden group">
        
        {/* Background Number */}
        <span className="absolute top-0 right-0 font-display font-bold text-[20rem] text-white/5 -translate-y-1/4 translate-x-1/4 select-none">
          02
        </span>

        <div className="relative z-10">
          <div className="w-12 h-1 bg-[#00D3B0] mb-8"></div>

          <span className="font-body text-[#00D3B0] tracking-widest uppercase text-xs mb-4 block">
            OUR VISION
          </span>

          <h3 className="font-display font-bold text-4xl text-white mb-6 uppercase tracking-tight">
            DEFINING THE
            <br />
            CV FUTURE
          </h3>

          <p className="text-white/70 max-w-md leading-relaxed font-body">
            To evolve into a global leader in high-performance electric
            powertrains, setting new standards for efficiency and raw power
            delivery.
          </p>
        </div>
      </div>

    </section>
  );
}