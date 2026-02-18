// components/services-approach/ApproachImage.tsx

import Image from "next/image";

export default function ApproachImage() {
  return (
    <div className="w-full lg:w-1/2 relative order-2 lg:order-1 mt-10 lg:mt-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#CEA741]/5 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="relative w-full h-[500px] md:h-[650px] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-4 border-white">
        <div className="absolute inset-0 bg-[#CEA741]/10 mix-blend-overlay z-10" />

        <Image
          src="/Images/Services-3.jpg"
          alt="Mining Operations and Approach"
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
        />
      </div>

      <div className="absolute -right-4 md:-right-8 bottom-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4">
        <div className="text-center border-r border-gray-200 pr-4">
          <span className="block text-3xl font-extrabold text-[#CEA741]">
            15+
          </span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Years
          </span>
        </div>
        <div className="text-[#252723] font-bold leading-tight text-sm">
          Industry <br /> Experience
        </div>
      </div>
    </div>
  );
}
