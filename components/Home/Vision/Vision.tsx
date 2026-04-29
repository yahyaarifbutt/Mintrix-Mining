import VisionHeader from "./VisionHeader";
import VisionPillars from "./VisionPillars";

export default function Vision() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Structural Accent: Subtle vertical line representing a "Timeline" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-[#D1A741]/10 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <VisionHeader />
        <VisionPillars />
      </div>
    </section>
  );
}