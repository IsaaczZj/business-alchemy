import { PT_Sans_Caption } from "next/font/google";
import {
  CustomerStoryCard,
  CustomerStoryCardProps,
} from "./customer-story-card";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

const CUSTOMER_STORY_MOCK: CustomerStoryCardProps[] = [
  {
    content:
      "Criar minha loja com o Bussines Alchemy foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    imageUrl: "customer-1.svg",
    name: "Annette Bones",
    role: "CEO na Anne Corp",
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    imageUrl: "customer-2.svg",
    name: "Jacob Jones",
    role: "CEO na JJ Org",
  },
];
export default function CustomerStorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-8">
        <h2
          className={`${ptSansCaption.className} text-heading-xl mb-12 text-center text-gray-100`}
        >
          Quem utiliza, aprova!
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {CUSTOMER_STORY_MOCK.map((customer, i) => (
          <CustomerStoryCard
            key={i}
            content={customer.content}
            imageUrl={customer.imageUrl}
            name={customer.name}
            role={customer.role}
          />
        ))}
      </div>
    </section>
  );
}
