"use client";

import { motion } from 'framer-motion';
import { premiumSponsors } from '@/data/sponsors/premiumSponsors';
import { regularSponsors } from '@/data/sponsors/regularSponsors';
import Plat_GoldCard from './Plat_GoldCard';
import ExpandableCard from './ExpandableCard';

export default function SponsorsSection() {
  const platinum = premiumSponsors.filter(s => s.tier === 'Platinum');
  const gold = premiumSponsors.filter(s => s.tier === 'Gold');
  const silver = regularSponsors.filter(s => s.tier === 'Silver');
  const bronze = regularSponsors.filter(s => s.tier === 'Bronze');

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
          <span className="w-16 h-[1px] bg-[#E8001A]"></span>
          <h2 className="font-display font-bold text-sm tracking-[0.4em] uppercase text-[#E8001A]">Platinum Partner</h2>
        </div>
        <motion.div 
          className="w-full h-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platinum.map(s => (
            <motion.div key={s.slug} variants={itemVariants} className="h-full">
              <Plat_GoldCard sponsor={s} />
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
          {gold.map(s => (
            <motion.div key={s.slug} variants={itemVariants} className="h-full">
              <Plat_GoldCard sponsor={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SILVER */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-16 h-[1px] bg-[#5e3f3b]"></span>
          <h2 className="font-display font-bold text-sm tracking-[0.4em] uppercase text-[#5e3f3b]">Silver Partners</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {silver.map(s => (
            <motion.div key={s.id} variants={itemVariants}>
              <ExpandableCard sponsor={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* BRONZE */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <span className="w-16 h-[1px] bg-[#353534]"></span>
          <h2 className="font-display font-bold text-sm tracking-[0.4em] uppercase text-[#747373]">Bronze Partners</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {bronze.map(s => (
            <motion.div key={s.id} variants={itemVariants}>
              <ExpandableCard sponsor={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      
    </div>
  );
}
