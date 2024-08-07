import { useState } from "react";
import LoadingAnimation from "../components/loading/LoadingAnimation";
import { searchSpotify } from "../services/spotifyService";
import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import SearchResultTrackCard from "../components/SearchResultTrackCard";

function Spotify() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("album");
  const [results, setResults] = useState([]);

  const defaultImage = "../../public/notFound.jpg";

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // check the type of the search
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
  const handleSelectCategory = (e) => {
    setQuery("");
    setResults([]);
    setType(e.target.value);
  };
  return (
    <div className="flex flex-col gap-5">
      <h1>Spotify search</h1>
      <form className="space-x-5" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search for an album, artist, or track"
          className="py-2 px-3 rounded"
        />

        <select value={type} onChange={(e) => handleSelectCategory(e)}>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
          <option value="track">Track</option>
        </select>

        <button type="submit">Search</button>
      </form>
      <div className="grid grid-cols-2 py-10 gap-10 xl:grid-cols-3">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center mt-10">
            {/* <FullLoadingAnimation backgroundColor='white' height='450' imgUrl='../../public/Because we are disturbed that the art of the mixtape has in fact been lost on a generation_.gif' /> */}
            <LoadingAnimation />
          </div>
        ) : (
          results.map((result) => {
            if (type === "album") {
              return (
                <AlbumCard
                  albumName={result.name}
                  albumImg={result.images[1]?.url}
                  albumUrl={result.external_urls?.spotify}
                  artistName={result.artists?.map((artist, index) => (
                    <div className="" key={index}>
                      <p className="flex">
                        {artist.name}
                        {index < result.artists.length - 1 && ","}
                      </p>
                    </div>
                  ))}
                  totalTracks={result.total_tracks}
                  artistUrl={result.artists[0]?.external_urls.spotify}
                  key={result.id}
                />
              );
            } else if (type === "artist") {
              return (
                <div
                  key={result.id}
                  className="flex flex-col items-center gap-5"
                >
                  <ArtistCard
                    artistName={result.name}
                    artistImgUrl={result.images[1]?.url || defaultImage}
                    artistGenre={result.genres}
                    artistSpotifyUrl={result.external_urls.spotify}
                    artistTotalFollowers={result.followers.total}
                    artistUrl={result.external_urls.spotify}
                  />
                </div>
              );
            } else if (type === "track") {
              return (
                <SearchResultTrackCard
                  key={result.id}
                  trackName={result.name}
                />
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
}

export default Spotify;
