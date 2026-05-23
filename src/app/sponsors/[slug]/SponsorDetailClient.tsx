"use client";

import { motion } from "framer-motion";
import { Sponsor } from "@/lib/data/sponsors";
import Image from "next/image";
import { FiGlobe, FiInstagram, FiLinkedin, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

interface SponsorDetailClientProps {
  sponsor: Sponsor;
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function SponsorDetailClient({ sponsor }: SponsorDetailClientProps) {
  const isPlatinum = sponsor.tier === "Platinum";
  
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl pt-12">
        <Link href="/sponsors" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-16">
          <FiArrowLeft size={16} />
          BACK TO SPONSORS
        </Link>
        
        <motion.div
           initial="hidden"
           animate="visible"
           transition={{ duration: 0.8 }}
           variants={fadeIn}
           className="flex flex-col items-center text-center"
        >
           {/* Logo Container */}
           <div className={`w-40 h-40 md:w-56 md:h-56 rounded-full bg-surface-container/50 border flex items-center justify-center mb-12 shadow-2xl relative overflow-hidden ${isPlatinum ? 'border-primary/40 shadow-[0_0_80px_rgba(11,234,224,0.3)]' : 'border-yellow-500/40 shadow-[0_0_60px_rgba(255,215,0,0.2)]'}`}>
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              {sponsor.logo.includes(".") || sponsor.logo.startsWith("/") ? (
                <div className="relative w-full h-full p-10">
                  <Image 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
              ) : (
                <span className={`font-display font-black text-6xl relative z-10 ${isPlatinum ? 'text-white' : 'text-white'}`}>
                  {sponsor.logo}
                </span>
              )}
           </div>

           {/* Tier Label */}
           <div className="mb-6 flex items-center justify-center gap-4">
             <span className={`h-[1px] w-8 ${isPlatinum ? 'bg-primary' : 'bg-yellow-500'}`}></span>
             <h3 className={`font-display font-bold text-xs tracking-[0.3em] uppercase ${isPlatinum ? 'text-primary' : 'text-yellow-500'}`}>
               {sponsor.tier} PARTNER
             </h3>
             <span className={`h-[1px] w-8 ${isPlatinum ? 'bg-primary' : 'bg-yellow-500'}`}></span>
           </div>

           {/* Title */}
           <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none text-white mb-12">
              {sponsor.name}
           </h1>

           {/* Body content */}
           <div className="relative max-w-2xl px-8 py-12 md:py-16 md:px-16 bg-[#151d1c]/50 border border-outline-variant/10 backdrop-blur-md rounded-2xl mb-16">
             {/* Corner Accents */}
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-outline-variant/30 rounded-tl-2xl"></div>
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-outline-variant/30 rounded-br-2xl"></div>

             <p className="font-body text-lg md:text-xl text-on-surface-variant/90 leading-relaxed font-light text-justify md:text-center">
               {sponsor.description}
             </p>
           </div>

           {/* Social Links */}
           <div className="flex flex-wrap gap-6 justify-center">
             {sponsor.website !== "#" && (
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 hover:border-white/20 uppercase tracking-widest text-sm font-bold">
                  <FiGlobe size={18} />
                  WEBSITE
                </a>
             )}
             {sponsor.instagram !== "#" && (
                <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 hover:border-white/20 uppercase tracking-widest text-sm font-bold">
                  <FiInstagram size={18} />
                  INSTAGRAM
                </a>
             )}
             {sponsor.linkedin !== "#" && (
                <a href={sponsor.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 hover:border-white/20 uppercase tracking-widest text-sm font-bold">
                  <FiLinkedin size={18} />
                  LINKEDIN
                </a>
             )}
           </div>
        </motion.div>
      </div>
    </div>
  );
}
