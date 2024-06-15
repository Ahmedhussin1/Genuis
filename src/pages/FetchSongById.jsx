import { useState } from "react";
import { randomSong } from "../services/geniusService";

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
        <p>Loading...</p>
      ) : song ? (
        <p>{song.full_title}</p>
      ) : (
        <p>Click Randomize to Get The Song</p>
      )}
    </div>
  );
}

export default FetchSongById;
