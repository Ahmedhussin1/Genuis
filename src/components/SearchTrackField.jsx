import { useEffect, useRef, useState } from "react";
import { searchSpotify } from "../services/spotifyService";
import LoadingAnimation from "./loading/LoadingAnimation";

function SearchTrackField({ onSelectSong }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef(null);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    // if (e.target.value === "") {
    //   setResults([]);
    //   return;
    // }

    setLoading(true);
    try {
      const data = await searchSpotify(e.target.value, "track");
      setResults(data.tracks.items);
    } catch (error) {
      console.error("Error fetching search result", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSong = (song) => {
    setQuery(song.name);
    setResults([]);
    onSelectSong(song);
  };

  console.log(containerRef.current);
  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setResults([]);
    }
  };
  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside);
    return() =>{
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[])
  return (
    <div className="relative" ref={containerRef}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a song"
        className="py-2 px-3 rounded w-full"
      />
      {loading && <LoadingAnimation />}
      {results.length > 0 && (
        <ul className="absolute bg-black border border-gray-300 w-full mt-1 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
          {results.map((result) => (
            <li
              key={result.id}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelectSong(result.name)}
            >
              {result.name} by {result.artists[0].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchTrackField;
