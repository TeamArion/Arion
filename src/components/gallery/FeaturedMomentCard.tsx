"use client";

import { motion } from "framer-motion";
import type { FeaturedMoment } from "@/types/media";
import { getOptimizedSupabaseUrl } from "@/lib/supabase";

interface FeaturedMomentCardProps {
  moment: FeaturedMoment;
  index?: number;
}

export default function FeaturedMomentCard({ moment, index = 0 }: FeaturedMomentCardProps) {
  const isVideo = moment.imageUrl.match(/\.(mp4|webm)$/i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-500 cursor-pointer bg-zinc-900/20"
    >
      {/* Background Media Container */}
      <div className="relative overflow-hidden w-full aspect-[4/5] md:aspect-square flex items-center justify-center bg-black">
        {isVideo ? (
          <video
            src={moment.imageUrl}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 block"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={getOptimizedSupabaseUrl(moment.imageUrl)}
            alt={moment.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 block"
          />
        )}
      </div>
    </motion.div>
  );
}
