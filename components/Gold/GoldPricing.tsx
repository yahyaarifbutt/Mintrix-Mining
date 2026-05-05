"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { CheckCircle, Download } from "lucide-react";
import ClientAnimations from "./ClientAnimations";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function GoldPricing() {
  return (
    <section className="py-20 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* subtle gold radial glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D1A741]/10 blur-[140px] opacity-40" />

      <div className="max-w-7xl mx-auto">
        <ClientAnimations delay={0.2}>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <p className="text-[#D1A741] text-[11px] tracking-[0.3em] uppercase font-bold mb-3">
                Pricing Framework
              </p>

              <h2
                className={`${montserrat.className} text-3xl md:text-5xl font-black text-white leading-tight mb-5`}
              >
                Transparent Gold <br />
                <span className="text-[#D1A741]">Market Pricing</span>
              </h2>

              <p className="text-gray-400 text-base md:text-lg font-medium max-w-xl mb-8">
                Our pricing model is anchored to globally recognized benchmarks,
                ensuring institutional-grade transparency and consistency across
                every transaction.
              </p>

              {/* divider */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D1A741] to-transparent opacity-40 mb-8" />

              {/* METRICS */}
              <div className="space-y-5">
                {[
                  { title: "Purity & Grade", desc: "Independently verified assay for every lot." },
                  { title: "Volume Scope", desc: "Dynamic pricing aligned with order scale." },
                  { title: "Delivery Terms", desc: "Flexible structures: FOB, CIF, ex-works." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">

                    <CheckCircle className="w-5 h-5 text-[#D1A741] mt-1 transition-transform duration-300 group-hover:scale-110" />

                    <div className="relative">
                      {/* subtle gold hover line */}
                      <div className="absolute -left-4 top-2 w-[2px] h-0 bg-[#D1A741] group-hover:h-full transition-all duration-300" />

                      <h4 className={`${montserrat.className} text-white text-[17px] font-bold`}>
                        {item.title}
                      </h4>

                      <p className="text-gray-300 text-[16px] font-medium leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">
              
              <div className="relative bg-gradient-to-br from-[#111] to-[#050505] border border-[#D1A741]/20 rounded-[28px] p-7 md:p-9 shadow-[0_20px_80px_-20px_rgba(209,167,65,0.25)] overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,167,65,0.15),transparent_60%)] opacity-60" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <p className="text-gray-500 text-xs tracking-[0.25em] uppercase font-bold mb-2">
                      Benchmark
                    </p>
                    <p className={`${montserrat.className} text-2xl md:text-3xl font-extrabold text-[#D1A741]`}>
                      LBMA Spot Price
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className={`${montserrat.className} block text-center bg-[#D1A741] text-black px-6 py-4 rounded-xl font-extrabold text-[12px] tracking-[0.15em] uppercase hover:scale-[1.02] hover:bg-[#f0d98a] transition-all duration-300`}
                    >
                      Request Price Quote
                    </Link>

                    <Link
                      href="/contact"
                      className={`${montserrat.className} flex justify-center items-center gap-3 bg-black border border-white/10 text-white px-6 py-4 rounded-xl font-extrabold text-[12px] tracking-[0.15em] uppercase hover:bg-white/5 transition-all duration-300`}
                    >
                      <Download className="w-4 h-4 text-[#D1A741]" />
                      Contact our team
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#D1A741] to-transparent opacity-30" />
            </div>

          </div>
        </ClientAnimations>
      </div>
    </section>
  );
}