import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchSpotify } from "../services/spotifyService";
import MultiRowLoading from "./loading/MultiRowLoading";

function SearchResultTrackCard({ trackName }) {
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
    <div className="p-5 bg-[#1a1a1a] w-fit space-y-5 rounded">
      {/* track image */}
      <div className="flex min-w-[300px] justify-center items-center">
        <Link to={trackLink} target="_blank">
          <img className="rounded p-5" src={trackImgUrl} />
        </Link>
      </div>
      {/* all track data container  */}
      <div className="flex items-start flex-col gap-3 p-5">
        {/* track name */}
        <div className="">
          <Link to={trackLink} target="_blank">
            <span className="text-2xl font-bold">{trackName}</span>
          </Link>
        </div>
        {/* album name */}
        <div>
          <Link
            className="hover:underline cursor-pointer"
            to={albumLink}
            target="_blank"
          >
            <span className="text-[#a6a6a6] flex text-start">{albumName}</span>
          </Link>
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

export default SearchResultTrackCard;
