import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

const visionPoints = [
  {
    number: "01",
    title: "Ethical Extraction",
    desc: "Pioneering sustainable mining practices by optimizing yield technology and prioritizing community development in every region we operate."
  },
  {
    number: "02",
    title: "Market Liquidity",
    desc: "Bridging the gap between raw extraction and institutional buyers, ensuring seamless, high-volume gold trading with competitive pricing."
  },
  {
    number: "03",
    title: "Verifiable Provenance",
    desc: "Guaranteeing the integrity of our supply chain with full transparency from the mine to the vault, backed by world-class refining standards."
  }
];

export default function VisionPillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {visionPoints.map((item, i) => (
        <div 
          key={i} 
          className="group relative p-10 bg-white border border-gray-100 hover:border-[#D1A741]/40 hover:shadow-[0_10px_25px_rgba(209,167,65,0.1)] transition-all duration-500 rounded-xl"
        >
          {/* Large Background Number */}
          <div className={`${montserrat.className} absolute top-4 right-6 text-6xl font-black text-[#0b0f0d]/5 group-hover:text-[#D1A741]/10 transition-colors`}>
            {item.number}
          </div>

          <div className="space-y-6 relative z-10">
            <h4 className={`${montserrat.className} text-xl font-bold text-[#0b0f0d] uppercase tracking-wider`}>
              {item.title}
            </h4>
            
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>

            {/* Bottom Accent Line - Updated to Gradient */}
            <div className="w-0 h-1 bg-gradient-to-r from-[#D1A741] to-[#e8c678] group-hover:w-full transition-all duration-500 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}