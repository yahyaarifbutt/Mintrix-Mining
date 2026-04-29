"use client";
import { useEffect, useState, useRef } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

type Props = {
  label: string;
  value: string;
};

export default function StatItem({ label, value }: Props) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const numericValue = parseFloat(value.replace(/,/g, ""));
  const suffix = value.replace(/[\d,.]/g, "");
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = numericValue;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            setDisplayValue(current);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [numericValue]);

  const formattedNumber = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div 
      ref={elementRef} 
      className="relative flex flex-col items-center justify-center p-6 group transition-all duration-300"
    >
      <div className="absolute inset-0 bg-[#D1A741]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 text-center">
        <div className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight group-hover:text-[#D1A741] transition-colors duration-300`}>
          {formattedNumber}
          <span className="text-3xl md:text-4xl ml-1 text-[#D1A741] font-bold">{suffix}</span>
        </div>
        <div className={`${montserrat.className} text-[#D1A741] text-xs md:text-sm font-bold uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity`}>
          {label}
        </div>
      </div>
    </div>
  );
}