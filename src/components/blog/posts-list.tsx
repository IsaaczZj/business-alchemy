import { Post } from "contentlayer/generated";
import PostCard from "./post-card";
import { useRouter } from "next/router";
import { Inbox } from "lucide-react";

export type PostListProps = {
  posts:Post[]
}

export default function PostList({posts}:PostListProps) {
  const router = useRouter();
  const q = router.query.q;
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(String(q).toLowerCase()),
  );
  const postsList = q ? filteredPosts : posts;

  return (
    <div className="grid grid-cols-1 gap-y-6 py-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.length === 0 ? (
        <div className="md:p12 col-span-full flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-dashed border-gray-300 p-8">
          <Inbox className="size-12 text-center text-cyan-100" />
          <p className="text-gray-300">Nenhum post encontrado</p>
        </div>
      ) : (
        postsList.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            date={post.date}
            author={{
              name: post.author?.name,
              avatar: post.author?.avatar?.trimEnd(),
            }}
            imageURL={post.image.trimEnd()}
            slug={post.slug}
          />
        ))
      )}
    </div>
  );
}
