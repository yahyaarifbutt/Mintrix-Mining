import SupportItem from "./SupportItem";
import { supportItems } from "./supportData";

export default function ContactSupport() {
  return (
    <section className="bg-white py-10 px-6 border-t border-[#CEA741]/20 relative overflow-hidden">
      {/* Subtle gold glow (adjusted position for better visibility) */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#CEA741]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section heading */}
        <div className="mb-2">
           {/* Slightly larger label as requested */}
          <h3 className="text-[#CEA741] font-bold tracking-[0.2em] uppercase text-base mb-2">
            Our Support
          </h3>
        </div>

        {/* Grid of support cards - Reduced top margin (mt-6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {supportItems.map((item, idx) => (
            <SupportItem
              key={idx}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}