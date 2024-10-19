const NavBar = () => {
  return (
    <div className="border-b flex justify-between px-10  py-5">
      <div className="text-xl font-bold text-zinc-700">Medium</div>
      <div className="flex gap-x-5 items-center">
        <h1 className="bg-green-500 rounded-full py-1 px-5">Publish</h1>
        <div className="rounded-full w-9 h-9 grid place-content-center pb-0.5 bg-gray-600">
          <span className="text-gray-300 text-xl ">A</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
