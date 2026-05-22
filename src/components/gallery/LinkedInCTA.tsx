"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedInCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#0A0F1E] via-[#0A1628] to-[#0A0A0A] p-8 md:p-12"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Icon + branding */}
        <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/20 flex items-center justify-center">
            <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white tracking-tight uppercase">Team Arion</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0077B5] mt-1">
              on LinkedIn
            </p>
          </div>
        </div>

        {/* Text + CTA */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-lg">
            Stay updated with Team Arion&apos;s technical achievements, sponsorship announcements,
            competition milestones and industry collaborations.
          </p>
          <a
            href="https://www.linkedin.com/company/team-arion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 px-8 py-3 rounded-full border border-[#0077B5]/40 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 group"
          >
            <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Visit LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}
