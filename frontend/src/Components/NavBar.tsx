import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="border-b flex justify-between px-10  py-5">
      <Link to="/blogs">
        <div className="text-xl font-bold text-zinc-700">Medium</div>
      </Link>
      <div className="flex gap-x-5 items-center">
        <Link to="/publish">
          {" "}<button className="bg-green-800 rounded-full py-1 px-5 text-white ">
            Add blog +
          </button>
        </Link>
        <div className="rounded-full w-9 h-9 grid place-content-center pb-0.5 bg-gray-600">
          <span className="text-gray-300 text-xl ">A</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
