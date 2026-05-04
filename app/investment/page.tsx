import { Metadata } from "next";
import React from "react";
import Hero from "@/components/Investments/Hero";
import OperationsOverview from "@/components/Investments/OperationsOverview";
import PartnershipGrid from "@/components/Investments/PartnershipGrid";
import InvestmentCards from "@/components/Investments/InvestmentCards";
import ValueProposition from "@/components/Investments/ValueProposition";
import ProcessSteps from "@/components/Investments/ProcessSteps";
import SecuritySection from "@/components/Investments/SecuritySection";
import FinalCTA from "@/components/Investments/FinalCTA";

export const metadata: Metadata = {
  title: "Investment | Mintrix — Invest in Gold Mining & Commodity Trading",
  description:
    "Invest in active gold mining and commodity trading through Mintrix and BricketX. Asset-backed returns from real East African mining operations — 20–25% ROI on trading, 22%+ IRR on mining.",
  keywords: [
    "invest in gold mining",
    "commodity trading investment",
    "East Africa mining investment",
    "BricketX gold fund",
    "gold mine investment Kenya",
  ],
  alternates: {
    canonical: "/investment",
  },
};

export default function InvestmentPage() {
  return (
    <main className="bg-[#050505] overflow-hidden selection:bg-[#D1A741] selection:text-black">
      <Hero />
      <OperationsOverview />
      <PartnershipGrid />
      <InvestmentCards />
      <ProcessSteps />
      <ValueProposition />
      
      <SecuritySection />
      <FinalCTA />
    </main>
  );
}