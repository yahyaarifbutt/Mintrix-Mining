const visionPoints = [
  {
    number: "01",
    title: "Carbon Neutrality",
    desc: "By 2028, our goal is to operate 100% on renewable energy sources, integrating geothermal and solar power from the Rift Valley into our grid."
  },
  {
    number: "02",
    title: "Traditional Gold Brokers",
    desc: "Many investors enter the gold market through broker-based transactions, often exposed to pricing spreads and counterparty risk."
  },
  {
    number: "03",
    title: "Asset-Backed Gold Participation",
    desc: "Structured participation models supported by physical gold ownership, secure custody, and transparent operational cycles."
  }
];

export default function VisionPillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {visionPoints.map((item, i) => (
        <div 
          key={i} 
          className="group relative p-10 bg-white border border-[#252723]/10 hover:border-[#cea741] transition-all duration-500 rounded-none"
        >
          {/* Large Background Number */}
          <div className="absolute top-4 right-6 text-6xl font-black text-[#1b211d]/5 group-hover:text-[#cea741]/10 transition-colors">
            {item.number}
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-[#1b211d] uppercase tracking-wider">
              {item.title}
            </h4>
            
            <p className="text-[#252723]/70 leading-relaxed font-medium">
              {item.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="w-0 h-1 bg-[#cea741] group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      ))}
    </div>
  );
}