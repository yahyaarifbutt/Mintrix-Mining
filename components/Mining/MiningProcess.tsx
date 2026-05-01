"use client";

import { Montserrat } from "next/font/google";
import { Map, Pickaxe, Factory, Ship, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"] 
});

const processes = [
  {
    icon: Map,
    stage: "01",
    title: "Exploration & Survey",
    desc: "Before extraction begins, our geology teams conduct detailed site assessments — analyzing rock formations, mineral density, and extraction viability. We identify high-yield zones.",
    bullets: [
      "Geological mapping and soil analysis",
      "Site viability and environmental assessment"
    ]
  },
  {
    icon: Pickaxe,
    stage: "02",
    title: "Mining & Extraction",
    desc: "Extraction is carried out by trained site crews using modern equipment suited to hard rock and alluvial mining conditions. Safety protocols are enforced across all active sites.",
    bullets: [
      "Mechanized and manual extraction methods",
      "Real-time output monitoring"
    ]
  },
  {
    icon: Factory,
    stage: "03",
    title: "Processing & Refining",
    desc: "Raw ore is processed on or near site to upgrade mineral grade before shipment. This reduces logistics cost, improves purity consistency, and ensures specifications are met.",
    bullets: [
      "Ore crushing and sorting",
      "Quality testing at processing stage"
    ]
  },
  {
    icon: Ship,
    stage: "04",
    title: "Supply Chain & Delivery",
    desc: "From site to final delivery, Mintrix manages logistics through established supply chain networks — handling documentation, export compliance, and last-mile coordination.",
    bullets: [
      "Export documentation and regulatory compliance",
      "Tracking and delivery confirmation"
    ],
    linkText: "Explore Full Process",
    linkUrl: "/mining-operations/supply-chain"
  }
];

// Interactive Card Component for Cursor Tracking
function ProcessCard({ item }: { item: typeof processes[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col p-6 rounded-2xl bg-[#111613] border border-white/5 hover:border-[#D1A741]/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(209,167,65,0.12)]"
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePosition.y - 200) / -50}deg) rotateY(${(mousePosition.x - 150) / 50}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'none' : 'transform 0.5s ease-out'
      }}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(209,167,65,0.08), transparent 45%)`
        }}
      />

      {/* Top Gold Laser Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D1A741] to-[#f5d98a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        
        {/* Icon & Stage Number */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#D1A741]/10 group-hover:border-[#D1A741]/60 transition-all duration-500 group-hover:scale-105 shadow-lg">
            <item.icon className="w-5 h-5 text-white/60 group-hover:text-[#D1A741] transition-colors duration-500" />
          </div>
          <span className={`${montserrat.className} text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500 -mt-1 -mr-1`}>
            {item.stage}
          </span>
        </div>

        {/* Text content */}
        <h4 className={`${montserrat.className} text-xl font-bold tracking-wide text-white mb-3 group-hover:text-[#D1A741] transition-colors duration-300`}>
          {item.title}
        </h4>
        
        <p className="text-white/70 font-medium text-sm leading-relaxed mb-5 group-hover:text-white/95 transition-colors duration-300">
          {item.desc}
        </p>

        {/* Bullets */}
        <ul className="space-y-3 mb-6 flex-grow">
          {item.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm font-medium text-white/70 group-hover:text-white/95 transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D1A741]/50 group-hover:bg-[#D1A741] mt-1.5 shrink-0 transition-colors duration-300 shadow-[0_0_8px_rgba(209,167,65,0.4)]" />
              <span className="leading-snug">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Link Bottom */}
        {item.linkText && (
          <div className="mt-auto pt-4 border-t border-white/10 group-hover:border-[#D1A741]/30 transition-colors duration-500 pointer-events-auto">
            <Link href={item.linkUrl} className={`${montserrat.className} group/link inline-flex items-center gap-2 text-[#D1A741] hover:text-[#f5d98a] font-bold text-xs tracking-widest uppercase transition-colors duration-300`}>
              <span>{item.linkText}</span>
              <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default function MiningProcess() {
  return (
    <section className="bg-[#0b0f0d] py-12 lg:py-16 px-6 relative border-t border-[#D1A741]/20 overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#D1A741]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#D1A741]" />
            <h3 className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.25em] uppercase text-xs`}>
              How Our Operations Work
            </h3>
            <div className="w-6 h-[1px] bg-[#D1A741]" />
          </div>
          
          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-4`}>
            End-to-End <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1A741] via-[#F4D068] to-[#B38D30] drop-shadow-md ml-2 md:ml-0">
              Mining Process
            </span>
          </h2>
          <p className="text-white/70 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Every mineral we trade starts here — at the mine. Our four-stage operational process ensures that what reaches the buyer has been handled with full in-house oversight at every step.
          </p>
        </div>

        {/* Dynamic 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 perspective-[2000px]">
          {processes.map((item, i) => (
            <ProcessCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}