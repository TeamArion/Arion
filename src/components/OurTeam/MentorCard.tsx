"use client";

import Image from "next/image";
import { Mentor } from "@/libs/data/team/types";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const ROTATION_RANGE = 15;

export function FeaturedMentorCard({ mentor }: { mentor: Mentor }) {
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
      className="group bg-[#192120]/80 backdrop-blur-md border border-[#3b4a48]/40 hover:border-[#0beae0]/60 p-1 relative overflow-hidden transition-all duration-500 w-full max-w-4xl"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0beae0]/5 to-transparent pointer-events-none" />
      
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 relative z-10"
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#0beae0]/30 shrink-0 group-hover:border-[#0beae0]/80 transition-colors shadow-2xl">
          <Image
            src={mentor.image}
            fill
            alt={mentor.name}
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <p className="font-body text-[#0beae0] tracking-widest uppercase text-[10px] mb-3 font-bold">
            {mentor.role}
          </p>
          <h4 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-tight">
            {mentor.name}
          </h4>
          <p className="font-body text-base text-[#c6c6c7] leading-relaxed mt-5 max-w-2xl">
            {mentor.description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0beae0] group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}

export function MentorCard({ mentor }: { mentor: Mentor }) {
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
      className="group bg-[#192120]/80 backdrop-blur-md border border-[#3b4a48]/40 hover:border-[#0beae0]/60 p-1 relative overflow-hidden transition-all duration-500 h-full"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0beae0]/5 to-transparent pointer-events-none" />

      <div 
        style={{ transform: "translateZ(40px)" }}
        className="flex flex-col items-center text-center sm:text-left p-8 h-full relative z-10"
      >
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#0beae0]/30 shrink-0 mb-6 group-hover:border-[#0beae0]/80 transition-colors">
          <Image
            src={mentor.image}
            fill
            alt={mentor.name}
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>

        <p className="font-body text-[#0beae0] tracking-widest uppercase text-[10px] mb-2 font-semibold">
          {mentor.role}
        </p>
        <h4 className="font-display font-bold text-xl text-white uppercase tracking-tight">
          {mentor.name}
        </h4>
        <p className="font-body text-sm text-[#849492] leading-relaxed mt-4">
          {mentor.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0beae0] group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}