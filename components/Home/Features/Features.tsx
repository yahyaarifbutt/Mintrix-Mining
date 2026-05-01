import FeaturesHeader from "./FeaturesHeader";
import FeatureGrid from "./FeatureGrid";


export default function Features() {
  return (
    <section className="bg-[#010301] py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D1A741]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <FeaturesHeader />
        <FeatureGrid />
        
      </div>
    </section>
  );
}
