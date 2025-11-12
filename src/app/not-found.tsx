import { Button } from "@/components/ui/button";
import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <FileQuestion className="mx-auto mb-6 size-16 text-gray-100" />
      </div>
      <div className="relative mb-3 font-sans">
        <span className="inline-block -translate-x-1 -translate-y-2 -rotate-12 transform text-right text-8xl">
          4
        </span>
        <span className="inline-block text-right text-8xl">0</span>
        <span className="inline-block text-right text-8xl">4 </span>
      </div>
      <p className="mb-8 text-2xl text-gray-100">Página não encontrada</p>
      <div className="mt-6 flex justify-center gap-4">
        <Button asChild>
          <Link className="bg-blue-200 text-white hover:bg-blue-300" href={"/"}>
            Home
          </Link>
        </Button>
        <Button variant={"secondary"} asChild>
          <Link href={"/blog?q="}>
            <Search className="size-4" />
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  );
}
