interface AboutValueCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function AboutValueCard({ title, desc, icon }: AboutValueCardProps) {
  return (
    <div className="bg-[#111714] p-8 md:p-10 rounded-3xl border border-[#D1A741]/10 hover:border-[#cea741]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
      
      <div className="mb-6 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-[#cea741]">{title}</h3>
      <p className="mt-4 text-gray-300 leading-relaxed">{desc}</p>

      {/* subtle hover glow */}
      <div className="absolute -inset-2 bg-[#cea741]/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none"></div>
    </div>
  );
}
