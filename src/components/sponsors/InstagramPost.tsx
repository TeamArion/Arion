"use client";

import { motion } from "framer-motion";
import { FiInstagram, FiExternalLink } from "react-icons/fi";

interface InstagramPostProps {
  /** Full Instagram post URL, e.g. https://www.instagram.com/p/ABC123/ */
  postUrl: string;
  /** Optional caption below the embed */
  caption?: string;
}

/**
 * Reusable Instagram post embed component.
 * Renders the official Instagram embed iframe via their oEmbed endpoint.
 * Can be used across any sponsor showcase or page.
 */
export default function InstagramPost({ postUrl, caption }: InstagramPostProps) {
  // Build the embed URL – Instagram supports /embed/ suffix on post URLs
  const embedUrl = postUrl.endsWith("/")
    ? `${postUrl}embed`
    : `${postUrl}/embed`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full flex flex-col items-center"
    >
      {/* Embed Container */}
      <div className="relative w-full max-w-[540px] bg-[#151d1c]/60 border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Instagram iframe */}
        <div className="relative w-full" style={{ paddingBottom: "125%" }}>
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            allow="encrypted-media"
            title="Instagram Post"
            loading="lazy"
          />
        </div>
      </div>

      {/* Caption & External Link */}
      <div className="mt-6 flex flex-col items-center gap-4">
        {caption && (
          <p className="text-white/40 text-sm font-body tracking-wide text-center max-w-md">
            {caption}
          </p>
        )}

        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary/70 hover:text-primary text-xs font-display font-bold uppercase tracking-[0.15em] transition-colors duration-300 group"
        >
          <FiInstagram size={14} className="group-hover:scale-110 transition-transform" />
          View on Instagram
          <FiExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  );
}
