"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

interface Props {
  tag: string;
  title: string;
  description: string;
  type?: "tech" | "sponsor";
  stats?: { label: string; value: string }[];
  file: string;
}

export default function BrochureCard({
  tag,
  title,
  description,
  stats,
  file,
  type = "tech",
}: Props) {
  // 3D Hover Effect State setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion values
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize coordinates between -0.5 and 0.5
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-[500px] rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-3xl border border-white/5 hover:border-cyan-400/30 transition-colors duration-500 p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Soft Ambient Glow Behind */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 duration-1000 transition-opacity pointer-events-none" />

        {/* 🔷 TOP */}
        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] text-cyan-400 font-medium tracking-[0.2em] px-3 py-1.5 rounded-full bg-cyan-400/10 uppercase border border-cyan-400/20">
              {tag}
            </span>
            <span className="text-cyan-400/50 text-3xl blur-[0.5px]">
              {type === "tech" ? "📊" : "🏆"}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold uppercase tracking-tight leading-tight mb-4 text-white/90 group-hover:text-white transition-colors duration-300 drop-shadow-md">
            {title}
          </h2>

          <p className="text-white/50 max-w-sm text-sm leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* 🔷 BOTTOM */}
        <div className="relative z-10 mt-auto" style={{ transform: "translateZ(40px)" }}>
          {/* TECH CARD EXTRA */}
          {type === "tech" && (
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#0F0F0F] bg-cyan-400/20 shadow-inner" />
                <div className="w-10 h-10 rounded-full border-2 border-[#0F0F0F] bg-white/10 shadow-inner" />
              </div>
              <span className="text-xs text-white/40 font-mono tracking-widest uppercase shadow-sm">
                Last Updated: 24h Ago
              </span>
            </div>
          )}

          {/* SPONSOR STATS */}
          {type === "sponsor" && stats && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 border-l border-white/5 pl-4">
                  <div className="text-[10px] text-cyan-400/60 uppercase font-medium tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold text-white/90">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BUTTON */}
          <a
            href={file}
            download
            className="relative w-full py-4 rounded-xl border border-white/10 bg-white/5 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/50 transition-all duration-300 overflow-hidden flex items-center justify-center gap-3 cursor-pointer"
          >
            {/* SCAN LINE */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_15px_#00ffff] opacity-0 group-hover:opacity-100 animate-[pulse_2s_infinite]" />

            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-cyan-400 transition-colors duration-300">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span className="font-semibold tracking-widest text-xs uppercase text-white/80 group-hover:text-cyan-400 transition-colors duration-300">
              Download PDF
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}