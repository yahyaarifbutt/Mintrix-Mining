"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { CheckCircle, Download } from "lucide-react";
import ClientAnimations from "@/components/Gold/ClientAnimations";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LithiumWhyMintrix() {
  return (
    <section className="py-20 px-6 bg-[#050505] relative overflow-hidden">
      
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D1A741]/10 blur-[140px] opacity-40" />

      <div className="max-w-7xl mx-auto">
        <ClientAnimations delay={0.2}>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className={`${montserrat.className} text-3xl md:text-5xl font-black text-white leading-tight mb-5`}>
                Why Lithium from <br />
                <span className="text-[#D1A741]">Mintrix</span>
              </h2>

              <p className="text-gray-400 text-base md:text-lg font-medium max-w-xl mb-8 leading-relaxed">
                Africa is one of the world&apos;s most significant lithium-bearing regions, and East African deposits are increasingly in focus as battery manufacturers diversify away from single-country supply dependency. Mintrix provides:
              </p>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D1A741] to-transparent opacity-40 mb-8" />

              <div className="space-y-5">
                {[
                  { title: "Traceable origin documentation", desc: "For ESG-compliant procurement." },
                  { title: "Scalable volume", desc: "Tied to active mining expansion." },
                  { title: "Direct procurement", desc: "No intermediary margin." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <CheckCircle className="w-5 h-5 text-[#D1A741] mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div className="relative">
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

            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#111] to-[#050505] border border-[#D1A741]/20 rounded-[28px] p-7 md:p-9 shadow-[0_20px_80px_-20px_rgba(209,167,65,0.25)] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,167,65,0.15),transparent_60%)] opacity-60" />
                <div className="relative z-10">
                  <div className="mb-8">
                    <p className="text-gray-500 text-xs tracking-[0.25em] uppercase font-bold mb-2">
                      Secure Your Pipeline
                    </p>
                    <p className={`${montserrat.className} text-2xl md:text-3xl font-extrabold text-[#D1A741]`}>
                      Partner with Mintrix
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className={`${montserrat.className} block text-center bg-[#D1A741] text-black px-6 py-4 rounded-xl font-extrabold text-[12px] tracking-[0.15em] uppercase hover:scale-[1.02] hover:bg-[#f0d98a] transition-all duration-300`}
                    >
                      Request Lithium Price Quote
                    </Link>

                    <Link
                      href="/contact"
                      className={`${montserrat.className} flex justify-center items-center gap-3 bg-black border border-white/10 text-white px-6 py-4 rounded-xl font-extrabold text-[12px] tracking-[0.15em] uppercase hover:bg-white/5 transition-all duration-300`}
                    >
                      <Download className="w-4 h-4 text-[#D1A741]" />
                      Discuss Long-Term Supply Agreement
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