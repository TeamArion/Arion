"use client";

import { motion } from "framer-motion";

interface GalleryHeroProps {
  variant: "main" | "sub";
  title: string;
  subtitle: string;
  archiveLabel?: string;
  description?: string;
  bgImage?: string;
}

export default function GalleryHero({
  variant,
  title,
  subtitle,
  archiveLabel,
  description,
  bgImage,
}: GalleryHeroProps) {
  const isMain = variant === "main";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background - Note: local assets like /images/Car_1.jpeg should be manually converted to WebP for optimal performance. */}
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none" />

      <div
        className={`relative z-10 flex flex-col items-center justify-center text-center px-6 ${
          isMain ? "min-h-[90vh] py-40" : "min-h-[60vh] py-32"
        }`}
      >
        {/* Archive Label */}
        {archiveLabel && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary mb-8 border border-primary/30 px-4 py-1.5 rounded-full"
          >
            {archiveLabel}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`font-black tracking-tighter uppercase leading-none ${
            isMain
              ? "text-6xl md:text-8xl lg:text-9xl"
              : "text-5xl md:text-7xl lg:text-8xl"
          }`}
        >
          <span className="text-white">{title}</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300 italic">
            {subtitle}
          </span>
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-xl text-sm md:text-base text-zinc-400 leading-relaxed font-light"
          >
            {description}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
        />
      </div>
    </section>
  );
}
