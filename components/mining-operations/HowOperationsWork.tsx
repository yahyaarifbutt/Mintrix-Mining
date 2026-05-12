"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Pickaxe, Factory, Truck, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp } from "./animations";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function HowOperationsWork() {
  return (
    <section className="w-full bg-[#0b0f0d] py-20 lg:py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4`}>
            How Our Operations Work
          </h3>
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6`}>
            End-to-End Mining Process
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every mineral we trade starts here — at the mine. Our four-stage operational process ensures that what reaches the buyer has been handled with full in-house oversight at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "Stage 1",
              title: "Exploration & Survey",
              icon: Compass,
              desc: "Before extraction begins, our geology teams conduct detailed site assessments — analyzing rock formations, mineral density, and extraction viability.",
              bullets: ["Geological mapping", "Grade estimation", "Viability assessment", "Extraction plan"]
            },
            {
              step: "Stage 2",
              title: "Mining & Extraction",
              icon: Pickaxe,
              desc: "Extraction is carried out by trained site crews using modern equipment suited to hard rock and alluvial mining conditions.",
              bullets: ["Mechanized extraction", "Safety protocols", "Output monitoring", "Minimal disruption"]
            },
            {
              step: "Stage 3",
              title: "Processing & Refining",
              icon: Factory,
              desc: "Raw ore is processed on or near site to upgrade mineral grade before shipment, improving purity consistency and reducing logistics cost.",
              bullets: ["Ore crushing & sorting", "Grade upgrading", "Quality testing", "Custom packaging"]
            },
            {
              step: "Stage 4",
              title: "Supply Chain & Delivery",
              icon: Truck,
              desc: "From site to final delivery, Mintrix manages logistics through established supply chain networks handling export compliance.",
              bullets: ["Export documentation", "Freight coordination", "Tracking confirmation", "Inventory management"]
            }
          ].map((stage, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#141a17] border border-white/5 rounded-2xl p-8 hover:border-[#D1A741]/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-[120px] font-black text-white/[0.02] group-hover:text-[#D1A741]/5 transition-colors z-0 select-none">
                {i + 1}
              </div>
              <div className="relative z-10">
                <div className="bg-[#D1A741]/10 border border-[#D1A741]/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#D1A741] group-hover:bg-[#D1A741] group-hover:text-[#0b0f0d] transition-colors">
                  <stage.icon className="w-5 h-5" />
                </div>
                <h4 className={`${montserrat.className} text-[#D1A741] text-xs font-bold uppercase tracking-wider mb-2`}>{stage.step}</h4>
                <h3 className={`${montserrat.className} text-xl font-bold text-white mb-4`}>{stage.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{stage.desc}</p>
                <ul className="space-y-3">
                  {stage.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D1A741] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <NextLink href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#D1A741] transition-colors border-b border-white/30 hover:border-[#D1A741] pb-1">
            Explore Our Full Supply Chain Process <ArrowRight className="w-4 h-4" />
          </NextLink>
        </div>
      </div>
    </section>
  );
}