import { Montserrat } from "next/font/google";
import { Factory, Cpu, Building2, Battery, Globe } from "lucide-react";
import ClientAnimations from "./ClientAnimations";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function CopperBuyers() {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c78b2e] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto">
        <ClientAnimations delay={0.1} className="mb-12 md:mb-16 text-center">
          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-[#0a0a0a] tracking-tight`}>
            Who Buys Our Copper
          </h2>
        </ClientAnimations>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ClientAnimations delay={0.2} className="lg:col-span-2">
            <div className="group h-full bg-gradient-to-br from-white via-[#fffaf0] to-white border border-[#c78b2e]/20 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(199,139,46,0.25)] hover:border-[#c78b2e]/50 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top_left,rgba(199,139,46,0.15),transparent_60%)]" />
              <Factory className="w-10 h-10 text-[#c78b2e] mb-5 transition-transform duration-300 group-hover:scale-110" />
              <h3 className={`${montserrat.className} text-xl font-extrabold text-[#0a0a0a]`}>
                Metal processors and smelters
              </h3>
            </div>
          </ClientAnimations>

          {[
            { icon: Cpu, title: "Electronics and electrical manufacturers" },
            { icon: Building2, title: "Construction material suppliers" },
            { icon: Battery, title: "EV and energy storage supply chain buyers" },
            { icon: Globe, title: "International commodity trading firms" },
          ].map((item, i) => (
            <ClientAnimations key={i} delay={0.3 + i * 0.08}>
              <div className="group h-full bg-gradient-to-br from-white via-[#fffaf0] to-white border border-[#c78b2e]/20 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(199,139,46,0.25)] hover:border-[#c78b2e]/50 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top_left,rgba(199,139,46,0.15),transparent_60%)]" />
                <item.icon className="w-10 h-10 text-[#c78b2e] mb-5 transition-transform duration-300 group-hover:scale-110" />
                <h3 className={`${montserrat.className} text-xl font-bold text-[#0a0a0a]`}>
                  {item.title}
                </h3>
              </div>
            </ClientAnimations>
          ))}
        </div>
      </div>
    </section>
  );
}