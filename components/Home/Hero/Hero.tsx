import Image from "next/image";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/Images/Hero.png"
        alt="Heavy Industrial Excavation in Kenya"
        fill
        priority
        className="object-cover brightness-110 contrast-110"
      />

      {/* Soft Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f0d]/60 via-[#0b0f0d]/40 to-[#0b0f0d]/20" />

      {/* Subtle gold atmosphere glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D1A741]/10 blur-3xl rounded-full pointer-events-none" />

      {/* Slight bottom fade (very soft) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6">
        <div className="max-w-6xl mx-auto w-full">
          <HeroText />
        </div>
      </div>
    </section>
  );
}