interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-white to-[#fafafa] p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#CEA741] transition-all duration-300" />

      <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#CEA741] mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#252723] mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
