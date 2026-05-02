"use client";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"] });

export default function ProcessSteps() {
  const steps = [
    { t: "Choose Track", d: "Select Gold Mining or Gold Trading" },
    { t: "Questionnaire", d: "Complete BricketX 5-min structure form" },
    { t: "Review Docs", d: "Sign contracts and compliance papers" },
    { t: "Deploy & Track", d: "Real-time reporting on BricketX platform" }
  ];

  return (
    // Reduced top padding (pt-12) and kept bottom padding (pb-20)
    <section className="pt-12 pb-20 px-6 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADING - Made more prominent with gold accents */}
        <div className="text-center mb-16">
          <h3 className={`${montserrat.className} text-3xl lg:text-4xl font-extrabold text-[#010301]`}>
            How to Start <span className="text-[#D1A741]">Investing</span>
          </h3>
          <div className="w-16 h-[3px] bg-[#D1A741] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative group px-2">
              
              {/* Premium Gradient Connector Line (Hidden on mobile, visible on md+) */}
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#D1A741]/40 to-transparent -z-10" />
              )}
              
              {/* Step Number Bubble */}
              <div className="w-16 h-16 bg-[#010301] text-[#D1A741] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-5 
                              group-hover:bg-[#D1A741] group-hover:text-[#010301] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#D1A741]/20 
                              transition-all duration-300">
                0{i + 1}
              </div>
              
              {/* Step Content */}
              <h5 className="font-bold text-[#010301] text-lg mb-2">{step.t}</h5>
              <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[220px] mx-auto">
                {step.d}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}