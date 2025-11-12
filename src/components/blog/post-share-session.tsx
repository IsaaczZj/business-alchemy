"use client";

import { useShare } from "@/hooks/use-share";
import { Post } from "contentlayer/generated";

interface PostShareSession {
  postUrl: string;
  post: Post;
}
export default function PostShareSession({ post, postUrl }: PostShareSession) {
  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  });
  return (
    <aside className="space-y-6">
      <h2 className="md:text-heading-xs hidden md:block">Compartilhar</h2>
      <div className="flex flex-col gap-2">
        {shareButtons.map((provider, i) => (
          <button
            key={i}
            onClick={() => provider.action()}
            className="group flex w-full items-center gap-2 rounded-md border border-gray-400 px-4 py-3 transition-colors hover:cursor-pointer hover:border-blue-200 hover:text-blue-200"
          >
            <div>{provider.icon}</div>
            <span>{provider.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
