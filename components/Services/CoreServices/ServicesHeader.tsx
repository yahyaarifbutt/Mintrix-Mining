export default function ServicesHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#fafafa] border border-gray-200 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#CEA741]" />
        <span className="text-[#CEA741] text-xs font-bold tracking-widest uppercase">
          Comprehensive Solutions
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#252723] leading-tight mb-6 tracking-tight">
        Everything You Need, <br className="hidden md:block" />
        From <span className="text-[#CEA741]">Start to Finish</span>
      </h2>

      <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
        We handle every phase of the mining lifecycle. Explore our core
        capabilities designed to maximize efficiency and minimize risk at your
        operation.
      </p>
    </div>
  );
}
