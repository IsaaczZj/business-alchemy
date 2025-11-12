
import { cn } from "@/lib/utils";
import { CircleX, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef } from "react";

export default function PostSearchInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const hasQuery = !!searchParams?.has("q");

  const handleSearchPost = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router],
  );

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
      scroll: false,
    });
  };

  function handleClearInput() {
    router.push("/blog", {
      scroll: false,
    });
  }

  useEffect(() => {
    if(hasQuery){
      inputRef.current?.focus()
    }
  },[hasQuery])

  return (
    <form className="group relative" onSubmit={handleSearchPost}>
      <div
        className={cn(
          "flex items-center justify-between rounded-md border transition-colors duration-200 md:max-w-xs",
          query
            ? "border-blue-300 ring-1 ring-blue-300"
            : "border-gray-400 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300",
        )}
      >
        <Search
          className={cn(
            "ml-2 size-4 transition-colors duration-200",
            query
              ? "text-blue-300"
              : "text-gray-300 group-focus-within:text-blue-300",
          )}
        />

        <input
          type="text"
          ref={inputRef}
          placeholder="Buscar"
          value={query}
          onChange={handleQueryChange}
          className="text-body-sm w-full bg-transparent px-2 py-2 text-gray-100 transition-all duration-200 outline-none placeholder:text-gray-300"
        />
        <div className="w-10">
          {query && (
            <button title="Limpar" type="button" onClick={handleClearInput}>
              <CircleX className="mr-2 size-3 cursor-pointer text-gray-300 transition-colors duration-200 hover:scale-110 hover:text-blue-300" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
