"use client";

import { Montserrat } from "next/font/google";
import { Link as LinkIcon, CalendarClock, ShieldCheck, Layers, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

// Animation Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function TradingAdvantages() {
  const advantages = [
    {
      title: "Direct Mine Access",
      desc: "You're not buying from a middleman. You're buying from the producer — meaning pricing reflects real supply cost, not broker margin. Questions get answered by the team running the operation.",
      icon: LinkIcon,
    },
    {
      title: "Supply You Can Plan Around",
      desc: "Because we control production, we commit to delivery schedules. For buyers needing consistent monthly volumes, that reliability matters more than spot market flexibility.",
      icon: CalendarClock,
    },
    {
      title: "Verified Provenance",
      desc: "Every commodity traded comes with full chain-of-custody documentation, origin certificates, assay reports, and export compliance as a standard.",
      icon: ShieldCheck,
    },
    {
      title: "Range in One Relationship",
      desc: "Manage gold, copper, lithium, ruby, and industrial minerals through a single trading account — simplifying procurement and building deeper partnerships.",
      icon: Layers,
    },
    {
      title: "Market-Referenced Pricing",
      desc: "We price against recognized global benchmarks (LME for base metals, LBMA for gold) with transparent adjustments for grade and volume. No opaque pricing or surprise fees.",
      icon: LineChart,
    },
  ];

  return (
    <section className="py-10 lg:py-12 px-6 bg-[#010301] relative overflow-hidden flex items-center border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D1A741]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* --- LEFT COLUMN: Header & CTA --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:space-y-6"
        >
          <div className="space-y-4">
            <motion.h3 variants={fadeRight} className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.3em] uppercase text-xs flex items-center gap-3`}>
              <div className="w-1.5 h-1.5 bg-[#D1A741] rounded-full shadow-[0_0_8px_rgba(209,167,65,0.8)]" />
              Trading Advantages
            </motion.h3>
            
            <motion.h2 variants={fadeRight} className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]`}>
              Why Buyers Choose <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#fce49c]">Mintrix</span>
            </motion.h2>
          </div>

          <motion.p variants={fadeRight} className="text-gray-300 text-base leading-relaxed font-medium">
            Partner with a producer that offers direct market access, fully transparent pricing, and verifiable origin provenance across all our core commodities.
          </motion.p>

          <motion.div variants={fadeRight} className="pt-2">
            <Link 
              href="/contact" 
              className={`${montserrat.className} inline-flex items-center justify-center gap-3 bg-[#D1A741]/10 border border-[#D1A741]/30 text-[#D1A741] hover:bg-[#D1A741] hover:text-[#010301] px-6 py-3.5 rounded-xl transition-all duration-300 font-bold text-xs tracking-[0.15em] uppercase w-full sm:w-auto shadow-[0_0_20px_rgba(209,167,65,0.05)] hover:shadow-[0_0_25px_rgba(209,167,65,0.3)] group`}
            >
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN: Bento Grid of Advantages --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="lg:col-span-8 grid sm:grid-cols-2 gap-4 lg:gap-5"
        >
          {advantages.map((adv, idx) => (
            <motion.div 
              variants={fadeUp}
              key={idx} 
              className={`group relative p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D1A741]/40 transition-all duration-500 backdrop-blur-sm flex flex-col h-full hover:shadow-[0_10px_30px_-10px_rgba(209,167,65,0.1)] ${
                idx === 4 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#D1A741]/10 border border-[#D1A741]/20 group-hover:bg-[#D1A741]/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <adv.icon className="w-5 h-5 text-[#D1A741]" />
                </div>
                <h4 className={`${montserrat.className} text-lg font-bold text-white tracking-tight leading-tight group-hover:text-[#D1A741] transition-colors`}>
                  {adv.title}
                </h4>
              </div>
              
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors font-medium">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}