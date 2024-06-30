import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchSpotify } from "../services/spotifyService";
import LoadingAnimation from "./loading/LoadingAnimation";
import MultiRowLoading from "./loading/MultiRowLoading";

function TrackCard({ trackName }) {
  const [trackData, setTrackData] = useState(null);

  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        const data = await searchSpotify(trackName, "track");
        if (data.tracks.items.length > 0) {
          setTrackData(data.tracks.items[0]);
        }
      } catch (err) {
        console.error("error fetching track data" + err);
      }
    };
    fetchTrackData();
  }, [trackName]);

  if (!trackData) {
    return <MultiRowLoading />;
  }

  const trackLink = trackData.external_urls?.spotify;
  const albumLink = trackData.album?.external_urls.spotify;
  const trackImgUrl = trackData.album?.images[0]?.url;
  const albumName = trackData.album.name;
  const trackId = trackData.id;

  return (
    <div className="bg-[#1a1a1a] flex flex-col justify-center items-center py-10 rounded">
      {/* track image */}
      <div className="flex justify-center items-center">
        <a href={trackLink} target="_blank">
          <img className="rounded p-5" src={trackImgUrl} />
        </a>
      </div>
      {/* all track data container  */}
      <div className="flex items-center flex-col gap-3">
        {/* track name */}
        <div>
          <span className="text-2xl font-bold">{trackName}</span>
        </div>
        {/* album name */}
        <div>
          <span className="text-[#a6a6a6]">
            <a
              className="hover:underline cursor-pointer"
              href={albumLink}
              target="_blank"
            >
              Album:
              {albumName}
            </a>
          </span>
        </div>
        <div className="flex space-x-1 text-[#a6a6a6] hover:underline">
          {trackData.artists.map((artist, index) => (
            <span key={index}>
              <a target="_blank" href={artist.external_urls.spotify}>
                {artist.name}
                {index < trackData.artists.length - 1 && ", "}
              </a>
            </span>
          ))}
        </div>
        <div>
          <Link to={`/song/${trackId}`}>
            <span>More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
