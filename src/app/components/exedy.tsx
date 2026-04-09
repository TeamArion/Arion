"use client";

import { motion } from "framer-motion";

export default function ExedySponsorPage() {
  return (
    <div className="bg-black text-white w-full overflow-x-hidden">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black opacity-90" />

        <motion.img
          src="/sponsors/exedy-logo.png"
          alt="Exedy Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 md:w-64 z-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 tracking-widest text-sm z-10"
        >
          PLATINUM SPONSOR
        </motion.p>
      </section>

      {/* STORY */}
      <section className="py-32 px-6 md:px-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Engineering Performance Together
          </h2>

          <p className="text-gray-400 leading-relaxed">
            EXEDY, a global leader in drivetrain technology, supports our team
            with precision-engineered components that enhance performance and
            reliability. Their expertise in friction, vibration, and fluid
            technologies plays a crucial role in our vehicle development.
          </p>
        </motion.div>

        <motion.img
          src="/sponsors/exedy-work.jpg"
          alt="Team working"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Precision Drivetrain Engineering",
            "Motorsport-Grade Reliability",
            "Advanced Friction Technology",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-800 p-8 rounded-2xl hover:border-white transition"
            >
              <p className="text-lg font-light">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 px-6 md:px-24">
        <h3 className="text-2xl mb-12 font-light">
          Moments with EXEDY
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <iframe
            src="https://www.instagram.com/p/POST_ID/embed"
            className="w-full h-[400px]"
          />
          <iframe
            src="https://www.instagram.com/reel/REEL_ID/embed"
            className="w-full h-[400px]"
          />
          <iframe
            src="https://www.instagram.com/p/POST_ID/embed"
            className="w-full h-[400px]"
          />
        </div>
      </section>

      {/* LINKS */}
      <section className="py-32 flex flex-col items-center gap-6">
        <h3 className="text-xl font-light">Connect with EXEDY</h3>

        <div className="flex gap-6">
          <a
            href="https://www.exedy.com"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Website
          </a>

          <a
            href="https://instagram.com/exedy"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

          <a
            href="https://linkedin.com/company/exedy"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}