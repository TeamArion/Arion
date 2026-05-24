"use client";

import { motion } from "framer-motion";
import type { SponsorHighlight } from "@/types/sponsor";
import { getOptimizedSupabaseUrl } from "@/lib/supabase";

interface SponsorHighlightCardProps {
  highlight: SponsorHighlight;
  index?: number;
}

export default function SponsorHighlightCard({ highlight, index = 0 }: SponsorHighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-500"
    >
      {/* Glassmorphism highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={getOptimizedSupabaseUrl(highlight.imageUrl)}
          alt={highlight.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Sponsor name */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
          {highlight.sponsorName}
        </p>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors">
          {highlight.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-3">
          {highlight.description}
        </p>

        {/* Bottom accent */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-0.5 w-8 bg-primary/30 group-hover:w-16 transition-all duration-500" />
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600">
            {new Date(highlight.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
