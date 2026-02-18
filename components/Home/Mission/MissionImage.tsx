import Image from "next/image";

export default function MissionImage() {
  return (
    <div className="relative group">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#cea741]/20 transition-transform duration-700 hover:scale-[1.02]">
        <Image
          src="/Images/Mission.jpg"  // ✅ Use string path from public folder
          alt="Our Mission"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b211d]/30 to-transparent" />
      </div>

      {/* Decorative Line */}
      <div className="absolute -z-10 top-1/2 -right-10 w-40 h-[2px] bg-[#cea741]/30 hidden xl:block" />
    </div>
  );
}
