import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleSongData } from "../services/spotifyService";
import LoadingAnimation from "../components/LoadingAnimation";

function SpotifySongSinglePage() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);

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
  if (loading) {
    return <LoadingAnimation />;
  }
  if (!song) {
    return <LoadingAnimation />;
  }
  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <h1>{song?.name}</h1>
        </div>
      )}
    </div>
  );
}

export default SpotifySongSinglePage;
