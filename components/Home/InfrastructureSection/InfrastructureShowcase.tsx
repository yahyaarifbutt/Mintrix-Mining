import Image from "next/image";
import { ShieldCheck, Activity } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["600", "700", "800"] 
});

export default function InfrastructureShowcase() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:ml-auto mt-8 lg:mt-0">
      
      {/* Main Image Container */}
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl group">
        <Image
          src="/Images/HomeInfra.jpg" // Keep your main image here
          alt="Mintrix Global Facility"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
        />
        {/* Deep Vignette for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      </div>

      {/* Floating UI Element 1: Top Right (Operations Status) */}
      {/* Tucked in closer to the image and slightly scaled down */}
      <div className="absolute top-6 -right-3 md:-right-6 bg-white p-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-3 animate-[bounce_4s_infinite] delay-100">
        <div className="bg-green-100 p-2 rounded-full">
          <Activity className="w-4 h-4 text-green-600" />
        </div>
        <div>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Status</p>
          <p className={`${montserrat.className} text-xs font-bold text-gray-900`}>Active 24/7</p>
        </div>
      </div>

      {/* Floating UI Element 2: Bottom Left (Security Badge) */}
      {/* Tucked in closer to the image and slightly scaled down */}
      <div className="absolute -bottom-5 -left-3 md:-left-6 bg-[#0b0f0d] p-4 rounded-xl shadow-[0_15px_30px_rgba(209,167,65,0.2)] border border-[#D1A741]/20 flex items-start gap-3">
        <div className="bg-[#D1A741]/10 p-2.5 rounded-lg border border-[#D1A741]/30 text-[#D1A741]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <p className={`${montserrat.className} text-lg font-extrabold text-white`}>Tier-1</p>
          <p className="text-xs text-gray-400 mt-0.5">Asset Security</p>
        </div>
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute -z-10 bottom-8 -right-6 w-24 h-24 bg-[#D1A741]/20 blur-2xl rounded-full" />
      <div className="absolute -z-10 top-1/2 -right-12 w-24 h-[2px] bg-gradient-to-r from-[#D1A741] to-transparent hidden xl:block" />
    </div>
  );
}