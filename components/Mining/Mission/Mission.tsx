import MissionContent from "./MissionContent";
import MissionImage from "./MissionImage";

export default function Mission() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Subtle Gold Background Glow - Moved to left to contrast with Vision section */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D1A741]/5 via-transparent to-transparent opacity-70 pointer-events-none transform -translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        <div className="lg:col-span-6 xl:col-span-5">
          <MissionContent />
        </div>
        <div className="lg:col-span-6 xl:col-span-7">
          <MissionImage />
        </div>
      </div>
    </section>
  );
}