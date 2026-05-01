import { Montserrat } from "next/font/google";
import ServiceCard from "./ServiceCard";
import { servicesList } from "./servicesData";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function ServicesSection() {
  return (
    // CHANGED: Separated py into pt (padding-top) and pb (padding-bottom) to tighten the bottom
    <section className="relative w-full bg-white pt-16 lg:pt-20 pb-8 lg:pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D1A741]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 space-y-4">
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] tracking-tight`}>
            Active Mining <span className="text-[#D1A741]">Operations</span>
          </h2>
          <p className={`${montserrat.className} text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-regular`}>
            Our active mining operations in Kenya drive our global commodity supply chain.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D1A741] to-[#e0b84f] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(209,167,65,0.4)]" />
        </div>

        {/* CHANGED: Removed mb-12 from this div to stop pushing the About section down */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              desc={service.desc} 
              location={service.location}
              fact={service.fact}
              image={service.image}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}