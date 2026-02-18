export default function AboutMissionCard() {
  return (
    <div className="bg-[#0b0f0d] p-8 md:p-10 rounded-3xl shadow-xl border border-[#cea741]/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
      
      {/* subtle gold glow accent */}
      <div className="absolute -inset-2 bg-[#cea741]/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-3xl"></div>

      <h3 className="text-2xl font-semibold text-[#cea741] mb-4 md:mb-6">
        What We Deliver
      </h3>

      <ul className="space-y-3 md:space-y-4 text-gray-300 text-lg">
        <li>• Scalable Infrastructure Design</li>
        <li>• Performance Optimization</li>
        <li>• Long-Term Growth Strategies</li>
        <li>• Industrial-Grade Reliability</li>
      </ul>
    </div>
  );
}
