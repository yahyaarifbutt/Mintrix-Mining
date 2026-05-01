import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const visionPoints = [
  { number: "01", title: "Direct Source Supply", desc: "We supply directly from our own mining operations — ensuring authenticity and consistency." },
  { number: "02", title: "End-to-End Control", desc: "From extraction to delivery — minimizing delays and third-party risks." },
  { number: "03", title: "Consistent Quality", desc: "Standardized processing to meet exact buyer specifications every time." },
  { number: "04", title: "Reliable Delivery", desc: "Strong logistics and supply chain networks for timely, global fulfillment." },
  { number: "05", title: "Market-Aligned Trading", desc: "Pricing and supply structures aligned perfectly with real-time global demand." },
  { number: "06", title: "Compliance & Responsibility", desc: "Operations aligned with strict regulatory and environmental standards." }
];

export default function VisionPillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {visionPoints.map((item, i) => (
        <div key={i} className="group relative p-10 bg-white border border-gray-100 hover:border-[#D1A741]/40 hover:shadow-[0_10px_25px_rgba(209,167,65,0.1)] transition-all duration-500 rounded-xl">
          <div className={`${montserrat.className} absolute top-4 right-6 text-6xl font-black text-[#0b0f0d]/5 group-hover:text-[#D1A741]/10 transition-colors`}>
            {item.number}
          </div>
          <div className="space-y-6 relative z-10">
            <h4 className={`${montserrat.className} text-xl font-bold text-[#0b0f0d] uppercase tracking-wider`}>
              {item.title}
            </h4>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base h-16">
              {item.desc}
            </p>
            <div className="w-0 h-1 bg-gradient-to-r from-[#D1A741] to-[#e8c678] group-hover:w-full transition-all duration-500 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}