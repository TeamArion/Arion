"use client";

import { motion } from "framer-motion";
import { Sponsor } from "@/lib/data/sponsors";
import Link from "next/link";

interface SponsorSliderProps {
  sponsors: Sponsor[];
}

export default function SponsorSlider({ sponsors }: SponsorSliderProps) {
  const eligibleSponsors = sponsors.filter((s) => s.tier !== "Bronze");

  // Duplicate the array to create a seamless loop
  const duplicatedSponsors = [...eligibleSponsors, ...eligibleSponsors, ...eligibleSponsors];

  return (
    <section className="py-20 border-t border-outline-variant/20 bg-surface-container-lowest overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center md:text-left">
        <span className="font-body text-primary-container tracking-widest uppercase text-xs mb-2 block">
          OUR PARTNERS
        </span>
        <h3 className="font-display font-black text-3xl text-white uppercase tracking-tight">
          DRIVING INNOVATION
        </h3>
      </div>

      <div className="flex relative overflow-hidden group">
        <motion.div
          animate={{ x: [0, -100 * eligibleSponsors.length + "%"] }}
          transition={{
            ease: "linear",
            duration: eligibleSponsors.length * 3, // Adjust speed based on number of items
            repeat: Infinity,
          }}
          className="flex gap-16 min-w-max items-center px-8"
        >
          {duplicatedSponsors.map((sponsor, idx) => (
            <div
              key={`${sponsor.name}-${idx}`}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-outline-variant/20 flex items-center justify-center bg-surface-container/50">
                <span className="font-display font-bold text-2xl text-outline-variant hover:text-white transition-colors">
                  {sponsor.logo}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
