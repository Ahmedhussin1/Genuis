import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

function AlbumCard({
  albumImg,
  albumName,
  artistName,
  totalTracks,
  artistUrl,
  albumUrl
}) {
  return (
    <div>
      <div className="p-5 bg-[#1a1a1a] w-fit space-y-5 rounded">
        <Link to={albumUrl}>
            <div className="flex items-center justify-center">
                <img className="rounded" src={albumImg} />
            </div>
        </Link>
        {/* title container */}
        <div className="flex items-center gap-2 max-w-[300px]">
          <Link to={albumUrl}>
              <h1 className="text-[#fbfbfb] text-2xl text-start font-bold">
                {albumName}
              </h1>
          </Link>
        </div>
        {/* artist name container */}
        <div className="flex flex-col space-y-5 justify-between">
          <div className="flex items-center space-x-2">
            {/* followers number */}
            <div className="flex ">
              <span className="text-[#a6a6a6]">
                Total Tracks: {totalTracks}
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#a6a6a6] mt-1" />
            {/* artist name */}
            <span className="text-[#a6a6a6]">
              <a className="hover:underline" target="_blank" href={artistUrl}>
                {artistName}
              </a>
            </span>
          </div>
          {/* go to the song buttons */}
          <div className="flex items-center justify-center space-x-2">
            <a target="_blank" href={albumUrl}>
              <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
                <FaSpotify />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
