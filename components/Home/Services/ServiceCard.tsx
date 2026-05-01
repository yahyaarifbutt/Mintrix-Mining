import Image from "next/image";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
  icon: ReactNode;
  location: string;
  fact: string;
}

export default function ServiceCard({ title, desc, image, icon, location, fact }: ServiceCardProps) {
  return (
    <div className="group relative w-full aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_10px_30px_rgba(209,167,65,0.2)] transition-all duration-500 bg-gray-100">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gray-900" /> 
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
        />
      </div>

      {/* Adjusted gradient for better readability with the new text */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050706] via-[#050706]/70 to-transparent transition-opacity duration-500" />
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D1A741]/50 rounded-2xl transition-colors duration-500 pointer-events-none z-20" />

      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center z-10">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-[#D1A741] group-hover:bg-[#D1A741] text-white group-hover:text-[#0b0f0d] rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:-translate-y-2">
          {icon}
        </div>
        
        {/* Location Tag */}
        <div className={`${montserrat.className} flex items-center justify-center gap-1.5 text-[#D1A741] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 transform group-hover:-translate-y-1 transition-transform duration-300`}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>

        <h3 className={`${montserrat.className} text-white text-lg sm:text-xl font-bold leading-tight group-hover:text-[#D1A741] transition-colors duration-300 transform group-hover:-translate-y-1 mb-2`}>
          {title}
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed transition-colors duration-300 transform group-hover:-translate-y-1 line-clamp-2 mb-4">
          {desc}
        </p>

        {/* Geological Fact Box */}
        <div className="w-full bg-[#D1A741]/10 border border-[#D1A741]/30 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
          <p className={`${montserrat.className} text-[#f5d98a] text-xs font-medium leading-snug flex items-start gap-2 text-left`}>
            <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#D1A741]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {fact}
          </p>
        </div>
      </div>
    </div>
  );
}