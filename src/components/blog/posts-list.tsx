import { allPosts } from "contentlayer/generated";
import PostCard from "./post-card";

export default function PostList() {
  const posts = allPosts;
  
  return (
    <div className="grid grid-cols-1 gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
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
      ))}
    </div>
  );
}
