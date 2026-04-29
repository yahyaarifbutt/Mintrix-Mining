import MiningHero from "./MiningHero";
import MiningOverview from "./MiningOverview";
import MiningCapabilities from "./MiningCapabilities";

export default function MiningPage() {
  return (
    <main className="w-full bg-[#0b0f0d] min-h-screen overflow-x-hidden">
      <MiningHero />
      <MiningOverview />
      <MiningCapabilities />
    </main>
  );
}