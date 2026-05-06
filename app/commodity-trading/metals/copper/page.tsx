// app/commodity-trading/metals/copper/page.tsx
import { Metadata } from "next";
import CopperHero from "@/components/Copper/CopperHero";
import CopperSupply from "@/components/Copper/CopperSupply";
import CopperApplications from "@/components/Copper/CopperApplications";
import CopperBuyers from "@/components/Copper/CopperBuyers";
import CopperPricing from "@/components/Copper/CopperPricing";

export const metadata: Metadata = {
  title: "Copper Trading & Supply | Mintrix — Industrial Copper from East Africa",
  description: "Mintrix supplies copper concentrate and cathode to industrial buyers and traders. Sourced from East African mining operations with full documentation and reliable delivery.",
  keywords: "copper supplier East Africa, buy copper concentrate, copper cathode trading, industrial copper supply",
};

export default function CopperTradingPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#D1A741]/30 selection:text-white">
      <CopperHero />
      <CopperSupply />
      <CopperApplications />
      <CopperBuyers />
      <CopperPricing />
    </main>
  );
}