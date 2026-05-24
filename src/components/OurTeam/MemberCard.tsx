"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { TeamMember } from "@/lib/data/team-roster";
import { useRef } from "react";

const ROTATION_RANGE = 20;

export default function MemberCard({ member }: { member: TeamMember }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useMotionTemplate`${xSpring}deg`;
  const rotateY = useMotionTemplate`${ySpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = -(mouseY / height - ROTATION_RANGE / 2);
    const rY = mouseX / width - ROTATION_RANGE / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      whileHover={{ y: -3 }}
      className="relative group w-full bg-[#192120]/60 backdrop-blur-sm border border-[#3b4a48]/40 hover:border-[#0beae0]/50 transition-colors p-6 rounded-lg xl:p-8 cursor-pointer overflow-hidden"
    >
      {/* Lightning/Energy Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-lg">
        <div className="absolute top-0 -left-[100%] w-[100%] h-[200%] bg-gradient-to-r from-transparent via-[#0beae0]/10 to-transparent transform -skew-x-12 animate-[lightning_3s_infinite_linear]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,234,224,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <h4 className="font-display text-xl font-bold uppercase text-white mb-1">
          {member.name}
        </h4>
        <span className="font-label text-[#0beae0] text-[10px] tracking-widest uppercase block mb-4">
          {member.role}
        </span>
        
        <div className="mb-4">
          <p className="font-label text-[#849492] text-[9px] uppercase tracking-wider">
            {member.department}
          </p>
          <p className="text-[#c6c6c7] text-xs mt-1">
            {member.domain}
          </p>
        </div>

        {member.focus && (
          <div className="inline-block px-2 py-0.5 bg-[#0beae0]/5 rounded mb-2">
            <span className="text-[#0beae0]/80 text-[9px] font-label uppercase tracking-widest">
              {member.focus}
            </span>
          </div>
        )}

        {/* Fun Line */}
        {member.funLine && (
          <div className="h-4 mt-2 overflow-hidden">
            <p className="font-label text-[#0beae0] text-[10px] tracking-wider translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {member.funLine}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
