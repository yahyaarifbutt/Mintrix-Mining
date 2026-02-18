// components/services-approach/SectionHeader.tsx

export default function SectionHeader() {
  return (
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#CEA741]" />
        <span className="text-[#CEA741] text-xs font-bold tracking-widest uppercase">
          Why Partner With Us
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#252723] leading-tight tracking-tight">
        Setting the Standard in <br className="hidden md:block" />
        <span className="text-[#CEA741]">Mining Excellence</span>
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        Delivering high-quality services requires more than just heavy machinery.
        It requires a relentless commitment to innovation, safety, and the environment.
      </p>
    </div>
  );
}
