import Image from "next/image";

export default function InfrastructureShowcase() {
  return (
    <div className="relative group">
      {/* Main Image Container */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#cea741]/20 transition-transform duration-700 hover:scale-[1.02]">
        <Image
          src="/Images/About.png"
          alt="Main Facility"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        {/* Subtle Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b211d]/30 to-transparent" />
      </div>

      {/* Decorative Gold Line */}
      <div className="absolute -z-10 top-1/2 -right-10 w-40 h-[2px] bg-[#cea741]/30 hidden xl:block" />
    </div>
  );
}
