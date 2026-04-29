import MiningHero from "@/components/Mining/MiningHero";
import MiningOverview from "@/components/Mining/MiningOverview";
import MiningCapabilities from "@/components/Mining/MiningCapabilities";

// SEO Metadata for the Mining Page
export const metadata = {
  title: "Gold Mining Operations | Mintrix World",
  description: "End-to-end industrial gold extraction, utilizing AI-driven geological intelligence and state-of-the-art heavy machinery for maximum yield and purity.",
};

export default function MiningPage() {
  return (
    <main className="w-full bg-[#0b0f0d] min-h-screen overflow-x-hidden">
      <MiningHero />
      <MiningOverview />
      <MiningCapabilities />
    </main>
  );
}