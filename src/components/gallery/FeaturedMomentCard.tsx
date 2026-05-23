"use client";

import { motion } from "framer-motion";
import type { FeaturedMoment } from "@/types/media";

interface FeaturedMomentCardProps {
  moment: FeaturedMoment;
  index?: number;
}

export default function FeaturedMomentCard({ moment, index = 0 }: FeaturedMomentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-500 cursor-pointer"
    >
      {/* Background Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img
          src={moment.imageUrl}
          alt={moment.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Category Badge */}
      <div className="absolute top-5 left-5 z-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-black/60 backdrop-blur-md border border-primary/20 px-3 py-1 rounded-full">
          {moment.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
        {/* Date */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-primary/70 transition-colors mb-2 font-mono">
          {new Date(moment.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase group-hover:text-primary transition-colors duration-300">
          {moment.title}
        </h3>

        {/* Description — reveals on hover */}
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {moment.description}
        </p>

        {/* Animated line */}
        <div className="mt-4 h-0.5 w-0 group-hover:w-20 bg-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
}
