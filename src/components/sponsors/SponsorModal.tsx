"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sponsor } from "@/lib/data/sponsors";
import Image from "next/image";
import { FiX, FiGlobe, FiInstagram, FiLinkedin } from "react-icons/fi";

interface SponsorModalProps {
  sponsor: Sponsor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SponsorModal({ sponsor, isOpen, onClose }: SponsorModalProps) {
  if (!sponsor) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-surface-container border border-primary/30 shadow-2xl overflow-hidden rounded-2xl"
          >
            {/* Top decorative line */}
            <div className={`h-1 w-full ${sponsor.tier === "Silver" ? "bg-primary" : "bg-primary/50"}`}></div>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors z-10"
            >
              <FiX size={24} />
            </button>

            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-32 h-32 rounded-full bg-surface border border-primary/20 flex items-center justify-center shrink-0 relative overflow-hidden">
                  {sponsor.logo.includes(".") || sponsor.logo.startsWith("/") ? (
                    <div className="relative w-full h-full p-6">
                      <Image 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="font-display font-black text-4xl text-white">
                      {sponsor.logo}
                    </span>
                  )}
                </div>
               
               <div className="flex-1">
                 <p className="font-body tracking-widest uppercase text-[10px] mb-2 font-semibold text-on-surface-variant">
                   {sponsor.tier} SPONSOR
                 </p>
                 <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
                   {sponsor.name}
                 </h2>
                 <p className="font-body text-on-surface-variant/90 leading-relaxed mb-8">
                   {sponsor.description}
                 </p>
                 
                 <div className="flex gap-4 justify-center md:justify-start">
                   <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-primary/20 hover:border-primary/45">
                     <FiGlobe size={20} />
                   </a>
                   <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-primary/20 hover:border-primary/45">
                     <FiInstagram size={20} />
                   </a>
                   <a href={sponsor.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-primary/20 hover:border-primary/45">
                     <FiLinkedin size={20} />
                   </a>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
