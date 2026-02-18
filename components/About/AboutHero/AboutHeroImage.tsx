import Image from "next/image";

export default function AboutHeroImage() {
  return (
    <div className="relative group">
      
      <div className="absolute -inset-4 bg-[#D1A741]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-[#D1A741]/20">
        <Image
          src="/Images/mining-infra.jpg"
          alt="Mining Operations"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

    </div>
  );
}
