import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      setIsLogged(true);
    }
    console.log(isLogged);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full p-5 bg-[#262626]">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="text-xl font-bold text-[#ffffff]">MELOPHILE</div>
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto bg-[#262626] sm:bg-transparent p-5 sm:p-0`}
      >
        <ul className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10 items-center justify-center">
          <li
            className={`text-xl font-bold ${
              location.pathname === "/" ? "text-[#3b82f6]" : "text-[#ffffff]"
            }`}
          >
            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/">
              Blog
            </Link>
          </li>
          <li
            className={`text-xl font-bold ${
              location.pathname === "/home"
                ? "text-[#3b82f6]"
                : "text-[#ffffff]"
            }`}
          >
            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/home">
              Home
            </Link>
          </li>
          {/* <li
            className={`text-xl font-bold ${
              location.pathname === "/random-song"
                ? "text-[#3b82f6]"
                : "text-[#ffffff]"
            }`}
          >
            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/random-song">
              Random Song
            </Link>
          </li>
          <li
            className={`text-xl font-bold ${
              location.pathname === "/search"
                ? "text-[#3b82f6]"
                : "text-[#ffffff]"
            }`}
          >
            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/search">
              Genius Search
            </Link>
          </li> */}
          <li
            className={`text-xl font-bold ${
              location.pathname === "/spotify"
                ? "text-[#3b82f6]"
                : "text-[#ffffff]"
            }`}
          >
            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="/spotify">
              Spotify Search
            </Link>
          </li>
        </ul>
      </nav>
      {!isLogged && (
        <div className="flex items-center gap-5 mt-5 sm:mt-0">
          <Link to={"/log-in"} className="underline text-white">
            Login
          </Link>
          <Link to={"/sign-up"} className="underline text-white">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
