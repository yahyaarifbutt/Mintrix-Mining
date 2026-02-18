export default function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fafafa] border border-gray-200 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-[#CEA741]" />
      <span className="text-[#CEA741] text-xs font-bold tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
}
