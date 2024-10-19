import { useParams } from "react-router-dom";
import useBlog from "../Components/hooks/useBlog";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || ""
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default Blog;
