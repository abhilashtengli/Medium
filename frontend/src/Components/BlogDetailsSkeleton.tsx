import NavBar from "./NavBar";

const BlogDetailsSkeleton = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center mt-10">
        <div className="w-full grid grid-cols-12 px-10  max-w-screen-xl">
          <div className=" col-span-8 space-y-5">
            <div className="text-5xl font-bold ">
              <div className="h-16 w-44 bg-gray-200 rounded-full mb-2.5" />
            </div>
            <div className="text-slate-500 font-semibold">
              <div className="h-2 w-44 bg-gray-200 rounded-full mb-2.5" />
            </div>
            <div>
              <div className="h-2 w-44 bg-gray-200 rounded-full mb-2.5" />
            </div>
          </div>
          <div className=" col-span-4 py-5 mt-2">
            <div className="h-2 w-14 bg-gray-200 rounded-full mb-2.5" />
            <div className="flex items-center  gap-x-5">
              <div className="rounded-full w-9 h-9 grid place-content-center pb-0.5 bg-gray-600">
                <span className="text-gray-300 w-9  h-9 flex justify-center items-center text-xl ">
                  <div className="h-10 w-10 mt-3 bg-gray-200 rounded-full mb-2.5" />
                </span>
              </div>
              <div className="">
                <span className=" text-xl font-bold">
                  <div className="h-2 w-16 bg-gray-200 rounded-full mb-2.5" />
                </span>
                <div className="text-slate-500 space-y-3">
                  <div className="h-2 w-72 bg-gray-200 rounded-full mb-2.5" />
                  <div className="h-2 w-72 bg-gray-200 rounded-full mb-2.5" />
                  <div className="h-2 w-72 bg-gray-200 rounded-full mb-2.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSkeleton;
