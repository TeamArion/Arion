"use client";

import { motion } from "framer-motion";
import { Images } from "lucide-react";
import type { Album } from "@/types/media";

interface AlbumCardProps {
  album: Album;
  index?: number;
}

export default function AlbumCard({ album, index = 0 }: AlbumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative cursor-pointer"
    >
      {/* Stacked-photo effect (background layers) */}
      <div className="absolute -top-1.5 left-2 right-2 h-full rounded-2xl border border-white/5 bg-zinc-900/50 transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
      <div className="absolute -top-3 left-4 right-4 h-full rounded-2xl border border-white/[0.03] bg-zinc-900/30 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500" />

      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 bg-black">
        {/* Cover Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={album.coverImageUrl}
            alt={album.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

          {/* Season badge */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-black/60 backdrop-blur-md border border-primary/20 px-3 py-1 rounded-full">
              {album.season}
            </span>
          </div>

          {/* Media count */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-white/70 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Images className="w-3 h-3" />
            <span className="text-[10px] font-bold">{album.mediaCount}</span>
          </div>
        </div>

        {/* Text */}
        <div className="p-5">
          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-primary transition-colors uppercase">
            {album.name}
          </h3>
          {album.description && (
            <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{album.description}</p>
          )}
          <div className="mt-3 h-0.5 w-8 bg-primary/30 group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
