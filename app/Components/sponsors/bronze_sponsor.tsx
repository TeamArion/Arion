"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RegularSponsor } from '@/data/sponsors/types';

interface Props {
  sponsor: RegularSponsor;
}

export default function BronzeSponsor({ sponsor }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col group border-b border-[#2a2a2a]">
      {/* Dropdown Header Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:bg-[#08100f] transition-all px-4"
        style={{ borderRadius: '0px' }}
      >
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain filter grayscale group-hover:grayscale-0 transition-opacity duration-300"
            />
          </div>
          <span className="font-display font-medium text-sm text-[#c6c6c6] group-hover:text-white uppercase tracking-wider">
            {sponsor.name}
          </span>
        </div>
        
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#5e3f3b] group-hover:text-[#0BEAE0]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-[#08100f]"
          >
            <div className="p-6 border-l-2 border-[#0BEAE0] ml-4 my-2">
              <p className="font-body text-xs text-[#747373] leading-relaxed mb-4 max-w-xl">
                {sponsor.description}
              </p>
              {sponsor.socials.website && (
                <a 
                  href={sponsor.socials.website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-[#0BEAE0] hover:text-white transition-colors"
                >
                  Visit Website 
                  <span className="text-[10px]">↗</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
