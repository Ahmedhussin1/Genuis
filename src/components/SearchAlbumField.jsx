import axios from "axios";
import { useState } from "react";
import { searchSpotify } from "../services/spotifyService";
import LoadingAnimation from "./loading/LoadingAnimation";

function SearchAlbumField({ onAlbumSelect }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setResults([]);
      return;
    }
    setLoading(true);

    try {
      const data = await searchSpotify(e.target.value, "query");
      setResults(data.albums.items);
    } catch (err) {
      console.error("error fetching search result" + err);
    } finally {
      setLoading(false);
    }
  };

  const handleQuerySelection = (album) => {
    setQuery(album.name);
    setResults([]);
    onAlbumSelect(album);
  };

  return (
    <div>
      <p>Album Name</p>
      <input type="text" value={query} onChange={handleSearch} />
      {loading && <LoadingAnimation />}
      {results.length > 0 && (
        <ul>
          {results.map((result) => {
            <li key={result.id} onClick={handleQuerySelection}>
              {result.name}
              by
              {result.artist[0].name}
            </li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchAlbumField;
