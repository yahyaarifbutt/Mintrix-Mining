import MiningHero from "@/components/Mining/MiningHero";
import MiningOverview from "@/components/Mining/MiningOverview";
import ActiveSites from "@/components/Mining/ActiveSites";
import MiningProcess from "@/components/Mining/MiningProcess";
import OperationalAdvantages from "@/components/Mining/OperationalAdvantages";
import MiningCTA from "@/components/Mining/MiningCTA";

// SEO Metadata for the Mining Page
export const metadata = {
  title: "Mining Operations | Mintrix — Gold & Mineral Extraction in Kenya",
  description: "Mintrix operates active gold and mineral mining sites in Kenya. We manage the full extraction and processing pipeline — supplying directly to global buyers with verified quality and consistent output.",
  keywords: "gold mining operations Kenya, mineral extraction company, direct mine supply",
};

export default function MiningPage() {
  return (
    <main className="w-full bg-[#0b0f0d] min-h-screen overflow-x-hidden">
      <MiningHero />              {/* Dark - Hero Section */}
      <MiningOverview />          {/* White - Operations Overview */}
      <ActiveSites />             {/* Light/Gray - Active Mining Sites */}
      <MiningProcess />           {/* Dark - How Our Operations Work */}
      <OperationalAdvantages />   {/* White - Operational Advantages */}
      <MiningCTA />               {/* Dark - Call to Action & Internal Links */}
    </main>
  );
}