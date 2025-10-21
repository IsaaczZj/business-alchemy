import Image from "next/image";

export interface CustomerStoryCardProps {
  content: string;
  name: string;
  role: string;
  imageUrl: string;
}

export function CustomerStoryCard({
  content,
  name,
  role,
  imageUrl,
}: CustomerStoryCardProps) {
  return (
    <div className="flex flex-col items-start gap-8 rounded-lg bg-gray-600 p-10">
      <p className="text-body-md text-gray-200 italic">"{content}"</p>
      <div className="flex items-center gap-3">
        <Image src={imageUrl} width={36} height={36} alt="Foto do cliente" />
        <div className="space-y-1">
          <h3 className="text-gray-200">{name}</h3>
          <span className="text-gray-300">{role}</span>
        </div>
      </div>
    </div>
  );
}
