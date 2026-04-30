import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800", "900"] 
});

export default function MiningOverview() {
  return (
    <section className="bg-white py-12 lg:py-16 px-6 relative overflow-hidden">
      
      {/* Custom Keyframe Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}} />

      {/* Massive Background Watermark */}
      <div className="absolute -top-4 left-10 select-none pointer-events-none animate-float-slow">
        <h2 className={`${montserrat.className} text-[15rem] md:text-[20rem] font-black text-black/[0.02] leading-none tracking-tighter`}>
          01
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Asymmetrical Image Frame */}
          <div className="lg:col-span-5 relative group w-full">
            {/* Structural Background Accent */}
            <div className="absolute -left-6 -bottom-6 w-full h-full bg-gray-50 border border-gray-200 rounded-none z-0 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2" />
            
            {/* Taller Image Container (4/5 ratio, min 480px) */}
            <div className="relative w-full aspect-square lg:aspect-[4/5] min-h-[480px] z-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-700 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-0 border border-black/10 z-20 pointer-events-none" />
              
              <Image
                src="/Images/gold-mining.png"
                alt="Mining Site Overview"
                fill
                className="object-cover filter contrast-[1.1] grayscale-[10%] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Overlapping Floating Element */}
            <div className="absolute -right-8 bottom-12 z-30 bg-white border border-gray-100 border-t-2 border-t-[#D1A741] p-6 shadow-2xl hidden md:block animate-float-medium hover:scale-105 transition-transform duration-300">
              <p className={`${montserrat.className} text-[#D1A741] text-3xl font-black`}>99.9%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">Extraction Purity</p>
            </div>
          </div>

          {/* Right: Content Structure */}
          <div className="lg:col-span-7 lg:pl-10 space-y-10">
            <div className="space-y-4 group">
              <h3 className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.3em] uppercase text-xs flex items-center gap-3`}>
                <span className="w-8 h-[2px] bg-[#D1A741] transition-all duration-500 group-hover:w-16" />
                The Mining Standard
              </h3>

              {/* Headline with Golden Gradient */}
              <h2 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]`}>
                Raw Power Meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1A741] via-[#F4D068] to-[#B38D30]">
                  Surgical Precision
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {/* Feature Block 1 */}
              <div className="space-y-3 relative group/card p-6 -ml-6 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] cursor-default">
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D1A741]/40 group-hover/card:border-[#D1A741] group-hover/card:-translate-x-1 group-hover/card:-translate-y-1 transition-all duration-300" />
                
                <h4 className={`${montserrat.className} text-gray-900 font-bold text-lg pl-3`}>3D Subterranean</h4>
                <p className="text-sm leading-relaxed text-gray-600 font-medium pl-3">
                  Modern gold mining is no longer just about moving earth; it is a highly calculated science. We utilize advanced seismic analytics to pinpoint rich veins before a single machine is deployed.
                </p>
              </div>

              {/* Feature Block 2 */}
              <div className="space-y-3 relative group/card p-6 -ml-6 sm:-ml-0 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] cursor-default">
                 <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D1A741]/40 group-hover/card:border-[#D1A741] group-hover/card:-translate-x-1 group-hover/card:-translate-y-1 transition-all duration-300" />
                 
                <h4 className={`${montserrat.className} text-gray-900 font-bold text-lg pl-3`}>Zero-Waste Output</h4>
                <p className="text-sm leading-relaxed text-gray-600 font-medium pl-3">
                  Combining our proprietary tech with heavy-industry expertise, we dramatically reduce operational waste and guarantee a steady, high-volume pipeline to our refining facilities.
                </p>
              </div>
            </div>

            {/* Footer Divider / Trust Indicators */}
            <div className="pt-8 flex items-center gap-6 border-t border-gray-200">
              <div className="flex -space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1" />
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 delay-75" />
                <div className="w-10 h-10 rounded-full bg-[#D1A741] border-2 border-white shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 delay-150">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold hover:text-[#D1A741] transition-colors duration-300 cursor-pointer">
                Backed by Elite Engineers
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}