import { useState } from "react";
import { randomSong } from "../services/geniusService";
import LoadingAnimation from "../components/LoadingAnimation";
import SongCard from "../components/SongCard";

function FetchSongById() {
  const [loading, setLoading] = useState(false);
  const [song, setSong] = useState("");

  const randomNumber = Math.floor(Math.random() * 9999999) + 1;
  const handleRandomize = async () => {
    setLoading(true);
    try {
      const result = await randomSong(randomNumber);
      setSong(result);
    } catch (error) {
      console.error("Error during randomize song", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1> randomize a song </h1>
      <button onClick={handleRandomize}>Randomize</button>
      {loading ? (
        <div className="col-span-3 flex justify-center items-center mt-10">
          <LoadingAnimation />
        </div>
      ) : song ? (
        <div className="flex justify-center items-center pt-10">
            <SongCard appleUrl={song.apple_music_player_url} 
            artistLink={song.primary_artist.url} 
            artistName={song.primary_artist.name} 
            genuisLink={song.url} 
            imgUrl={song.song_art_image_thumbnail_url} 
            songName={song.full_title}/>
        </div>
      ) : (
        <p>Click Randomize to Get The Song</p>
      )}
    </div>
  );
}

export default FetchSongById;
