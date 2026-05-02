"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { CheckCircle2, Gem, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PartnershipGrid() {
  const mintrixTasks = [
    "Exploration, extraction, and processing at active Kenyan mine sites",
    "Physical commodity production — gold doré, concentrates, refined minerals",
    "Supply chain management from mine gate to global buyer",
    "Operational oversight, safety compliance, and environmental standards"
  ];

  const bricketxTasks = [
    "Investment structuring — asset-backed, professionally managed",
    "Investor onboarding, reporting, and yield distribution",
    "Compliance, custody, and capital protection frameworks",
    "Trading operations across Dubai and London markets"
  ];

  return (
    <section className="py-24 px-6 bg-[#0b0f0d] text-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <div className="mb-6 flex items-center gap-3">
            <div className="p-3 bg-[#D1A741] rounded-xl"><Gem className="text-black" /></div>
            <h3 className={`${montserrat.className} text-2xl font-bold`}>MINTRIX handles:</h3>
          </div>
          <ul className="space-y-4">
            {mintrixTasks.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-400 text-sm border-b border-white/5 pb-3">
                <CheckCircle2 className="text-[#D1A741] shrink-0 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-3xl bg-[#D1A741]/5 border border-[#D1A741]/20">
          <div className="mb-6 flex items-center gap-3">
            <div className="p-3 bg-white rounded-xl"><TrendingUp className="text-[#D1A741]" /></div>
            <h3 className={`${montserrat.className} text-2xl font-bold text-[#D1A741]`}>BRICKETX handles:</h3>
          </div>
          <ul className="space-y-4">
            {bricketxTasks.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-200 text-sm border-b border-white/10 pb-3">
                <CheckCircle2 className="text-[#D1A741] shrink-0 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}