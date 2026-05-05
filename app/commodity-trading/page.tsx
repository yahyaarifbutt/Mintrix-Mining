import TradingHero from "@/components/Trading/TradingHero";
import TradingOverview from "@/components/Trading/TradingOverview";
import TradingAdvantages from "@/components/Trading/TradingAdvantages";
import CommodityPortfolio from "@/components/Trading/CommodityPortfolio";
import MarketPricing from "@/components/Trading/MarketPricing";

export default function TradingPage() {
  return (
    <main className="min-h-screen bg-[#010301] selection:bg-[#D1A741]/30 selection:text-white">
      <TradingHero />
      <TradingOverview />
      <TradingAdvantages />
      <CommodityPortfolio />
      <MarketPricing />
    </main>
  );
}