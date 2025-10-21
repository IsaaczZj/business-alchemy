import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export default function SupportSection() {
  return (
    <section className="relative bg-gray-700 py-10 pb-20">
      <div className="absolute inset-0 hidden bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90 md:block" />

      <div className="relative container">
        <h2
          className={`${ptSansCaption.className} text-heading-xl mb-12 text-center text-balance text-gray-100`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-7 text-left md:p-12">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-300 p-2 text-white">
              <PaintbrushVertical className="size-8" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catalago e tenha tudo com
              a sua cara.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-lg bg-cyan-300 p-7 text-left md:p-12">
            <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-200 p-2 text-white">
              <Store className="size-8" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insera qualquer
              link de afiliado.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-7 text-left md:p-12">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-300 p-2 text-white">
              <HeartHandshake className="size-8" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
