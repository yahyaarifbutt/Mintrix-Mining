import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["700", "800"] 
});

export default function MissionImage() {
  return (
    <div className="relative group p-4 lg:p-8">
      
      {/* Decorative Offset Gold Frame */}
      <div className="absolute inset-0 border-2 border-[#D1A741]/30 rounded-[2.5rem] transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 bg-[#0b0f0d]">
        <Image
          src="/Images/mission.jpg" 
          alt="Advanced Mining Infrastructure"
          fill
          className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
        />
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/70 via-transparent to-transparent" />
      </div>

      {/* Floating Operational Badge */}
      <div className="absolute bottom-10 -left-6 z-20 bg-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 animate-bounce-slow flex items-center gap-4 hidden sm:flex">
        <div className="w-12 h-12 rounded-full bg-[#0b0f0d] flex items-center justify-center">
          <span className="text-[#D1A741] font-bold text-xl">0%</span>
        </div>
        <div>
          <p className={`${montserrat.className} text-xs uppercase tracking-widest text-gray-400 mb-1`}>
            Counterparty Risk
          </p>
          <p className="text-[#0b0f0d] font-bold text-sm">
            Unbroken Supply Chain
          </p>
        </div>
      </div>

    </div>
  );
}