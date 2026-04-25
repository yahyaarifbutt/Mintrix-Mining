import Image from "next/image";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });

interface ServiceCardProps {
  title: string;
  image: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, image, icon }: ServiceCardProps) {
  return (
    <div className="group relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_10px_30px_rgba(209,167,65,0.2)] transition-all duration-500 bg-gray-100">
      
      {/* Background Image with smooth hover scale */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback color if image is missing */}
        <div className="absolute inset-0 bg-gray-800" /> 
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
      </div>

      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/90 via-[#050706]/40 to-transparent transition-opacity duration-500" />
      
      {/* Subtle Gold Border on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D1A741]/50 rounded-2xl transition-colors duration-500 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
        {/* Icon Container */}
        <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-[#D1A741] group-hover:bg-[#D1A741] text-white group-hover:text-[#0b0f0d] rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:-translate-y-2">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className={`${montserrat.className} text-white text-sm sm:text-base font-semibold leading-tight group-hover:text-[#D1A741] transition-colors duration-300 transform group-hover:-translate-y-1`}>
          {title}
        </h3>
      </div>
    </div>
  );
}