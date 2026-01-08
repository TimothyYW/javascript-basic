import { Domino } from "@/lib/domino";

export default function DominoCard({ value }: { value: Domino }) {
  return (
    <div className="flex items-center justify-center w-24 h-32 rounded-xl border-2 border-gray-800 bg-white shadow-md hover:shadow-lg transition">
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl font-bold">{value[0]}</span>
        <div className="w-8 h-[2px] bg-gray-800" />
        <span className="text-2xl font-bold">{value[1]}</span>
      </div>
    </div>
  );
}
