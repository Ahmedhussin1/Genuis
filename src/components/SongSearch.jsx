import { useState } from "react"
import { searchSong } from "../services/geniusService";

function SongSearch() {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSubmit =async (e) =>{
        e.preventDefault();
        setLoading(true)
        try{
            const hits = await searchSong(query)
            setResult(hits)
            setLoading(false)
        }catch(error){
            console.error('Error during search', error)

        }
    }

  return (
    <div>
      <h1>Search a Song Now</h1>
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
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-3 py-10 gap-5">
        {result.map((song, index) => (
          <div className="flex flex-col items-center gap-5" key={index}>
            <a href="song.result.url">
              <img src={song.result.song_art_image_thumbnail_url} />
            </a>
            <h1 className="text-xl">
              <a className="text-white" href={song.result.url}>
                {song.result.full_title}
              </a>
            </h1>
            <p>{song.result.release_date_for_display}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongSearch