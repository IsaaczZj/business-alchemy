import BlogHeader from "@/components/blog/blog-header";
import PostCard from "@/components/blog/post-card";

export default function Blog() {
  return <div className="flex h-full grow flex-col mt-15 container">
    <BlogHeader/>
    <PostCard/>
  </div>;
}
