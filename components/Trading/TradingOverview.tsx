"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion"; // 1. Imported Variants

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

// 2. Added : Variants to all animation objects
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TradingOverview() {
  const tradePartners = [
    "Commodity buyers and import-export firms",
    "Manufacturers sourcing industrial and battery-grade minerals",
    "Jewelry and luxury goods producers requiring gemstones and gold",
    "Traders looking for reliable sourcing partners with volume flexibility",
    "Investment groups seeking direct commodity procurement channels",
  ];

  const tradeSteps = [
    { title: "Inquiry", desc: "Tell us what you need — commodity, grade, volume, delivery timeline." },
    { title: "Quote", desc: "We send a pricing proposal based on current production and market rates." },
    { title: "Agreement", desc: "Contract and compliance documentation handled directly." },
    { title: "Delivery", desc: "Shipment coordinated through our supply chain — tracked to destination." },
  ];

  return (
    <>
      {/* --- TOP SECTION: Dark Theme (Who We Trade With) --- */}
      <section className="py-16 px-6 bg-[#0b0f0d] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D1A741]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#010301] p-8 lg:p-10 rounded-3xl border border-white/5 shadow-2xl relative z-10"
          >
            <motion.h4 variants={fadeUp} className={`${montserrat.className} text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-4`}>
              <div className="w-2.5 h-2.5 bg-[#D1A741] rounded-full shadow-[0_0_15px_rgba(209,167,65,0.6)]" />
              Who We Trade With
            </motion.h4>
            
            <motion.ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tradePartners.map((partner, idx) => (
                <motion.li 
                  variants={fadeUp}
                  key={idx} 
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#D1A741]/40 hover:shadow-[0_0_30px_rgba(209,167,65,0.05)] transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D1A741] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 text-sm lg:text-base font-medium leading-relaxed">
                    {partner}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* --- BOTTOM SECTION: Mixed Theme --- */}
      <section className="py-20 px-6 bg-[#fafafa] relative overflow-hidden border-t border-gray-200">
        <div className="absolute top-20 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
          >
            <motion.div variants={fadeRight} className="space-y-4 relative">
              <div className="absolute -left-5 top-1.5 w-1.5 h-1.5 bg-[#D1A741] rounded-full shadow-[0_0_10px_rgba(209,167,65,0.4)]" />
              <h3 className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.3em] uppercase text-[10px] ml-2`}>
                Overview
              </h3>
              
              <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]`}>
                What Makes Our <br />
                <span className="text-[#D1A741]">Trading Different</span>
              </h2>
              <div className="w-16 h-[4px] bg-[#D1A741] rounded-full mt-6" />
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5 text-gray-600 leading-relaxed text-sm md:text-base font-medium">
              <h4 className={`${montserrat.className} text-xl font-bold text-gray-900 mb-2`}>
                Production-Backed Commodity Trading
              </h4>
              <p>
                Most commodity traders source from the open market — meaning supply availability, quality, and pricing are all subject to third-party conditions. Mintrix is different.
              </p>
              <p>
                We trade what we produce. Our mining operations in Kenya generate the gold, minerals, and gemstones we bring to market.
              </p>
              
              <div className="mt-8 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:border-[#D1A741]/30 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D1A741]" />
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#D1A741]/5 rounded-full blur-2xl group-hover:bg-[#D1A741]/10 transition-colors duration-500" />
                {/* 3. Escaped the double quotes with &quot; */}
                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed pl-3 relative z-10">
                  &quot;That control translates into something buyers rarely find in one place: consistent availability, transparent sourcing, and pricing grounded in real production cost.&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: How a Trade Works */}
          <div className="lg:col-span-7">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-[#050706] p-8 lg:p-10 rounded-3xl border border-[#D1A741]/20 shadow-[0_20px_50px_-10px_rgba(209,167,65,0.15)] relative overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#D1A741]/20 to-transparent rounded-full blur-[80px] pointer-events-none" />

              <motion.h4 variants={fadeUp} className={`${montserrat.className} text-2xl font-bold text-white mb-2 flex items-center gap-3 relative z-10`}>
                <div className="w-2 h-2 bg-[#D1A741] rounded-full shadow-[0_0_10px_rgba(209,167,65,0.8)]" />
                How a Trade Works
              </motion.h4>
              <motion.p variants={fadeUp} className="text-gray-400 mb-8 text-sm font-medium relative z-10">
                We keep the process straightforward:
              </motion.p>
              
              <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                {tradeSteps.map((step, idx) => (
                  <motion.div 
                    variants={fadeUp}
                    key={idx} 
                    className="flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#D1A741]/50 shadow-sm hover:shadow-[0_0_30px_rgba(209,167,65,0.1)] transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className={`${montserrat.className} text-white font-bold text-lg group-hover:text-[#D1A741] transition-colors`}>
                        {step.title}
                      </h5>
                      <div className={`${montserrat.className} bg-clip-text text-transparent bg-gradient-to-b from-[#D1A741] to-[#b58b29]/20 font-black text-3xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                        0{idx + 1}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-8 pt-8 border-t border-white/10 flex justify-end relative z-10">
                <Link 
                  href="/contact" 
                  className={`${montserrat.className} inline-flex items-center gap-2 text-[#D1A741] hover:text-[#fce49c] font-bold text-[12px] md:text-sm tracking-[0.15em] uppercase transition-colors group`}
                >
                  Submit a Trading Inquiry <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}