"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  italicTitle?: string;
  tagline?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  italicTitle,
  tagline,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white"
      >
        {title}
        {italicTitle && (
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300 ml-3">
            {italicTitle}
          </span>
        )}
      </motion.h2>

      {tagline && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500"
        >
          {tagline}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 h-px w-24 bg-primary/40 origin-left"
      />
    </div>
  );
}
