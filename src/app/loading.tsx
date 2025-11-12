import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="relative">
        <Loader2 className="size-16 animate-spin text-gray-400" />
        <div className="absolute top-0 left-0 h-full w-full animate-[spin_3s_linear_infinitive] rounded-full border border-t-2 border-cyan-100"></div>
      </div>
    </div>
  );
}
