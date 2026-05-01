"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700", "800"] });

interface Props {
  title: string;
  desc: string;
  index: number;
}

export default function WhyMintrixItem({ title, desc, index }: Props) {
  // Formats numbers as 01, 02, etc.
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-8 border-b border-gray-200 last:border-b-0"
    >
      {/* Large Typography Index */}
      <div className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-gray-200 group-hover:text-[#D1A741] transition-colors duration-500 shrink-0`}>
        {formattedIndex}.
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className={`${montserrat.className} text-xl md:text-2xl font-bold text-[#0b0f0d] tracking-tight group-hover:text-[#D1A741] transition-colors duration-300 mb-2`}>
          {title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
          {desc}
        </p>
      </div>

      {/* Animated Bottom Border Accent */}
      <div className="absolute left-0 bottom-[-1px] w-0 h-[2px] bg-[#D1A741] group-hover:w-full transition-all duration-700 ease-in-out" />
    </motion.div>
  );
}