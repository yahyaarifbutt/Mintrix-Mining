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
    <div className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D1A741]/30 transition-all duration-500 backdrop-blur-sm">
      <div className="mb-5 inline-block p-2.5 rounded-lg bg-[#D1A741]/5 group-hover:bg-[#D1A741]/10 transition-colors border border-[#D1A741]/10">
        <Icon className="w-5 h-5 text-[#D1A741]" />
      </div>

      <h4 className="text-lg font-semibold text-white mb-2 tracking-tight">
        {title}
      </h4>

      <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
        {description}
      </p>

      {/* More subtle glow */}
      <div className="absolute inset-0 rounded-xl bg-[#D1A741]/[0.02] opacity-0 group-hover:opacity-100 blur-lg transition-opacity pointer-events-none" />
    </div>
  );
}