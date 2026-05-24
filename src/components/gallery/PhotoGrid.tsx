"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getOptimizedSupabaseUrl } from "@/lib/supabase";

interface MediaItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  span?: string;
}

const MediaItem = ({ item }: { item: MediaItemType }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (item.type === "video" && videoRef.current) {
      if (isInView) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [isInView]);

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        src={item.url}
        className="w-full h-auto object-contain block"
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      src={getOptimizedSupabaseUrl(item.url)}
      alt={item.title}
      loading="lazy"
      className="w-full h-auto object-contain block"
    />
  );
};

const PhotoGrid = ({
  mediaItems,
}: {
  mediaItems: MediaItemType[];
}) => {
  const [selected, setSelected] = useState<MediaItemType | null>(null);

  return (
    <div className="w-full px-6 md:px-12 pb-16">

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {mediaItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-300 break-inside-avoid bg-zinc-900/20 flex flex-col justify-end"
            onClick={() => setSelected(item)}
          >
            <MediaItem item={item} />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* TEXT */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 transition-all duration-300 translate-y-2 hover:translate-y-0 pointer-events-none">
              <h3 className="text-white text-sm font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-primary text-[10px] uppercase font-medium tracking-widest mt-1">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div 
              className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.1)] flex items-center justify-center bg-black/50"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.type === "video" ? (
                <video
                  src={selected.url}
                  preload="metadata"
                  className="max-h-[90vh] w-auto max-w-full object-contain mx-auto"
                  autoPlay
                  controls
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={getOptimizedSupabaseUrl(selected.url)}
                  alt={selected.title}
                  loading="lazy"
                  className="max-h-[90vh] w-auto max-w-full object-contain mx-auto block"
                />
              )}

              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 bg-black/50 text-white hover:text-primary p-3 rounded-full border border-white/10 hover:border-primary/50 transition-all backdrop-blur-md z-10"
              >
                <X size={24} />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                 <h2 className="text-2xl font-bold text-white tracking-tighter">{selected.title}</h2>
                 <p className="text-primary text-sm uppercase tracking-widest font-semibold mt-2">{selected.desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGrid;