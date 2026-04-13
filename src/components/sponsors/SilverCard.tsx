"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RegularSponsor } from '@data/sponsors/types';

interface Props {
  sponsor: RegularSponsor;
}

export default function SilverCard({ sponsor }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative overflow-hidden border border-[#2a2a2a] bg-[#08100f] hover:border-[#0BEAE0] transition-colors cursor-pointer group flex flex-col`}
      style={{ borderRadius: '0px' }}
    >
      <motion.div layout className="p-6 flex flex-col items-center justify-center gap-4 min-h-[160px]">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            fill
            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <motion.h4 layout className="font-display font-bold text-lg uppercase text-white tracking-wide text-center">
          {sponsor.name}
        </motion.h4>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-center">
              <p className="font-body text-xs text-[#c8c6c5] mb-4">
                {sponsor.description}
              </p>
              
              <div className="flex items-center justify-center gap-4">
                {sponsor.socials.website && (
                  <a 
                    href={sponsor.socials.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-[10px] uppercase tracking-widest text-[#0BEAE0] hover:text-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Website
                  </a>
                )}
                {sponsor.socials.linkedin && (
                  <a 
                    href={sponsor.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-[10px] uppercase tracking-widest text-[#747373] hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
