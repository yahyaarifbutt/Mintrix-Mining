import Link from "next/link";
import { Montserrat } from "next/font/google";
import ServiceCard from "./ServiceCard";
import { servicesList } from "./servicesData";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 overflow-hidden">
      
      {/* Subtle Gold Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D1A741]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] tracking-tight`}>
            Services We <span className="text-[#D1A741]">Provide</span>
          </h2>
          <p className={`${montserrat.className} text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-regular`}>
            Comprehensive gold mining and trading solutions tailored for global markets and strategic investments.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D1A741] to-[#e0b84f] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(209,167,65,0.4)]" />
        </div>

        {/* Services Grid - Optimized for 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              icon={service.icon}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/services"
            className={`
              ${montserrat.className}
              group flex items-center justify-center gap-2
              bg-gradient-to-r from-[#D1A741] to-[#e0b84f]
              text-[#0b0f0d] 
              px-8 py-3.5
              rounded-full
              font-bold text-sm tracking-wide
              shadow-[0_10px_20px_rgba(209,167,65,0.2)]
              hover:shadow-[0_10px_30px_rgba(209,167,65,0.4)]
              hover:-translate-y-1
              transition-all duration-300
            `}
          >
            View All Services
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}