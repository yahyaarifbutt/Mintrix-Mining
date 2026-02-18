import AboutValueCard from "./AboutValueCard";
import { FaShieldAlt, FaBolt, FaLightbulb } from "react-icons/fa";

export default function AboutValues() {
  const values = [
    {
      title: "Reliability",
      desc: "We build infrastructures engineered for stability and long-term performance.",
      icon: <FaShieldAlt size={32} className="text-[#cea741]" />,
    },
    {
      title: "Efficiency",
      desc: "Optimized systems that reduce waste and maximize operational output.",
      icon: <FaBolt size={32} className="text-[#cea741]" />,
    },
    {
      title: "Innovation",
      desc: "Forward-thinking solutions that adapt to a rapidly evolving mining landscape.",
      icon: <FaLightbulb size={32} className="text-[#cea741]" />,
    },
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-gradient-to-br from-[#0b0f0d] to-[#151b17] relative overflow-hidden">
      
      {/* subtle background glows */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#cea741]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#D1A741]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our Core Values
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          At Mintrix Mining, we uphold principles that ensure every project is 
          stable, optimized, and forward-thinking. These values guide our 
          engineering and operational excellence.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {values.map((item, index) => (
            <AboutValueCard
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
