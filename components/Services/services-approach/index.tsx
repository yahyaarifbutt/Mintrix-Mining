// components/services-approach/index.tsx

import SectionHeader from "./SectionHeader";
import FeaturesList from "./FeaturesList";
import ApproachImage from "./ApproachImage";


export default function ServiceApproach() {
  return (
    <section className="w-full bg-[#fafafa] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <ApproachImage />

          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10">
            <SectionHeader />
            <FeaturesList />
          </div>

        </div>
      </div>
    </section>
  );
}
