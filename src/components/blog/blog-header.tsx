"use client";
import { useSearchParams } from "next/navigation";
import PostSearchInput from "./post-search-input";

export default function BlogHeader() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const pageTitle = query
    ? `Resultados de busca para ${query}`
    : "Dicas e estratégias para impulsionar seu negócio";

  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-3">
        <span className="text-body-tag w-fit rounded-sm bg-cyan-300 px-4 py-2 text-center text-cyan-100 uppercase md:text-left">
          Blog
        </span>

        <h1 className="max-w-xl text-start text-lg text-balance sm:text-2xl md:text-left md:text-5xl">
          {query && pageTitle.length >= 50
            ? `${pageTitle.slice(0, 50)}...`
            : pageTitle}
        </h1>
      </div>

      <PostSearchInput />
    </header>
  );
}
