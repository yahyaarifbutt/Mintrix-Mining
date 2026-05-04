"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { CheckCircle2, Gem, TrendingUp, ShieldCheck } from "lucide-react";
// 1. Added Variants and TargetAndTransition to the import
import { motion, Variants, TargetAndTransition } from "framer-motion";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// 2. Typed as TargetAndTransition
const whileHoverMetallicCard: TargetAndTransition = {
  y: -5,
  boxShadow: "0px 10px 40px -5px rgba(209, 167, 65, 0.2)",
  borderColor: "rgba(209, 167, 65, 0.5)",
  transition: { duration: 0.3, ease: "easeInOut" },
};

// 3. Typed as Variants
const pulseIconGold: Variants = {
  initial: { boxShadow: "0px 0px 5px 0px rgba(209, 167, 65, 0.3)" },
  animate: {
    boxShadow: [
      "0px 0px 5px 0px rgba(209, 167, 65, 0.3)",
      "0px 0px 15px 2px rgba(209, 167, 65, 0.5)",
      "0px 0px 5px 0px rgba(209, 167, 65, 0.3)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  whileHover: {
    scale: 1.1,
    boxShadow: "0px 0px 20px 4px rgba(209, 167, 65, 0.7)",
    transition: { duration: 0.2 },
  },
};

// 4. Typed as TargetAndTransition
const whileHoverListItem: TargetAndTransition = {
  backgroundColor: "rgba(209, 167, 65, 0.05)",
  transition: { duration: 0.2 },
};

export default function PartnershipGrid() {
  const mintrixTasks = [
    "Exploration, extraction, and processing at active Kenyan mine sites",
    "Physical commodity production — gold doré, concentrates, refined minerals",
    "Supply chain management from mine gate to global buyer",
    "Operational oversight, safety compliance, and environmental standards",
  ];

  const bricketxTasks = [
    "Investment structuring — asset-backed, professionally managed",
    "Investor onboarding, reporting, and yield distribution",
    "Compliance, custody, and capital protection frameworks",
    "Trading operations — high-velocity gold trading across Dubai and London markets",
  ];

  const youReceive = [
    "Returns from real commodity production — not synthetic exposure",
    "Asset-backed security — physical gold and property title deeds",
    "Transparent reporting on capital deployment and yield realization",
    "Access to a vertically integrated model few investors can access directly",
  ];

  return (
    <section className="py-24 px-6 bg-[#010301] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-black text-white mb-4`}>
            Two Companies <span className="bg-gradient-to-r from-[#D1A741] via-[#e2c16f] to-[#D1A741] bg-clip-text text-transparent">One Integrated Investment Model</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mintrix and BricketX operate as strategic partners across the full value chain — from mineral extraction to investor returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* MINTRIX SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover={whileHoverMetallicCard}
            viewport={{ once: true }}
            variants={fadeUp}
            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 transition-colors"
          >
            <div className="mb-6 flex items-center gap-4">
              <motion.div
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                variants={pulseIconGold}
                className="p-3 bg-white/10 border border-white/20 rounded-xl"
              >
                <Gem className="text-white" />
              </motion.div>
              <h3 className={`${montserrat.className} text-2xl font-bold`}>MINTRIX handles:</h3>
            </div>
            <ul className="space-y-4">
              {mintrixTasks.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={whileHoverListItem}
                  className="flex gap-3 text-gray-400 text-sm border-b border-white/5 pb-3 px-3 -mx-3 rounded-lg"
                >
                  <CheckCircle2 className="text-white/50 shrink-0 w-5 h-5 transition-colors group-hover:text-white" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        "gold doré",
                        '<a href="/commodity-trading" class="bg-gradient-to-r from-[#D1A741] to-[#e2c16f] bg-clip-text text-transparent hover:underline">gold doré</a>'
                      ),
                    }}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* BRICKETX SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover={whileHoverMetallicCard}
            viewport={{ once: true }}
            variants={fadeUp}
            className="p-8 rounded-3xl bg-[#D1A741]/5 border border-[#D1A741]/20 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1A741]/10 rounded-full blur-2xl" />
            <div className="mb-6 flex items-center gap-4 relative z-10">
              <motion.div
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                variants={pulseIconGold}
                className="p-3 bg-[#D1A741] rounded-xl"
              >
                <TrendingUp className="text-black" />
              </motion.div>
              <h3 className={`${montserrat.className} text-2xl font-bold bg-gradient-to-r from-[#D1A741] to-[#e2c16f] bg-clip-text text-transparent`}>
                BRICKETX handles:
              </h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {bricketxTasks.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={whileHoverListItem}
                  className="flex gap-3 text-gray-200 text-sm border-b border-[#D1A741]/10 pb-3 px-3 -mx-3 rounded-lg"
                >
                  <CheckCircle2 className="text-[#D1A741] shrink-0 w-5 h-5" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* YOU RECEIVE SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover={whileHoverMetallicCard}
          viewport={{ once: true }}
          variants={fadeUp}
          className="p-8 rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#121212] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(209,167,65,0.05)_0%,transparent_70%)]" />
          <div className="relative z-10 w-full md:w-1/3">
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                variants={pulseIconGold}
                className="p-1 rounded-full"
              >
                <ShieldCheck className="text-[#D1A741] w-8 h-8" />
              </motion.div>
              <h3 className={`${montserrat.className} text-3xl font-black text-white`}>YOU receive:</h3>
            </div>
            <p className="text-gray-400 text-sm mt-4 mb-6">Direct access to the upside of actual mineral production.</p>
            <Link
              href="https://bricketx.com"
              target="_blank"
              className={`${montserrat.className} inline-block bg-[#D1A741] text-black px-6 py-3 rounded-full font-bold text-[11px] tracking-[0.15em] uppercase hover:bg-white hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.5)] transition-all`}
            >
              Visit BricketX to Structure
            </Link>
          </div>

          <div className="relative z-10 w-full md:w-2/3 grid sm:grid-cols-2 gap-4">
            {youReceive.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(209, 167, 65, 0.4)",
                  backgroundColor: "rgba(209, 167, 65, 0.1)",
                }}
                className="flex gap-3 bg-black/40 p-4 rounded-xl border border-white/5 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-[#D1A741] rounded-full mt-1.5 shrink-0" />
                <p className="text-gray-300 text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}