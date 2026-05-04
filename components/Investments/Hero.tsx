"use client";
import React, { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

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

const headlines = [
  "Gold Mining Commodity Trading Now Open to Investors",
  "Invest in Real Minerals. Real Mines Real Returns",
  "Your Capital Our Mines Proven Returns",
  "From Ground to Returns — Invest in the Full Mining Chain"
];

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // 1. Reduced height from 90vh to 75vh for a tighter, less massive section
    <section className="relative w-full min-h-[75vh] flex flex-col justify-center overflow-hidden bg-[#050505]">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/investment1.jpg"
          alt="Mining Investment"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* 2. Darkened the base overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Added a radial gradient to keep edges dark and center slightly illuminated */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-90" />
      </div>

      {/* GOLD DUST PARTICLES */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D1A741] rounded-full blur-[1px] opacity-30"
          initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
          animate={{ y: "-10%", opacity: [0, 0.5, 0], x: (Math.random() * 100 - 10) + "%" }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        // Adjusted padding to center content perfectly
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center flex-grow"
      >
        {/* 3. Replaced gradient with solid gold and strong drop shadow for maximum visibility */}
        <motion.h1
          variants={fadeUp}
          className={`${montserrat.className} text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] min-h-[140px] sm:min-h-[120px] flex items-center justify-center`}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={headlineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-[#D1A741]"
            >
              {headlines[headlineIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* 4. Brightened text from white/80 to solid white/gray for better legibility */}
        <motion.p
          variants={fadeUp}
          className="mt-4 text-white text-lg sm:text-xl font-semibold max-w-3xl mx-auto leading-snug drop-shadow-lg"
        >
          Most investment products are backed by paper <br className="hidden sm:block" />
          Ours are backed by <span className="text-[#D1A741] font-extrabold">gold in the ground</span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-gray-200 text-[14px] sm:text-[15px] leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md"
        >
          Mintrix operates active mining and commodity trading operations in East Africa — and through our partnership with BricketX, you can invest directly in those operations. No intermediaries, No guesswork, Capital deployed into assets that physically exist
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-5 mt-10"
        >
          <Link
            href="https://bricketx.com"
            target="_blank"
            className={`${montserrat.className} bg-[#D1A741] text-black px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase hover:scale-105 hover:bg-[#F5E6AD] transition-all shadow-[0_10px_30px_rgba(209,167,65,0.3)]`}
          >
            Explore on BricketX
          </Link>

          <Link
            href="/contact"
            className={`${montserrat.className} bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all backdrop-blur-md`}
          >
            Speak to an Advisor
          </Link>
        </motion.div>
      </motion.div>

      {/* FOOTER STRIP */}
      <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-xl py-4 px-6 mt-auto">
        <p className="max-w-4xl mx-auto text-center text-gray-300 text-[12px] sm:text-[13px] font-medium tracking-wide leading-relaxed">
          <strong className="text-[#D1A741] font-extrabold uppercase tracking-widest mr-2">The Model:</strong>
          Mintrix handles the operations. BricketX structures the investment. You earn from both — gold mining in Kenya and high-velocity commodity trading backed by real production.
        </p>
      </div>
    </section>
  );
}