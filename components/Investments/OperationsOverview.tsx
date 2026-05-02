"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion, Variants } from "framer-motion"; // 1. Import Variants here

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });

// 2. Explicitly type as Variants so TypeScript doesn't complain
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// 3. Explicitly type as Variants to fix the red squiggly lines on ease arrays
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function OperationsOverview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafafa] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger} // Used the properly typed stagger object here
          className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={fadeUp} className="md:col-span-6 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <span className={`${montserrat.className} inline-block font-extrabold text-[10px] uppercase tracking-widest text-[#D1A741] px-4 py-1.5 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/20`}>
                PREMIUM GOLD INVESTMENT MODEL
              </span>
              
              <h2
                className={`${montserrat.className} text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight md:leading-snug`}
              >
                Active Operations. <br /> Verified Production.
                <div className="relative inline-block mt-1">
                  <span className="text-[#D1A741] relative z-10 hover-shine">Real Investor Returns.</span>
                  {/* Decorative underline */}
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#D1A741] rounded-full scale-x-100 group-hover:scale-x-0 transition-transform origin-left duration-300"></span>
                  {/* Shine effect div - will be targeted by CSS */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-20deg] hover-shine-effect z-20"></div>
                </div>
              </h2>
            </div>
            {/* Escaped apostrophe (Kenya&apos;s) to prevent Next.js build errors */}
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed text-lg font-medium">
              Most investors buying commodities end up with paper instruments. Mintrix is different.
              We run active gold mining operations at three sites in Kenya&apos;s Rosterman region.
              This is capital deployed into the mine itself.
            </motion.p>
          </motion.div>

          {/* Image Content */}
          <motion.div variants={fadeUp} className="md:col-span-6 relative flex justify-center items-center group">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative p-3 rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
            >
              <img
                src="/Images/investment2.jpg" 
                alt="Active Gold Mining Operations"
                className="rounded-2xl w-full h-auto object-cover aspect-[4/3] relative z-10"
              />
              {/* Outer glowing border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#D1A741]/50 shadow-[0_0_20px_10px_rgba(209,167,65,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </motion.div>

            {/* Decorative Gold Shards / Lines */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D1A741] rounded-full opacity-10 blur-3xl group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#D1A741] rounded-full opacity-10 blur-2xl group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Embedded CSS for Shine Animation */}
      <style jsx global>{`
        .hover-shine {
          position: relative;
          overflow: hidden;
          transition: text-shadow 0.3s ease;
        }

        .hover-shine:hover {
          text-shadow: 0 0 10px rgba(209,167,65,0.6);
        }

        .hover-shine:hover .hover-shine-effect {
          animation: shineSweep 1.2s ease-in-out forwards;
        }

        @keyframes shineSweep {
          0% {
            transform: translate(-150%) skew-x(-20deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(150%) skew-x(-20deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}