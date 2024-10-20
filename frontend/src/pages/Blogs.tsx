import { BlogSkeleton } from "../Components/BlogsSkeleton";
import useBlogs from "../Components/hooks/useBlogs";
import NavBar from "../Components/NavBar";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <NavBar />
        <div className="flex justify-center w-full ">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available.</div>; // Handle empty blog list case
  }
  return (
    <div>
      <NavBar />

      <div className="flex justify-center w-full ">
        <div className="w-full border">
          {blogs.map(blog =>
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate="19-10-2024"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
