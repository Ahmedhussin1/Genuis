import { useState } from "react";
import { searchSong } from "../services/geniusService";
import LoadingAnimation from "./loading/LoadingAnimation";
import SongCard from "./SongCard";

function SongSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const hits = await searchSong(query);
      setResult(hits);
      setLoading(false);
    } catch (error) {
      console.error("Error during search", error);
    }
  };

  return (
    <div className="">
      <form
        className="flex justify-center items-center gap-5 pt-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search a song"
          className="px-5 py-2 rounded"
        />
        <button type="submit">Search</button>
      </form>
      <div className="grid grid-cols-3 py-10 gap-5">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center mt-10">
            <LoadingAnimation />
          </div>
        ) : (
          result.map((song, index) => (
            <div className="flex flex-col items-center gap-5" key={index}>
              <SongCard
                appleUrl={song.result.url}
                artistLink={song.result.url}
                artistName={song.result.artist_names}
                genuisLink={song.result.url}
                imgUrl={song.result.header_image_thumbnail_url}
                songName={song.result.full_title}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SongSearch;
