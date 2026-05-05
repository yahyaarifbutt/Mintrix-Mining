import { Montserrat } from "next/font/google";
import { Factory, Globe, Gem, Building2, UserCircle } from "lucide-react";
import ClientAnimations from "./ClientAnimations";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function GoldBuyers() {
  return (
    <section className="py-20 px-6 bg-white relative">
      {/* top gold line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c78b2e] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <ClientAnimations delay={0.1} className="mb-12 md:mb-16 text-center">
          <h2
            className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-[#0a0a0a] tracking-tight`}
          >
            Who Buys Our Gold
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg font-medium max-w-xl mx-auto">
            Our supply chain is optimized for institutional and high-volume
            commercial buyers requiring strict compliance and steady output.
          </p>
        </ClientAnimations>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large Card */}
          <ClientAnimations delay={0.2} className="lg:col-span-2">
            <div className="group h-full bg-gradient-to-br from-white via-[#fffaf0] to-white border border-[#c78b2e]/20 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(199,139,46,0.25)] hover:border-[#c78b2e]/50 relative overflow-hidden">

              {/* gold glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top_left,rgba(199,139,46,0.15),transparent_60%)]" />

              <Factory className="w-10 h-10 text-[#c78b2e] mb-5 transition-transform duration-300 group-hover:scale-110" />

              <h3 className={`${montserrat.className} text-xl font-extrabold text-[#0a0a0a] mb-2`}>
                Gold Refineries & Smelters
              </h3>

              <p className="text-gray-700 text-[15px] font-medium leading-relaxed">
                Securing consistent Doré and raw ore inputs to maintain
                high-capacity operational throughput.
              </p>
            </div>
          </ClientAnimations>

          {/* Other Cards */}
          {[
            {
              icon: Globe,
              title: "International Traders",
              desc: "Commodity traders managing global distribution.",
            },
            {
              icon: Gem,
              title: "Jewelry Manufacturers",
              desc: "Export houses and creators needing conflict-free metals.",
            },
            {
              icon: Building2,
              title: "Central Bank-Adjacent",
              desc: "Procurement channels securing national reserves.",
            },
            {
              icon: UserCircle,
              title: "Private Buyers",
              desc: "Entities requiring highly certified origin gold.",
            },
          ].map((item, i) => (
            <ClientAnimations key={i} delay={0.3 + i * 0.08}>
              <div className="group h-full bg-gradient-to-br from-white via-[#fffaf0] to-white border border-[#c78b2e]/20 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(199,139,46,0.25)] hover:border-[#c78b2e]/50 relative overflow-hidden">

                {/* gold glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top_left,rgba(199,139,46,0.15),transparent_60%)]" />

                <item.icon className="w-10 h-10 text-[#c78b2e] mb-5 transition-transform duration-300 group-hover:scale-110" />

                <h3 className={`${montserrat.className} text-xl font-bold text-[#0a0a0a] mb-2`}>
                  {item.title}
                </h3>

                <p className="text-gray-700 text-[15px] font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ClientAnimations>
          ))}
        </div>
      </div>
    </section>
  );
}