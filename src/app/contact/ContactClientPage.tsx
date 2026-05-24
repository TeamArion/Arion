"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

// ─── Data ───────────────────────────────────────────────────────────────────

const CONTACTS = [
  {
    role: "D Jayanth",
    phone: "+91 90003 73502",
    email: "captain@nmit.ac.in",
  },
  {
    role: "Rishi Nikhil",
    phone: "+91 90193 81157",
    email: "1nt23me037.rishi@nmit.ac.in",
  },
  {
    
    role: "Eeshna Bharadwaj",
    phone: "+91 91106 82554",
    email: "1nt24vl017.eeshna@nmit.ac.in",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactClientPage() {
  return (
    <div className="bg-[#0d1514] text-[#dce4e2] min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Page title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-14 border-b border-[#3b4a48]/50 pb-8"
        >
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tighter text-white mb-3">
            Contact Us
          </h1>
          <p className="text-[#849492] text-base max-w-xl leading-relaxed">
            Whether it&apos;s sponsorship, media, or joining the team — reach out to the right
            person directly.
          </p>
        </motion.div>

        {/* ── Contact people ─────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
        >
          {/* Left: Team Captain */}
          <motion.div
            variants={fadeUp}
            className="border border-[#3b4a48]/50 bg-[#131c1b] p-6 rounded-lg"
          >
            <p className="text-[#0beae0] text-[11px] font-bold uppercase tracking-widest mb-3">
              {CONTACTS[0].role}
            </p>
            <a
              href={`tel:${CONTACTS[0].phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[#c6c6c7] hover:text-white transition-colors text-sm mb-2"
            >
              <Phone size={13} className="text-[#849492] shrink-0" />
              {CONTACTS[0].phone}
            </a>
            <a
              href={`mailto:${CONTACTS[0].email}`}
              className="flex items-center gap-2 text-[#c6c6c7] hover:text-white transition-colors text-sm"
            >
              <Mail size={13} className="text-[#849492] shrink-0" />
              {CONTACTS[0].email}
            </a>
          </motion.div>

          {/* Right: Sponsorship */}
          <motion.div
            variants={fadeUp}
            className="border border-[#3b4a48]/50 bg-[#131c1b] p-6 rounded-lg"
          >
            <p className="text-[#0beae0] text-[11px] font-bold uppercase tracking-widest mb-3">
              {CONTACTS[1].role}
            </p>
            <a
              href={`tel:${CONTACTS[1].phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[#c6c6c7] hover:text-white transition-colors text-sm mb-2"
            >
              <Phone size={13} className="text-[#849492] shrink-0" />
              {CONTACTS[1].phone}
            </a>
            <a
              href={`mailto:${CONTACTS[1].email}`}
              className="flex items-center gap-2 text-[#c6c6c7] hover:text-white transition-colors text-sm"
            >
              <Mail size={13} className="text-[#849492] shrink-0" />
              {CONTACTS[1].email}
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom middle: Operations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center mb-14"
        >
          <div className="border border-[#3b4a48]/50 bg-[#131c1b] p-6 rounded-lg w-full md:w-1/2">
            <p className="text-[#0beae0] text-[11px] font-bold uppercase tracking-widest mb-3">
              {CONTACTS[2].role}
            </p>
            <a
              href={`tel:${CONTACTS[2].phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[#c6c6c7] hover:text-white transition-colors text-sm mb-2"
            >
              <Phone size={13} className="text-[#849492] shrink-0" />
              {CONTACTS[2].phone}
            </a>
            <a
              href={`mailto:${CONTACTS[2].email}`}
              className="flex items-center gap-2 text-[#c6c6c7] hover:text-white transition-colors text-sm"
            >
              <Mail size={13} className="text-[#849492] shrink-0" />
              {CONTACTS[2].email}
            </a>
          </div>
        </motion.div>

        {/* ── Team info + socials ──────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14"
        >
          {/* General info */}
          <motion.div
            variants={fadeUp}
            className="border border-[#3b4a48]/50 bg-[#131c1b] p-6 rounded-lg space-y-4"
          >
            <h2 className="font-display font-bold text-white text-lg uppercase tracking-tight mb-4">
              Team Information
            </h2>

            <div>
              <p className="text-[#849492] text-[11px] uppercase tracking-widest mb-1">General Email</p>
              <a
                href="mailto:arion.racing@nmit.ac.in"
                className="flex items-center gap-2 text-[#c6c6c7] hover:text-white transition-colors text-sm"
              >
                <Mail size={13} className="text-[#849492] shrink-0" />
                arion.racing@nmit.ac.in
              </a>
            </div>

            <div>
              <p className="text-[#849492] text-[11px] uppercase tracking-widest mb-1">Location</p>
              <div className="flex items-start gap-2 text-[#c6c6c7] text-sm">
                <MapPin size={13} className="text-[#849492] shrink-0 mt-0.5" />
                <span>
                  Nitte Meenakshi Institute of Technology<br />
                  Yelahanka, Bengaluru, Karnataka
                </span>
              </div>
            </div>

            <p className="text-[#849492] text-sm leading-relaxed border-t border-[#3b4a48]/40 pt-4">
              Team Arion is the Formula Student team of NMIT, designing and racing
              high-performance formula-style cars while fostering engineering excellence.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="border border-[#3b4a48]/50 bg-[#131c1b] p-6 rounded-lg"
          >
            <h2 className="font-display font-bold text-white text-lg uppercase tracking-tight mb-5">
              Follow Us
            </h2>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/_team.arion_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md border border-[#3b4a48]/40 hover:border-[#849492]/50 bg-[#0d1514] hover:bg-[#192120] transition-all duration-200 group"
              >
                <FaInstagram size={18} className="text-rose-400 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Instagram</p>
                  <p className="text-[#849492] text-xs">@_team.arion_</p>
                </div>
                <ExternalLink size={13} className="text-[#849492] ml-auto group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/company/team-arion/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md border border-[#3b4a48]/40 hover:border-[#849492]/50 bg-[#0d1514] hover:bg-[#192120] transition-all duration-200 group"
              >
                <FaLinkedin size={18} className="text-sky-400 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">LinkedIn</p>
                  <p className="text-[#849492] text-xs">Team Arion</p>
                </div>
                <ExternalLink size={13} className="text-[#849492] ml-auto group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Map ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-white text-lg uppercase tracking-tight">
              Find Us
            </h2>
            <a
              href="https://maps.app.goo.gl/1ydn6sudi7WkqXmr7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#0beae0] hover:text-white text-xs font-medium transition-colors"
            >
              <ExternalLink size={12} />
              Open in Maps
            </a>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#3b4a48]/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.765703512093!2d77.56748!3d13.130528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19401cdddddd%3A0x7c93baa3e7e70890!2sNitte%20Meenakshi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NMIT — Team Arion"
            />
          </div>

          <p className="text-[#849492] text-sm mt-3">
            Nitte Meenakshi Institute of Technology, Yelahanka, Bengaluru — 560064
          </p>
        </motion.div>

      </div>
    </div>
  );
}
