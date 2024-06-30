import { useEffect, useState } from "react";
import LoadingAnimation from "./loading/LoadingAnimation";
import { fetchTopTrack } from "../services/musximatchService";

function TopTrackChart() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopChartData = async () => {
      setLoading(true);
      try {
        const topTracks = await fetchTopTrack("us","top");
        setTracks(topTracks);
        console.log("fetched data"+topTracks);
      } catch (error) {
        console.error("Error fetching top chart data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopChartData();
  }, []);
  return (
    <div>
      <h1>
        {loading && <LoadingAnimation />}
        {tracks.map((track) => (
          <div key={track.id}>
            <h2>{track.track.track_name}</h2>
            <img src={track.track.album_coverart_100x100} alt={track.name} />
          </div>
        ))}
      </h1>
    </div>
  );
}

export default TopTrackChart;
