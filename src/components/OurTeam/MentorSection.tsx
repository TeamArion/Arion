"use client";

import { useEffect, useState } from "react";
import { MentorCard } from "./MentorCard";
import {
  mentors as fallbackMentors,
} from "@/lib/data/team/mentor";
import { supabase } from "@/lib/supabase";
import { Mentor } from "@/lib/data/team/types";

export default function MentorSection() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMentors() {
      try {
        const { data, error } = await supabase
          .from("faculty_mentors")
          .select("*")
          .order("display_order", { ascending: true });

        if (data && data.length > 0) {
          const mappedMentors = data
            .filter((m: any) => m.type === "MENTOR")
            .map((m: any) => ({
              name: m.name,
              role: m.designation,
              description: m.company_or_institution,
              image: m.image_url,
            }));

          setMentors(
            mappedMentors.length > 0 ? mappedMentors : fallbackMentors,
          );
        } else {
          setMentors(fallbackMentors);
        }
      } catch (err) {
        console.error("Error loading mentors:", err);
        setMentors(fallbackMentors);
      } finally {
        setLoading(false);
      }
    }
    loadMentors();
  }, []);

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
