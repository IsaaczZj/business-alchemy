import { PT_Sans_Caption } from "next/font/google";
import { Button } from "../ui/button";
import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export default function CallToActionSection() {
  return (
    <section className="relative bg-gradient-to-b from-cyan-950/20 to-gray-700 py-20">
      <div className="absolute inset-0 hidden bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90 md:block" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 p-4">
        <Store className="w-fit text-cyan-100" />
      </div>
      <div className="relative container flex flex-col items-center gap-4 text-center">
        <h2
          className={`${ptSansCaption.className} text-heading-xl mb-12 text-center text-gray-100`}
        >
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>
        <Button className="-mt-7 flex items-center gap-2 rounded-full" asChild>
          <Link href="/create-store">
            Criar loja grátis
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
