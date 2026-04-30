"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import HeroText from "./HeroText";

// Array of your background images
const backgroundImages = [
  "/Images/HeroImage.jpg",
  "/Images/HeroImage2.jpg",
  "/Images/HeroImage3.jpg",
  "/Images/HeroImage4.jpg",
];

// Interface for our gold particles
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

  // Smoothly cycle through images & generate particles safely on the client
  useEffect(() => {
    // Image Slider Timer
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    // Generate random gold dust particles
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      size: Math.random() * 3 + 1.5, // Random size between 1.5px and 4.5px
      duration: Math.random() * 15 + 10, // Float duration between 10s and 25s
      delay: Math.random() * 10, // Start delay between 0s and 10s
    }));
    setParticles(newParticles);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden bg-[#050706]">
      
      {/* Inline Styles for Custom Gold Animations */}
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
            alt={`Mintrix Background ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-60" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Adjusted Deep Vignette Overlays for better image visibility & text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f0d]/90 via-[#0b0f0d]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-transparent to-transparent" />

      {/* --- NEW: Floating Gold Dust Particles --- */}
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
              opacity: 0, // Handled by keyframes
            }}
          />
        ))}
      </div>

      {/* --- ENHANCED: Animated Decorative Atmosphere Elements --- */}
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
      <div className="relative z-10 flex items-center h-full px-6 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <HeroText />
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="absolute bottom-8 right-8 z-50">
        <button className="bg-[#25D366] hover:bg-[#20bd5a] transition-colors p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-105 duration-300">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}