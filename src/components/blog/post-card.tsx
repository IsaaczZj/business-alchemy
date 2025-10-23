import Image from "next/image";
import Link from "next/link";

interface PostCardProps {}
export default function PostCard({}: PostCardProps) {
  return (
    <Link
      href={"/blog/"}
      className="w-[340px] overflow-hidden rounded-3xl border-[1px] border-gray-400 bg-gray-600 transition-all duration-200 hover:scale-105 hover:border-blue-300"
    >
      <div className="overflow-hidden rounded-md p-2.5">
        <div className="relative">
          <div className="absolute top-0 right-0 rounded-bl-xl bg-gray-600 px-3 py-1">
            <span className="text-body-xs text-gray-300">20/10/2025</span>
          </div>
          <Image
            src={`/assets/primeiro-post.png`}
            alt=""
            className="h-40 w-full rounded-md object-cover object-center"
            width={288}
            height={144}
          />
        </div>

        <div className="mt-3 space-y-2 px-2">
          <h3 className="text-heading-xs text-gray-100">
            Transformando seu negócio em uma loja virtual
          </h3>
          <p className="text-body-xs line-clamp-3 text-gray-300">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Business Alchemy é a solução perfeita para você.
            Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa
            plataforma intuitiva, você pode criar um site profissional para sua
            loja em minutos, sem precisar de conhecimentos técnicos.
          </p>
          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative size-4 overflow-hidden rounded-full border-[1px] border-blue-200 md:size-8">
              <Image
                src={"/customer-1.svg"}
                alt="Author name"
                className="object-cover object-center"
                fill
              />
            </div>
            <span className="text-body-xs text-gray-300">Aspen Dokins</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
