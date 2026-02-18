import AboutCTAContent from "./AboutCTAContent";
import AboutCTAButton from "./AboutCTAButton";
import GoldGlow from "./GoldGlow";

export default function AboutCTA() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-[#0b0f0d] rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-2xl border border-[#D1A741]/20 group">
          
          {/* Decorative Glow */}
          <GoldGlow />

          {/* Industrial Structural Line */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#D1A741]" />

          {/* Grid Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <AboutCTAContent />
            <AboutCTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
