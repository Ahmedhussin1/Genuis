import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import { searchSpotify } from "../services/spotifyService";
import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import TrackCard from "../components/TrackCard";

function Spotify() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("album");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // todo: add conditions for different types like : artist, tracks, playlists
      const data = await searchSpotify(query, type);
      if (type === "artist") {
        setResults(data.artists.items);
      } else if (type === "track") {
        setResults(data.tracks.items);
      } else if (type === "album") {
        setResults(data.albums.items);
      }
      return null;
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
            {results.map((result) => {
              if (type === "album") {
                return (
                  <AlbumCard
                    albumName={result.name}
                    albumUrl={result.images[1].url}
                    key={result.id}
                  />
                );
              } else if (type === "artist") {
                return (
                  <ArtistCard
                    artistNameUrl={result.name}
                    artistImgUrl={result.images[1]?.url}
                    key={result.id}
                  />
                );
              } else if (type === "track") {
                return (
                  <TrackCard
                    trackName={result.name}
                    trackImgUrl={result.album.images[1]?.url}
                    key={result.id}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
      </form>
    </div>
  );
}

export default Spotify;
