import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="container grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-lg bg-gray-500 p-12">
        <span className="text-body-tag mb-4 block w-fit rounded-sm bg-blue-400 px-3 py-1.5 text-blue-200 uppercase">
          Simples
        </span>
        <h2 className="text-heading-lg text-gray-100">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="rounded-lg bg-gray-500 p-12">
        <span className="text-body-tag mb-4 block w-fit rounded-sm bg-blue-400 px-3 py-1.5 text-blue-200 uppercase">
          Prático
        </span>
        <h2 className="text-heading-lg text-gray-100">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="grid rounded-lg bg-gray-500 p-12 md:col-span-2 md:grid-cols-2">
        <div className="flex h-full flex-col gap-4 md:gap-0">
          <span className="text-body-tag mb-4 block w-fit rounded-sm bg-blue-400 px-3 py-1.5 text-blue-200 uppercase">
            Personalizável
          </span>
          <h2 className="text-heading-lg md:w-80  text-gray-100">
            Tenha uma loja online personalizada com a cara da sua marca
          </h2>
          <Button className="mt-auto flex w-full items-center gap-2 rounded-xl md:w-fit h-14">
            Criar loja grátis
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="relative order-first h-[15rem] items-center justify-center md:order-last md:flex md:h-full">
          <Image
            src="feature-section.svg"
            width={300}
            height={200}
            alt="Imagem de fundo da hero section"
            className="h-full w-auto object-center"
          />
        </div>
      </div>
    </section>
  );
}
