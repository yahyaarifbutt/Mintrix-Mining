"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"] 
});

export default function TradingHero() {
  return (
    // Reduced pt-28 to pt-12, and lg:pt-32 to lg:pt-16
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D1A741]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1A741] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1A741]"></span>
            </span>
            <span className={`${montserrat.className} text-[#b88c2b] text-[10px] font-bold tracking-[0.25em] uppercase`}>
              Trading Overview
            </span>
          </div>

          {/* Headline */}
          <h1 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#010301] tracking-tight leading-[1.15]`}>
            Buy Directly From the Source<br />
            <span className="text-[#D1A741]">
              No Broker No Guesswork
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium max-w-lg">
            Mintrix trades the commodities we mine — gold, copper, lithium, ruby, and industrial minerals. Every transaction is backed by real, in-house production, giving buyers direct access to verified supply with stable pricing and reliable delivery.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            
            {/* Solid Gold Button */}
            <Link 
              href="/pricing" 
              className={`${montserrat.className} w-full sm:w-auto text-center bg-[#D1A741] text-[#010301] px-8 py-3.5 rounded-full font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-[#e8be55] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_10px_20px_rgba(209,167,65,0.2)]`}
            >
              Request Pricing
            </Link>
            
            {/* Outlined Button */}
            <Link 
              href="/contact" 
              className={`${montserrat.className} w-full sm:w-auto text-center bg-transparent border-[1.5px] border-[#010301] text-[#010301] px-8 py-3.5 rounded-full font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-[#010301] hover:text-white hover:-translate-y-0.5 transition-all duration-300`}
            >
              Contact Us
            </Link>

          </div>
        </div>

        {/* Right Column: Featured Image */}
        <div className="relative w-full h-[400px] lg:h-[550px] mt-8 lg:mt-0">
          
          {/* Decorative Offset Border */}
          <div className="absolute inset-0 border-2 border-[#D1A741]/30 rounded-3xl translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 hidden sm:block pointer-events-none" />
          
          {/* Main Image Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100 group">
            <Image
              src="/Images/HeroTrading.jpg" 
              alt="Mintrix Trading Operations"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              priority
            />
            {/* Very subtle dark gradient at bottom for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 mix-blend-multiply" />
          </div>
          
        </div>

      </div>
    </section>
  );
}