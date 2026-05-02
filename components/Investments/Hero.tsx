"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // 1. Imported Variants

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

// 2. Added : Variants to all animation objects
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const goldGlint: Variants = {
  animate: {
    backgroundPosition: ["200% center", "-200% center"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505]">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/investment1.jpg" 
          alt="Mining Investment"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      </div>

      {/* GOLD DUST PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D1A741] rounded-full blur-[1px] opacity-30"
          initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
          animate={{ y: "-10%", opacity: [0, 0.4, 0], x: (Math.random() * 100 - 10) + "%" }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-12 text-center"
      >
        {/* PILL LABEL */}
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/30 backdrop-blur-xl"
        >
          <span className="w-1.5 h-1.5 bg-[#D1A741] rounded-full shadow-[0_0_8px_#D1A741]" />
          <span className={`${montserrat.className} text-[#D1A741] text-[10px] font-bold tracking-[0.25em] uppercase`}>
            Exclusive Investment Opportunity
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          variants={fadeUp}
          className={`${montserrat.className} text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl`}
        >
          Invest in Real Minerals
          <br />
          <motion.span
            variants={goldGlint}
            animate="animate"
            className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#D1A741,20%,#F5E6AD,40%,#D1A741,60%,#D1A741)] bg-[length:200%_auto]"
            style={{ display: "inline-block" }}
          >
            Real Mines Real Returns
          </motion.span>
        </motion.h1>

        {/* SUBHEADING */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-white text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-snug drop-shadow-md"
        >
          Most investment products are backed by paper.
          <br className="hidden sm:block" />
          Ours are backed by <span className="text-[#D1A741] font-bold">gold in the ground.</span>
        </motion.p>

        {/* DESCRIPTION - INCREASED PROMINENCE HERE */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-white/90 text-[14px] sm:text-[16px] leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm"
        >
          Mintrix operates active mining and commodity trading operations in
          East Africa. Through BricketX, you invest directly in physical production.{" "}
          <span className="text-[#D1A741] font-bold">
            Zero middlemen. Absolute transparency.
          </span>
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-4 mt-10"
        >
          <Link
            href="https://bricketx.com"
            className={`${montserrat.className} bg-[#D1A741] text-black px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase hover:scale-105 hover:bg-[#F5E6AD] transition-all shadow-[0_10px_30px_rgba(209,167,65,0.3)]`}
          >
            Explore on BricketX
          </Link>

          <Link
            href="/contact"
            className={`${montserrat.className} bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all backdrop-blur-md`}
          >
            Speak to an Advisor
          </Link>

          
        </motion.div>
      </motion.div>

      {/* FOOTER STRIP - INCREASED PROMINENCE HERE */}
      <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md py-5 px-6">
        <p className="max-w-4xl mx-auto text-center text-white/80 text-[13px] font-medium tracking-wide leading-relaxed">
          <strong className="text-[#D1A741] font-extrabold uppercase tracking-widest mr-2">The Hybrid Model:</strong> 
          Mintrix handles the operations. BricketX structures the investment. 
          Earn from high-velocity commodity trading and real gold production in Kenya.
        </p>
      </div>
    </section>
  );
}