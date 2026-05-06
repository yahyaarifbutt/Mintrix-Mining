// app/commodity-trading/gemstones/ruby/page.tsx
import { Metadata } from "next";
import RubyHero from "@/components/Ruby/RubyHero";
import RubySupply from "@/components/Ruby/RubySupply";
import RubyDocumentation from "@/components/Ruby/RubyDocumentation";
import RubyBuyers from "@/components/Ruby/RubyBuyers";
import RubyPricing from "@/components/Ruby/RubyPricing";

export const metadata: Metadata = {
  title: "Ruby Gemstone Trading | Mintrix — Natural East African Rubies",
  description: "Buy natural rubies direct from East African mining operations. Mintrix supplies rough, calibrated, and semi-processed rubies with certified provenance to gem dealers and jewelers worldwide.",
  keywords: "East African ruby supplier, buy natural ruby wholesale, ruby gemstone trading, African ruby origin certificate",
};

export default function RubyTradingPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#D1A741]/30 selection:text-white">
      <RubyHero />
      <RubySupply />
      <RubyDocumentation />
      <RubyBuyers />
      <RubyPricing />
    </main>
  );
}