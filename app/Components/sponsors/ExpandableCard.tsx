"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RegularSponsor } from '@/data/sponsors/regularSponsors';

interface Props {
  sponsor: RegularSponsor;
}

export default function ExpandableCard({ sponsor }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`border border-[#2a2a2a] ${isExpanded ? 'bg-[#1c1b1b]' : 'bg-[#131313] hover:bg-[#1a1a1a]'} transition-colors cursor-pointer group`}
      style={{ borderRadius: '0px' }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div layout className="p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            fill
            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex-grow text-center sm:text-left">
          <motion.h4 layout className="font-display font-bold text-lg uppercase text-white tracking-wide">
            {sponsor.name}
          </motion.h4>
          <motion.p layout className="font-body text-[10px] uppercase tracking-[0.1em] text-[#747373] mt-1">
            {sponsor.tier} Partner
          </motion.p>
        </div>
        <motion.div 
          layout 
          className="w-8 h-8 rounded-full border border-[#46484d] flex items-center justify-center text-[#c6c6c6] group-hover:text-white group-hover:bg-[#E8001A] group-hover:border-[#E8001A] transition-all"
        >
          <svg 
            width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-[#2a2a2a] bg-[#1c1b1b]">
              <p className="font-body text-sm text-[#c8c6c5] leading-relaxed mb-6">
                {sponsor.description}
              </p>
              
              <div className="flex items-center gap-4">
                {sponsor.socials.website && (
                  <a 
                    href={sponsor.socials.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-xs uppercase tracking-widest text-white border border-[#46484d] px-4 py-2 hover:border-[#E8001A] hover:text-[#E8001A] transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Website
                  </a>
                )}
                {sponsor.socials.linkedin && (
                  <a 
                    href={sponsor.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-xs uppercase tracking-widest text-[#747373] hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    LinkedIn
                  </a>
                )}
                {sponsor.socials.instagram && (
                  <a 
                    href={sponsor.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-xs uppercase tracking-widest text-[#747373] hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Instagram
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
