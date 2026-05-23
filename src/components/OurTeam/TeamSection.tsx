"use client";

import { useState } from "react";
import Tabs from "@/components/OurTeam/Tab";
import HosCard from "@/components/OurTeam/HosCard";
import MemberCard from "@/components/OurTeam/MemberCard";
import { teamRoster, TeamCategory } from "@/libs/data/team-roster";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<TeamCategory>("executive");

  const filteredMembers = teamRoster.filter((member) => member.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 z-20 relative min-h-screen">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <motion.div
        layout
        className={`grid grid-cols-1 md:grid-cols-2 ${
          filteredMembers.length <= 2 ? "max-w-4xl mx-auto" : "lg:grid-cols-4"
        } gap-6 pb-20 items-stretch w-full`}
      >
        <AnimatePresence mode="popLayout">
          {filteredMembers.map((member) => {
            const isPremium = member.category === "executive" || member.category === "heads";

            return (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
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
