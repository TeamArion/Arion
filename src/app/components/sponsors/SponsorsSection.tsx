"use client";

import { motion } from 'framer-motion';
import { platinumSponsors } from '@/data/sponsors/platinumSponsors';
import { goldSponsors } from '@/data/sponsors/goldSponsors';
import { silverSponsors } from '@/data/sponsors/silverSponsors';
import { bronzeSponsors } from '@/data/sponsors/bronzeSponsors';

import PlatinumGoldCard from '@/app/components/sponsors/PlatinumGoldCard';
import SilverSponsor from '@/app/components/sponsors/SilverSponsor';
import BronzeSponsor from '@/app/components/sponsors/BronzeSponsor';

export default function SponsorsSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-6 py-24 bg-[#0e0e0e]">
      
      {/* PLATINUM */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-16 h-[1px] bg-[#0BEAE0]"></span>
          <h2 className="font-display font-bold text-sm tracking-[0.4em] uppercase text-[#0BEAE0]">Platinum Partner</h2>
        </div>
        <motion.div 
          className="w-full h-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platinumSponsors.map(s => (
            <motion.div key={s.slug} variants={itemVariants} className="h-full">
              <PlatinumGoldCard sponsor={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GOLD */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-16 h-[1px] bg-[#c6c6c6]"></span>
          <h2 className="font-display font-bold text-sm tracking-[0.4em] uppercase text-[#c6c6c6]">Gold Partners</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {goldSponsors.map(s => (
            <motion.div key={s.slug} variants={itemVariants} className="h-full">
              <PlatinumGoldCard sponsor={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SILVER */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-16 h-[1px] bg-[#08100f]"></span>
          <h2 className="font-display font-bold text-sm tracking-[0.4em] uppercase text-[#747373]">Silver Partners</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {silverSponsors.map(s => (
            <motion.div key={s.id} variants={itemVariants}>
              <SilverSponsor sponsor={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* BRONZE */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="w-16 h-[1px] bg-[#2a2a2a]"></span>
          <h2 className="font-display font-bold text-sm tracking-[0.4em] uppercase text-[#5e3f3b]">Bronze Partners</h2>
        </div>
        <motion.div 
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bronze uses a dropdown layout, so multiple columns as lists */}
          {bronzeSponsors.map(s => (
            <motion.div key={s.id} variants={itemVariants}>
              <BronzeSponsor sponsor={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      
    </div>
  );
}
