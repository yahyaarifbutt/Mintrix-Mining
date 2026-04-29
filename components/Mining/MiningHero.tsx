"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function MiningHero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden bg-[#050706] flex items-center">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUp {
          0% { transform: translateY(10vh) scale(0.5); opacity: 0; }
          10% { opacity: 0.9; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }
      `}} />

      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Images/mining-hero.jpg" // Replace with a massive excavator or open-pit mine HD image
          alt="Heavy Gold Mining Extraction"
          fill
          priority
          className="object-cover opacity-50 scale-105 animate-pulse-slow"
        />
      </div>

      {/* Deep Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f0d]/95 via-[#0b0f0d]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-transparent to-transparent" />

      {/* Gold Dust Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-0 rounded-full bg-[#D1A741] shadow-[0_0_10px_2px_#D1A741]"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
              opacity: 0, 
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D1A741]/30 bg-[#D1A741]/10 backdrop-blur-md mb-4">
            <div className="w-2 h-2 rounded-full bg-[#D1A741] animate-ping" />
            <span className={`${montserrat.className} text-[#D1A741] text-xs font-bold tracking-widest uppercase`}>
              Industrial Operations
            </span>
          </div>
          
          <h1 className={`${montserrat.className} text-5xl md:text-7xl font-extrabold leading-[1.1] text-white tracking-tight`}>
            Unearthing Global <br />
            <span className="bg-gradient-to-r from-[#D1A741] via-[#FFF2CD] to-[#D1A741] bg-clip-text text-transparent drop-shadow-sm">
              Wealth & Value.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
            Deploying state-of-the-art heavy machinery and AI-driven geological intelligence to maximize yield, optimize safety, and extract the highest purity gold from the earth.
          </p>
        </div>
      </div>
    </section>
  );
}