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
            BUILDING RELIABILITY.
            <br />
            ENGINEERING PERFORMANCE.
          </h3>

          <p className="text-white/70 max-w-md leading-relaxed font-body">
            To design and develop reliable, high-performance Formula Student race cars through precision engineering, rigorous testing, and continuous innovation while fostering teamwork and technical excellence.
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
            BUILDING TO COMPETE,
            <br />
            DRIVEN TO ACHIEVE AIR 1
          </h3>

          <p className="text-white/70 max-w-md leading-relaxed font-body">
            To establish Team Arion as a nationally leading Formula Student team by consistently engineering high-performance vehicles, excelling in competition, and striving to secure All India Rank 1 through innovation and relentless dedication.
          </p>
        </div>
      </div>

    </section>
  );
}