import { SiGenius } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import LoadingAnimation from './LoadingAnimation'

function SongCard({ imgUrl,songName,artistName ,genuisLink,appleUrl ,artistLink }) {
  return (
    <div className="p-5 bg-[#1a1a1a] w-fit space-y-5 rounded">
      <div className="flex items-center justify-center">
        <a>
          <img
            className="rounded"
            src={imgUrl}
          />
        </a>
      </div>
      {/* title container */}
      <div className="flex items-center gap-2 max-w-[400px]">
        <h1 className="text-[#fbfbfb] text-2xl text-start">{songName}</h1>
      </div>
      {/* artist name container */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-[#a6a6a6]">Song</span>
          <div className="w-1 h-1 rounded-full bg-[#a6a6a6] mt-1" />
          <span className="text-[#a6a6a6]">
            <a href={artistLink}>{artistName}</a>
          </span>
        </div>
        {/* go to the song buttons */}
        <div className="flex space-x-2">
          <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
            <a href={appleUrl}>
              <SiApplemusic />
            </a>
          </div>
          <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
            <a href={genuisLink}>
              <SiGenius />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
