import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate
}: BlogCardProps) => {
  return (
    <div className="lg:px-96 flex justify-center">
      <div className="border-b p-5  w-full cursor-pointer">
        <Link to={`/blog/${id}`}>
          <div className="space-y-2 ">
            <div className="flex justify-center items-center w-fit gap-x-5">
              <div className="rounded-full w-6 h-6 grid place-content-center pb-0.5 bg-gray-600">
                <span className="text-gray-300 text-sm ">
                  {authorName[0]}
                </span>
              </div>
              <span className="font-light text-zinc-800">
                {authorName} .
              </span>
              <span className="font-thin text-slate-500 text-lg">
                {publishedDate}{" "}
              </span>
            </div>
            <div className="text-lg font-bold">
              {title}
            </div>
            <div className="text-zinc-600">
              {content.slice(0, 100) +
                (content.length > 100 ? "..." : " ")}{" "}
            </div>
            <div className="text-zinc-600">{`${Math.ceil(
              content.length / 100
            )} minutes read`}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
