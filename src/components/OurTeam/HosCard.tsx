"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { TeamMember } from "@/lib/data/team-roster";
import { useRef } from "react";

const ROTATION_RANGE = 20;

export default function HosCard({ member }: { member: TeamMember }) {
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
      whileHover={{ y: -5 }}
      className="relative group w-full bg-[#192120]/80 backdrop-blur-md rounded-xl p-8 border border-[#3b4a48]/40 hover:border-[#0beae0]/60 transition-colors shadow-lg cursor-pointer"
    >
      {/* Soft Glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0beae0]/10 to-transparent pointer-events-none" />
      
      <div
        style={{ transform: "translateZ(50px)" }}
        className="flex flex-col items-center text-center relative z-10"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-[#0beae0]/50 p-1 bg-[#08100f] group-hover:border-[#0beae0] transition-colors group-hover:shadow-[0_0_20px_rgba(11,234,224,0.3)]">
          <motion.img
            initial={{ rotate: member.imageRotation || 0 }}
            animate={{ rotate: member.imageRotation || 0 }}
            whileHover={{ 
              scale: 1.1,
              rotate: member.imageRotation || 0
            }}
            transition={{ duration: 0.4 }}
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all opacity-90 group-hover:opacity-100"
          />
        </div>

        <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-1 text-white">
          {member.name}
        </h3>
        <span className="font-label text-[#0beae0] text-xs tracking-widest uppercase mb-3">
          {member.role}
        </span>
        
        <div className="flex flex-col items-center space-y-1 mb-6">
          <p className="text-[#849492] text-xs font-label uppercase tracking-wider">{member.department}</p>
          <p className="text-[#c6c6c7] text-xs max-w-xs">{member.domain}</p>
        </div>

        {member.focus && (
          <div className="inline-block px-3 py-1 bg-[#0beae0]/10 border border-[#0beae0]/20 rounded-full">
            <span className="text-[#0beae0] text-[10px] font-label uppercase tracking-widest">
              [ {member.focus} ]
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
