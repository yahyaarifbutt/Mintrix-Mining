// app/commodity-trading/metals/gold/page.tsx
import { Metadata } from "next";
import GoldHero from "@/components/Gold/GoldHero";
import GoldSupply from "@/components/Gold/GoldSupply";
import GoldDocumentation from "@/components/Gold/GoldDocumentation";
import GoldBuyers from "@/components/Gold/GoldBuyers";
import GoldPricing from "@/components/Gold/GoldPricing";

export const metadata: Metadata = {
  title: "Gold Trading & Supply | Mintrix — Direct Mine Source, Kenya",
  description: "Buy gold directly from Mintrix — an active gold mining company in Kenya. We supply raw ore, doré, and refined gold to refiners, traders, and manufacturers worldwide.",
  keywords: "gold supplier Kenya, buy gold from mine, gold doré bar trading, African gold export",
};

export default function GoldTradingPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#D1A741]/30 selection:text-white">
      <GoldHero />
      <GoldSupply />
      <GoldDocumentation />
      <GoldBuyers />
      <GoldPricing />
    </main>
  );
}