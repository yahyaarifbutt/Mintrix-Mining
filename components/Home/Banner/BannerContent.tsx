import Link from "next/link";

export default function BannerContent() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-4">
        <h3 className="text-[#cea741] font-bold tracking-[0.4em] uppercase text-sm">
          Global Operations
        </h3>
        
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
          Scalable Power. <br />
          <span className="text-[#cea741]">Unmatched</span> Results.
        </h2>
        
        <div className="w-24 h-1 bg-[#cea741]" />
      </div>

      <p className="text-xl text-white/80 leading-relaxed max-w-xl font-medium">
        Experience the fusion of industrial-grade hardware and intelligent 
        software. We provide the foundation for the next generation of 
        digital asset production.
      </p>

      <div className="flex flex-wrap gap-6 pt-4">
        <Link
          href="/services"
          className="bg-[#cea741] text-[#1d221c] px-10 py-4 rounded-sm font-bold uppercase tracking-widest shadow-2xl hover:bg-[#b88f32] transition-all duration-300"
        >
          View Facilities
        </Link>
        
        <Link
          href="/contact"
          className="border-2 border-white text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1d221c] transition-all duration-300"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
}