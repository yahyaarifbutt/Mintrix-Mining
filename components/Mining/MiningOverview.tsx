import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

export default function MiningOverview() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D1A741]/5 via-transparent to-transparent opacity-70 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="space-y-4 relative">
            <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full animate-ping hidden sm:block" />
            <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full hidden sm:block" />

            <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm sm:ml-2`}>
              The Mining Standard
            </h3>

            <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] tracking-tight flex flex-col gap-1`}>
              <span>Where Raw Power Meets</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
                Surgical Precision.
              </span>
            </h2>

            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full shadow-[0_0_15px_rgba(209,167,65,0.5)] transform origin-left hover:scale-x-150 transition-transform duration-700 bg-[length:200%_auto] animate-gradient mt-2" />
          </div>

          <div className="sm:pl-6 sm:border-l-2 border-[#D1A741]/30 space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              Modern gold mining is no longer just about moving earth; it is a highly calculated science. We utilize 3D subterranean mapping and advanced seismic analytics to pinpoint rich veins before a single machine is deployed.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              By combining our proprietary technology with decades of heavy-industry expertise, we dramatically reduce operational waste, lower environmental impact, and guarantee a steady, high-volume pipeline to our refining facilities.
            </p>
          </div>
        </div>

        {/* Right: High-End Image Frame */}
        <div className="relative group p-4 sm:p-8">
          {/* Offset Gold Border */}
          <div className="absolute inset-0 border-2 border-[#D1A741]/30 rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
          
          <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-10 bg-[#0b0f0d]">
            <Image
              src="/Images/mining-site.jpg" // High quality site image
              alt="Mining Site Overview"
              fill
              className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/60 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}