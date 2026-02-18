import { CheckCircle2 } from "lucide-react";

const principles = [
  "Sustainable Energy Integration",
  "Tier-III Security Protocols",
  "Optimized Hashrate Performance",
  "24/7 Technical Response Team"
];

export default function AboutContent() {
  return (
    <div className="space-y-10 text-[#1b211d]">

      {/* Heading */}
      <div className="space-y-6">
        <h3 className="text-[#cea741] font-semibold tracking-[0.35em] uppercase text-sm">
          Industrial Excellence
        </h3>

        <h2 className="text-4xl md:text-5xl font-bold leading-[1.1]">
          Forging the Future of <br />
          <span className="text-[#cea741] font-light italic">
            Digital Infrastructure.
          </span>
        </h2>

        <div className="w-20 h-[2px] bg-[#cea741]" />
      </div>

      {/* Paragraph */}
      <p className="text-lg leading-relaxed text-[#1b211d] opacity-80 max-w-xl">
        Mintrix-Kenya is more than a mining facility — it is a hub of computational
        innovation. We bridge raw power with intelligent efficiency, ensuring
        resilient, scalable infrastructure in an ever-evolving digital economy.
      </p>

      {/* Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
        {principles.map((text, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 bg-[#ffffff] px-5 py-4 rounded-xl border border-[#cea741]/30 hover:border-[#cea741] hover:shadow-lg transition-all duration-300"
          >
            <CheckCircle2 className="w-5 h-5 text-[#cea741]" />
            <span className="text-sm font-semibold tracking-wide uppercase text-[#252723]">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-8">
        <button className="group relative px-10 py-4 bg-[#1b211d] text-[#ffffff] font-bold rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#cea741] hover:text-[#1b211d]">
          <span className="tracking-wide">
            Learn Our Story
          </span>
        </button>
      </div>

    </div>
  );
}
