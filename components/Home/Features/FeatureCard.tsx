type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D1A741]/50 transition-all duration-500">
      <div className="mb-6 inline-block p-3 rounded-xl bg-[#D1A741]/10 group-hover:bg-[#D1A741]/20 transition-colors">
        <Icon className="w-8 h-8 text-[#D1A741]" />
      </div>

      <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h4>

      <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
        {description}
      </p>

      <div className="absolute inset-0 rounded-2xl bg-[#D1A741]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
    </div>
  );
}
