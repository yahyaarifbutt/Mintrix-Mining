interface StepProps {
  title: string;
  description: string;
}

export default function LifecycleStep({ title, description }: StepProps) {
  return (
    <div className="relative group cursor-default">
      <div className="relative z-10 pl-6 md:pl-10 border-l-2 border-[#CEA741]/30 transition-all duration-500 ease-out group-hover:border-[#CEA741]">
        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#CEA741] border-4 border-white shadow-sm transition-transform duration-500 ease-out group-hover:scale-150" />
        <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
          <h3 className="text-2xl md:text-3xl font-bold text-[#252723] mb-4">{title}</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
