import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import { searchSpotify } from "../services/spotifyService";

function Spotify() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("album,artist,track");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        // todo: add conditions for different types like : artist, tracks, playlists
      const data = await searchSpotify(query,type);
      setResults(data[`${type}s`].items || []);
    } catch (error) {
      console.error("Error fetching search result", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Spotify search</h1>
      <form className="space-x-5" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search for an album, artist, or track"
          className="py-2 px-3 rounded"
        />
        
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="album">Album</option>
            <option value="artist">Artist</option>
            <option value="track">Track</option>  
        </select>

        <button type="submit">Search</button>
        {loading ? (
          <div>
            <LoadingAnimation />
          </div>
        ) : (
          <div>
            {results.map((result, index) => (
              <div className="border-gray rounded p-10" key={index}>
                <img src={result.images[1].url} alt={result.name} />
                <h1>
                  <a target="_blank" href={result.external_urls.spotify}>
                    {result.name}
                  </a>
                </h1>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default Spotify;
