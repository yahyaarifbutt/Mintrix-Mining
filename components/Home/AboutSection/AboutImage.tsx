import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function AboutImage() {
  return (
    <div className="relative flex justify-center lg:justify-start group perspective-1000">

      {/* 1. Offset Wireframe Box (Moves on hover for 3D effect) */}
      <div className="absolute -inset-2 border-2 border-[#D1A741]/20 rounded-3xl translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700 ease-out pointer-events-none" />

      {/* 2. Animated Gold Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D1A741] to-[#e0b84f] rounded-3xl opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-1000" />

      {/* Main Image Container */}
      <div className="relative z-10 rounded-3xl overflow-hidden border border-[#D1A741]/30 shadow-2xl transition-all duration-700 transform group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(209,167,65,0.25)]">
        
        <Image
          src="/Images/AboutSection.jpg" 
          alt="Physical Gold Mining Operations"
          width={600}
          height={700}
          className="object-cover h-[520px] w-full transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Cinematic shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/80 via-[#0b0f0d]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* 3. Floating Corporate Badge (Added for Authority & High-End aesthetic) */}
      <div className="absolute -bottom-8 -left-6 z-20 bg-[#0b0f0d]/95 backdrop-blur-md border border-[#D1A741]/30 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-4 transform transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-105 group-hover:border-[#D1A741]">
        <div className="p-3 bg-[#D1A741]/10 rounded-full">
          <ShieldCheck className="w-8 h-8 text-[#D1A741]" />
        </div>
        <div>
          <p className="text-white text-sm font-bold tracking-wide">Global Authority</p>
          <p className="text-[#D1A741] text-xs font-medium uppercase tracking-wider mt-0.5">Certified Operations</p>
        </div>
      </div>

    </div>
  );
}