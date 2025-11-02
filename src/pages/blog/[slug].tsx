import Markdown from "@/components/blog/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share";
import { allPosts } from "contentlayer/generated";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const slug = String(router.query.slug) ?? "";
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase(),
  );

  const postUrl = `https://bussiness-achemy/blog/${slug}`;
  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  });

  if (!post) {
    return (
      <main className="container py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-heading-lg">Post não encontrado</h1>
          <Link href="/blog" className="text-blue-300 hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="container">
      <div className="container space-y-12 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/blog"
                  className="text-action-sm border-b border-transparent hover:border-b hover:border-blue-200"
                >
                  Blog
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_300px] md:gap-12">
          <article className="overflow-hidden rounded-lg border-[1px] border-gray-400 bg-gray-600">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-4 md:p-12">
              <h1 className="text-heading-lg md:text-heading-xl mb-6 text-left text-balance">
                {post?.title}
              </h1>

              <div className="flex items-center gap-3 border-b border-gray-400 py-4">
                <div className="relative size-8 overflow-hidden rounded-full border-[1px] border-blue-200 md:size-10">
                  <Image
                    src={`${post?.author.avatar.trimEnd()}`}
                    alt="Author name"
                    className="object-cover object-center"
                    fill
                  />
                </div>
                <div className="flex flex-col p-1">
                  <span className="text-body-xs text-gray-200">
                    {post?.author.name}
                  </span>
                  <span className="text-body-xs text-gray-300">
                    Publicado em{" "}
                    {new Date(String(post?.date)).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none px-4 md:px-6 lg:px-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside className="space-y-6">
            <h2 className="text-heading-xs">Compartilhar</h2>
            <div className="space-y-2">
              {shareButtons.map((provider, i) => (
                <button
                  onClick={() => provider.action()}
                  className="group flex w-full items-center gap-2 rounded-md border border-gray-400 px-4 py-3 transition-colors hover:cursor-pointer hover:border-blue-200 hover:text-blue-200"
                >
                  <div>{provider.icon}</div>
                  <span>{provider.name}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
