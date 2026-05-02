"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { ShieldCheck } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function SecuritySection() {
  const protections = [
    "Physical Asset Backing (Gold, Title Deeds)",
    "Professional Custody in Secure Vaults",
    "Conflict-Free Sourcing & Full Compliance"
  ];

  return (
    <section className="py-20 px-6 bg-[#0b0f0d] relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D1A741]/5 to-transparent pointer-events-none" />
       <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/5 backdrop-blur-xl p-12 rounded-[3rem] text-center">
          <ShieldCheck size={48} className="text-[#D1A741] mx-auto mb-6" />
          <h2 className={`${montserrat.className} text-white text-3xl font-bold mb-4`}>Security & Investor Protection</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Every dollar is backed. Every transaction is documented. BricketX issues documentation backed by assets you can verify.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {protections.map((item, i) => (
              <div key={i} className="flex gap-3 text-xs font-bold text-gray-300 border-l border-[#D1A741] pl-4">
                {item}
              </div>
            ))}
          </div>
       </div>
    </section>
  );
}