import { cn } from "@/lib/utils";
import { CircleX, Search, Target } from "lucide-react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useCallback } from "react";

export default function PostSearchInput() {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";

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

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <form className="group relative" onSubmit={handleSearchPost}>
      <Search
        className={`${cn(
          "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300",
          query && "text-blude-300",
        )}`}
      />
      {query && (
        <CircleX
          className="absolute top-1/2 right-3 size-4 -translate-y-1/2 cursor-pointer text-gray-300 transition-colors duration-200"
          onClick={() =>
            router.push("/blog", undefined, { shallow: true, scroll: false })
          }
        />
      )}

      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleQueryChange}
        className="text-body-sm w-full rounded-md border border-gray-400 bg-transparent py-2 pl-9 text-gray-100 transition-all duration-200 outline-none placeholder:text-gray-300 focus-within:right-1 focus-within:border-blue-300 focus-within:ring-blue-300"
      />
    </form>
  );
}
