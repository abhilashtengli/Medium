// const BlogsSkeleton = () => {
//   return (
//     <div role="status" className="max-w-sm animate-pulse">
//       <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
//       <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5" />
//       <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
//       <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5" />
//       <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5" />
//       <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]" />
//       <span className="sr-only">Loading...</span>
//     </div>
//   );
// };

// export default BlogsSkeleton;

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer space-">
        <div className="flex items-center gap-x-8">
          <div className="h-7 w-7 bg-gray-200 rounded-full  mb-2.5" />
          <div className="h-2 w-16 bg-gray-200 rounded-full mb-2.5" />
          <div className="h-2 w-16 bg-gray-200 rounded-full mb-2.5" />
          <div className="flex justify-center flex-col pl-2 ">
            <div className="h-1 w-1 rounded-full bg-slate-500" />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200  rounded-full mb-3.5" />
        </div>
        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
