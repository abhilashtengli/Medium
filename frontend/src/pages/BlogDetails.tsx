import { Blog } from "../Components/hooks/useBlog";
import NavBar from "../Components/NavBar";

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center mt-10">
        <div className="w-full grid grid-cols-12 px-10  max-w-screen-xl">
          <div className=" col-span-8 space-y-5">
            <div className="text-5xl font-bold ">
              {blog.title}
            </div>
            <div className="text-slate-500 font-semibold">
              Posted on 19 Oct 2024
            </div>
            <div>
              {blog.content}
            </div>
          </div>
          <div className=" col-span-4 py-5">
            <h1 className="text-lg ">Author</h1>
            <div className="flex items-center  gap-x-5">
              <div className="rounded-full w-9 h-9 grid place-content-center pb-0.5 bg-gray-600">
                <span className="text-gray-300 w-9  h-9 flex justify-center items-center text-xl ">
                  {blog.author.name[0].toUpperCase()}
                </span>
              </div>
              <div className="">
                <span className=" text-xl font-bold">
                  {blog.author.name}{" "}
                </span>
                <div className="text-slate-500">
                  the author of some commendable verses. He was the author of
                  military reforms, which included the improvement of artillery{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
