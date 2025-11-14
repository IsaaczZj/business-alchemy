import BlogHeader from "@/components/blog/blog-header";
import PostList from "@/components/blog/posts-list";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: "index, follow",
};

export default function Blog() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="container mt-15 flex h-full grow flex-col">
      <BlogHeader />
      <PostList posts={sortedPosts} />
    </div>
  );
}
