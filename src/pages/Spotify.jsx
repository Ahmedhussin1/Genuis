import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import {searchSpotify} from '../services/spotifyService'

function Spotify() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
        const data = await searchSpotify(query)
        setResults(data.albums.items)
    }catch(error){
        console.error('Error fetching search result', error);
    }finally{
        setLoading(false)
    }
  };
  return (
    <div>
      <h1>Spotify search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search for an album, artist, or track"
        />
        <button type="submit">Search</button>
        {loading ? (
          <div>
            <LoadingAnimation />
          </div>
        ) : (
          <div>
            {results.map((result, index) => (
              <div key={index}>
                <h1>{result.name}</h1>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default Spotify;
