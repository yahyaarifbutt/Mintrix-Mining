interface SupportItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export default function SupportItem({ icon: Icon, title, desc }: SupportItemProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 group p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1">
      {/* Icon - Tighter padding (p-4) */}
      <div className="p-4 bg-[#CEA741]/5 border border-[#CEA741]/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#CEA741] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#CEA741]/20">
        <Icon className="w-8 h-8 text-[#CEA741] transition-colors duration-300 group-hover:text-white" />
      </div>

      {/* Text */}
      <div className="space-y-2">
        <h4 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#252723] group-hover:text-[#CEA741] transition-colors">
          {title}
        </h4>
        <p className="text-xs md:text-sm text-[#252723]/60 leading-relaxed max-w-[200px] mx-auto font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}