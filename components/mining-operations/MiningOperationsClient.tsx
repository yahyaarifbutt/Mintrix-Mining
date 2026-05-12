"use client";

import HeroSection from "./HeroSection";
import OperationsOverview from "./OperationsOverview";
import ActiveSites from "./ActiveSites";
import HowOperationsWork from "./HowOperationsWork";
import OperationalAdvantages from "./OperationalAdvantages";
import CallToAction from "./CallToAction";

export default function MiningOperationsClient() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION (LIGHT) */}
      <HeroSection />

      {/* 2. OPERATIONS OVERVIEW (DARK) */}
      <OperationsOverview />

      {/* 3. ACTIVE MINING SITES (LIGHT) */}
      <ActiveSites />

      {/* 4. HOW OUR OPERATIONS WORK (DARK) */}
      <HowOperationsWork />

      {/* 5. OPERATIONAL ADVANTAGES (LIGHT) */}
      <OperationalAdvantages />

      {/* 6. CALL TO ACTION & LINKS (DARK) */}
      <CallToAction />
    </div>
  );
}