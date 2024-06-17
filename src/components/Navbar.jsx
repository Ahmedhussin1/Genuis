import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-[#262626] w-[50%] rounded-full flex justify-center mx-auto border border-[#404040]">
      <ul className="flex space-x-10 items-center justify-center py-5">
        <li
          className={`text-xl font-bold ${
            location.pathname === "/" ? "text-[#ff3533]" : "text-[#ffffff]"
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`text-xl font-bold ${
            location.pathname === "/random-song"
              ? "text-[#ff3533]"
              : "text-[#ffffff]"
          }`}
        >
          <Link to="/random-song">Random Song</Link>
        </li>
        <li
          className={`text-xl font-bold ${
            location.pathname === "/search" ? "text-[#ff3533]" : "text-[#ffffff]"
          }`}
        >
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
