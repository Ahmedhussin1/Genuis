import React from "react";

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
      <div>
        <a href={trackLink} target="_blank">
          <img className="rounded pb-5" src={trackImgUrl} />
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <span className="text-2xl font-bold">{trackName}</span>
        </div>
        <div>
          <span className="text-[#a6a6a6]">
            <a
              className="hover:underline cursor-pointer"
              href={albumLink}
              target="_blank"
            >
              {albumName}
            </a>
          </span>
        </div>
        <div className="flex space-x-1 text-[#a6a6a6] hover:underline">
          {artistsName}
        </div>
        <div>
          <a target="_blank" href={trackLink}>
            <span>Listen</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
