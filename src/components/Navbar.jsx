import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();

  return (
        <nav className="bg-[#262626] w-[70%] rounded-full flex justify-center mx-auto border border-[#404040]">
          <ul className="flex space-x-10 items-center justify-center py-5">
            <li
              className={`text-xl font-bold ${
                location.pathname === "/" ? "text-[#3b82f6]" : "text-[#ffffff]"
              }`}
            >
              <Link to="/">Blog</Link>
            </li>
            <li
              className={`text-xl font-bold ${
                location.pathname === "/home" ? "text-[#3b82f6]" : "text-[#ffffff]"
              }`}
            >
              <Link to="/home">Home</Link>
            </li>
            <li
              className={`text-xl font-bold ${
                location.pathname === "/random-song"
                  ? "text-[#3b82f6]"
                  : "text-[#ffffff]"
              }`}
            >
              <Link to="/random-song">Random Song</Link>
            </li>
            <li
              className={`text-xl font-bold ${
                location.pathname === "/search" ? "text-[#3b82f6]" : "text-[#ffffff]"
              }`}
            >
              <Link to="/search">Genius Search</Link>
            </li>
            <li
              className={`text-xl font-bold ${
                location.pathname === "/spotify" ? "text-[#3b82f6]" : "text-[#ffffff]"
              }`}
            >
              <Link to="/spotify">Spotify Search</Link>
            </li>
          </ul>
        </nav>
  );
}

export default Navbar;
