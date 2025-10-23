import { Search } from "lucide-react";

export default function SearchPost() {
  return (
    <div className="group flex items-center gap-2 rounded-md border border-gray-400 px-4 py-3 group-active:text-gray-100">
      <Search className="size-4 text-gray-300" />
      <input
        type="text"
        placeholder="Buscar"
        className="text-body-sm w-full text-gray-300 outline-none group"
      />
    </div>
  );
}
