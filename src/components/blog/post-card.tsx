import Image from "next/image";
import Link from "next/link";

type Author = {
  name: string;
  avatar: string;
};

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  imageURL: string;
  date: string;
  author: Author;
}
export default function PostCard({
  slug,
  title,
  description,
  date,
  imageURL,
  author,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full overflow-hidden rounded-3xl border-[1px] border-gray-400 bg-gray-600 transition-all duration-200 hover:scale-105 hover:border-blue-300 md:w-[340px]"
    >
      <div className="overflow-hidden rounded-md p-2.5">
        <div className="relative">
          <div className="absolute top-0 right-0 rounded-bl-xl bg-gray-600 px-3 py-1">
            <span className="text-body-xs text-gray-300">
              {new Date(date).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <Image
            src={`${imageURL}`}
            alt={title}
            className="h-40 w-full rounded-md object-cover object-center"
            width={288}
            height={144}
          />
        </div>

        <div className="mt-3 space-y-2 px-2">
          <h3 className="text-heading-xs text-gray-100">{title}</h3>
          <p className="text-body-xs line-clamp-3 text-gray-300">
            {description}
          </p>
          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative size-4 overflow-hidden rounded-full border-[1px] border-blue-200 md:size-8">
              <Image
                src={`${author.avatar}`}
                alt="Author name"
                className="object-cover object-center"
                fill
              />
            </div>
            <span className="text-body-xs text-gray-300">{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
