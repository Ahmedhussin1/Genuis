import React from "react";
import { Link } from "react-router-dom";

function TrackCard({
  trackImgUrl,
  trackName,
  albumName,
  albumLink,
  artistsName,
  trackLink,
}) {
  return (
    <div className="bg-[#1a1a1a] flex flex-col justify-center items-center py-10 rounded">
      {/* track image */}
      <div className="flex justify-center items-center">
        <a href={trackLink} target="_blank">
          <img className="rounded pb-5" src={trackImgUrl} />
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
          {artistsName}
        </div>
        <div>
          <Link to={`/song/${trackLink}`}>
            <span>More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
