"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import type { VideoItem } from "@/types/media";
import { getOptimizedSupabaseUrl } from "@/lib/supabase";

interface VideoGalleryProps {
  videos: VideoItem[];
  className?: string;
}

export default function VideoGallery({ videos, className = "" }: VideoGalleryProps) {
  const featured = videos.find((v) => v.isFeatured) || videos[0];
  const additional = videos.filter((v) => v.id !== featured?.id);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  if (!videos.length) {
    return (
      <div className={`text-center py-16 ${className}`}>
        <p className="text-zinc-500 text-sm uppercase tracking-widest">No videos available</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Video */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 group cursor-pointer"
            onClick={() => setActiveVideo(featured)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 bg-black flex items-center justify-center min-h-[300px]">
              <img
                src={getOptimizedSupabaseUrl(featured.thumbnailUrl)}
                alt={featured.title}
                loading="lazy"
                className="w-full h-auto max-h-[70vh] object-contain group-hover:scale-105 transition-transform duration-700 block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/40 group-hover:border-primary group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 backdrop-blur-sm pointer-events-auto">
                  <Play className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-primary transition-colors ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {featured.duration}
              </div>

              {/* Info */}
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                {featured.description && (
                  <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{featured.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Additional Videos */}
        <div className="flex flex-col gap-4">
          {additional.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} onClick={() => setActiveVideo(video)} />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function VideoCard({
  video,
  index,
  onClick,
}: {
  video: VideoItem;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group flex gap-4 p-3 rounded-xl border border-white/5 hover:border-primary/30 bg-zinc-900/30 hover:bg-zinc-900/60 cursor-pointer transition-all duration-300 items-center"
    >
      {/* Thumbnail */}
      <div className="relative w-28 md:w-32 bg-black rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
        <img
          src={getOptimizedSupabaseUrl(video.thumbnailUrl)}
          alt={video.title}
          loading="lazy"
          className="w-full h-auto max-h-[100px] object-cover group-hover:scale-110 transition-transform duration-500 block"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
          <Play className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors" />
        </div>
        <div className="absolute bottom-1 right-1 text-[9px] font-bold text-white bg-black/70 px-1.5 py-0.5 rounded pointer-events-none">
          {video.duration}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center min-w-0">
        <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-primary transition-colors truncate">
          {video.title}
        </h4>
        {video.description && (
          <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{video.description}</p>
        )}
        {video.category && (
          <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600">
            {video.category}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.1)] transition-all duration-300 flex items-center justify-center bg-black/50"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <video
          ref={videoRef}
          src={video.videoUrl}
          preload="metadata"
          className="max-h-[90vh] w-auto max-w-full object-contain mx-auto block"
          controls
          autoPlay
          playsInline
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 text-white hover:text-primary p-3 rounded-full border border-white/10 hover:border-primary/50 transition-all backdrop-blur-md z-10"
        >
          <X size={20} />
        </button>
      </div>
    </motion.div>
  );
}
