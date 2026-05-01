"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import HeroText from "./HeroText";

const backgroundImages = [
  "/Images/HeroImage.jpg",
  "/Images/HeroImage2.jpg",
  "/Images/HeroImage3.jpg",
  "/Images/HeroImage4.jpg",
];

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, 
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-auto py-24 lg:py-0 lg:h-[75vh] lg:min-h-[600px] overflow-hidden bg-[#050706] flex items-center">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUp {
          0% { transform: translateY(10vh) scale(0.5); opacity: 0; }
          10% { opacity: 0.9; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}} />

      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Background ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover object-right sm:object-center transition-opacity duration-1000 ease-in-out ${
              // ADJUSTED: Changed opacity-60 to opacity-40 for better text legibility
              index === currentImage ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* ADJUSTED: Darkened the gradients to ensure text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f0d]/100 via-[#0b0f0d]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-transparent to-transparent" />

      {/* Particles */}
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

      {/* Decorative Atmosphere Elements */}
      <div 
        className="absolute top-[20%] left-[5%] w-2 h-2 rounded-full bg-[#D1A741] shadow-[0_0_20px_4px_#D1A741]" 
        style={{ animation: 'pulseGlow 4s ease-in-out infinite' }}
      />
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D1A741]/20 blur-[120px] rounded-full pointer-events-none" 
        style={{ animation: 'pulseGlow 7s ease-in-out infinite' }}
      />
      <div 
        className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#FFF2CD]/10 blur-[100px] rounded-full pointer-events-none" 
        style={{ animation: 'pulseGlow 6s ease-in-out infinite 1s' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <HeroText />
        </div>
      </div>

    </section>
  );
}