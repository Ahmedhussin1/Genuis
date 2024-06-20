import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { singleSongData } from "../services/spotifyService";
import LoadingAnimation from "../components/LoadingAnimation";
import { IoMdArrowRoundBack } from "react-icons/io";

import SongSearch from "../components/SongSearch";
import Spotify from "./Spotify";

function SpotifySongSinglePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);

// function to go navigate to spotify when clicking back button
  const handleBackButton = () => {
    navigate("/spotify");
  };
//   fetching track data
  useEffect(() => {
    const getSongData = async () => {
      setLoading(true);
      try {
        const data = await singleSongData(id);
        setSong(data.tracks[0]);
        console.log(data.tracks[0]);
      } catch (err) {
        console.error("error fetching single song data" + err);
      } finally {
        setLoading(false);
      }
    };
    getSongData();
  }, [id]);

//   check if still loading
  if (loading) {
    return <LoadingAnimation />;
  }
//   check if still fetching
  if (!song) {
    return <LoadingAnimation />;
  }
//   function to convert from milliseconds to minutes
const toMilliseconds = (time) =>{
    const minutes = (parseInt(time) / 60000).toFixed(1);
    const formattedMinutes= minutes.replace('.',':')
    return formattedMinutes;
} 
  return (
    <div>
      {/* <Spotify/> */}
      <button
        className="flex items-center space-x-2"
        onClick={handleBackButton}
      >
        <IoMdArrowRoundBack />
        <span>Back</span>
      </button>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
        <div className="flex justify-center items-center">
            <img src={song.album.images[1].url} alt={song.album.name} />
  
        </div>
          <h1>{song?.name}</h1>
          {song?.artists?.map((artist, index) => (
            <Link key={index} to={artist.external_urls?.spotify}>
              <p className="hover:underline">{artist.name}</p>
            </Link>
          ))}
          <div>
            <Link to={song.preview_url}>
              <button>Preview Now</button>
            </Link>
          </div>
          <div>
            <span>{song.artists.followers?.total}</span>
          </div>
          <div>
            <span>Duration: {toMilliseconds(song.duration_ms)} minutes</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpotifySongSinglePage;
