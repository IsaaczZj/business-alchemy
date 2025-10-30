import BlogHeader from "@/components/blog/blog-header";
import PostCard from "@/components/blog/post-card";
import PostList from "@/components/blog/posts-list";
import { allPosts } from "contentlayer/generated";

export default function Blog() {
 
  
  return (
    <div className="container mt-15 flex h-full grow flex-col">
      <BlogHeader />
      <PostList/>
    </div>
  );
}
