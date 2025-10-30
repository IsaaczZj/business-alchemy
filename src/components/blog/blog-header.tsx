import { useRouter } from "next/router";
import PostSearchInput from "./post-search-input";

export default function BlogHeader() {
  const router = useRouter();
  const pageTitle = router.query.q
    ? `Resultados de busca para ${router.query.q}`
    : "Dicas e estratégias para impulsionar seu negócio";

  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-3">
        <span className="text-body-tag w-fit rounded-sm bg-cyan-300 px-4 py-2 text-center text-cyan-100 uppercase md:text-left">
          Blog
        </span>

        <h1 className="max-w-xl text-start text-lg text-balance sm:text-2xl md:text-left md:text-5xl">
          {router.query.q && pageTitle.length >= 50
            ? `${pageTitle.slice(0, 50)}...`
            : pageTitle}
        </h1>
      </div>

      <PostSearchInput />
    </header>
  );
}
