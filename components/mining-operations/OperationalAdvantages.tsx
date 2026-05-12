"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function OperationalAdvantages() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-5/12 relative lg:sticky lg:top-32 h-fit">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4`}>
              Operational Advantages
            </h3>
            <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] leading-[1.15] tracking-tight mb-6`}>
              Why Our Mining Model <span className="text-[#D1A741]">Works for Buyers</span>
            </h2>
          </motion.div>
        </div>

        <div className="lg:w-7/12 flex flex-col">
          {[
            {
              title: "Direct Source — No Middlemen",
              desc: "You deal with the producer, not a broker. That means better pricing, faster communication, and direct accountability on supply commitments."
            },
            {
              title: "Consistent Output, Verified Quality",
              desc: "Standardized extraction and processing across our sites means every shipment meets the same quality benchmarks — reducing variance and buyer-side inspection costs."
            },
            {
              title: "Scalable Supply",
              desc: "As demand grows, so do we. Our active expansion at Site 2 and development of Pocket Site 3 gives buyers access to increasing volumes under long-term agreements."
            },
            {
              title: "Responsible Operations",
              desc: "We operate with full regulatory compliance and align our methods with environmental and safety standards — giving buyers confidence in the provenance of what they source."
            }
          ].map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-10 border-b border-gray-100 last:border-b-0"
            >
              <div className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-gray-100 group-hover:text-[#D1A741] transition-colors duration-500 shrink-0`}>
                {String(idx + 1).padStart(2, "0")}.
              </div>
              <div className="flex-1">
                <h3 className={`${montserrat.className} text-xl md:text-2xl font-bold text-[#0b0f0d] tracking-tight group-hover:text-[#D1A741] transition-colors duration-300 mb-3`}>
                  {adv.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                  {adv.desc}
                </p>
              </div>
              <div className="absolute left-0 bottom-[-1px] w-0 h-[2px] bg-[#D1A741] group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}