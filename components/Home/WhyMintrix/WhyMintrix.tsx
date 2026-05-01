"use client";

import { Montserrat } from "next/font/google";
import { whyMintrixData } from "./whyMintrixData";
import WhyMintrixItem from "./WhyMintrixItem";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function WhyMintrix() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Streamlined Sticky Header */}
        <div className="lg:w-5/12 space-y-6 relative lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Accent Line + Subtitle */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[#D1A741]" />
              <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm`}>
                Our Differentiators
              </h3>
            </div>

            <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] leading-[1.15] tracking-tight mb-6`}>
              Why Work <br className="hidden lg:block" />
              With <span className="text-[#D1A741]">Mintrix</span>
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed border-l-2 border-gray-200 pl-5">
              We control the full value chain to ensure consistent quality, absolute reliability, and market-aligned pricing for our global partners.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Minimalist Typography List */}
        <div className="lg:w-7/12 w-full flex flex-col">
          {whyMintrixData.map((item, index) => (
            <WhyMintrixItem
              key={index}
              index={index}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}