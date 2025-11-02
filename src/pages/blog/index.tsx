import BlogHeader from "@/components/blog/blog-header";
import PostCard from "@/components/blog/post-card";
import PostList, { type PostListProps } from "@/components/blog/posts-list";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function Blog({posts}:PostListProps) {
  
  return (
    <div className="container mt-15 flex h-full grow flex-col">
      <BlogHeader />
      <PostList posts={posts}/>
    </div>
  );
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return {
    props: {
      posts: sortedPosts
    },
  };
}) satisfies GetStaticProps;
