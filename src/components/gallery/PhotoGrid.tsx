"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MediaItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  span: string;
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
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      src={item.url}
      alt={item.title}
      className="w-full h-full object-cover"
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

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[100px] md:auto-rows-[120px]">
        {mediaItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-xl cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-300 ${item.span}`}
            onClick={() => setSelected(item)}
          >
            <MediaItem item={item} />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

            {/* TEXT */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 transition-all duration-300 translate-y-2 hover:translate-y-0">
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
          >
            <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
              <MediaItem item={selected} />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 bg-black/50 text-white hover:text-primary p-3 rounded-full border border-white/10 hover:border-primary/50 transition-all backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
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