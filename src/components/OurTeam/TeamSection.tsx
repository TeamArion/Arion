"use client";

import { useState, useEffect } from "react";
import Tabs from "@/components/OurTeam/Tab";
import HosCard from "@/components/OurTeam/HosCard";
import MemberCard from "@/components/OurTeam/MemberCard";
import {
  teamRoster,
  TeamCategory,
  TeamMember,
} from "@/lib/data/team-roster";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function TeamSection() {
  const [activeTab, setActiveTab] =
    useState<TeamCategory>("advisor");

  const [members, setMembers] =
    useState<TeamMember[]>(teamRoster);

  useEffect(() => {
    async function loadMemberImages() {
      try {
        const { data, error } = await supabase
          .from("HoS_members")
          .select("*");

        if (error) throw error;

        if (!data || data.length === 0) {
          setMembers(teamRoster);
          return;
        }

        const imageMap = new Map(
          data.map((row) => [
            row.name?.trim().toLowerCase(),
            row.image_url,
          ])
        );

        const updatedRoster = teamRoster.map((member) => ({
          ...member,
          image:
            imageMap.get(member.name.trim().toLowerCase()) ||
            member.image,
        }));

        setMembers(updatedRoster);
      } catch (err) {
        console.error("Failed loading team images:", err);
        setMembers(teamRoster);
      }
    }

    loadMemberImages();
  }, []);

  const filteredMembers = members.filter(
    (member) => member.category === activeTab
  );

  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 z-20 relative min-h-screen">
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <motion.div
        layout
        className={`grid grid-cols-1 md:grid-cols-2 ${
          filteredMembers.length <= 2
            ? "max-w-4xl mx-auto"
            : "lg:grid-cols-4"
        } gap-6 pb-20 items-stretch w-full`}
      >
        <AnimatePresence mode="popLayout">
          {filteredMembers.map((member) => {
            const isPremium =
              member.category === "executive" ||
              member.category === "heads" ||
              member.category === "advisor";

            return (
              <motion.div
                key={member.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  bounce: 0.3,
                }}
                className="flex"
              >
                {isPremium ? (
                  <HosCard member={member} />
                ) : (
                  <MemberCard member={member} />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}