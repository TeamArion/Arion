"use client";

import { FeaturedMentorCard, MentorCard } from "./MentorCard";
import { facultyAdvisor, mentors } from "@/libs/data/team/mentor";

export default function MentorSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 z-20 relative">
      {/* Section Header */}
      <div className="mb-20">
        <span className="font-label text-xs tracking-[0.3em] text-[#0beae0] uppercase block mb-4">
          ADVISORY BOARD
        </span>
        <h2 className="font-display text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-[0.9] text-white">
          OUR <span className="text-[#0beae0]">MENTORS</span>
        </h2>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#3b4a48] via-[#3b4a48] to-transparent mt-8"></div>
      </div>

      {/* Faculty Advisor Section */}
      <div className="mb-24 flex justify-center">
        <FeaturedMentorCard mentor={facultyAdvisor} />
      </div>

      {/* Mentors & Advisors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
          <div key={mentor.name}>
            <MentorCard mentor={mentor} />
          </div>
        ))}
      </div>
    </section>
  );
}
