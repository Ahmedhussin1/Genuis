import { SiGenius } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import LoadingAnimation from './LoadingAnimation'
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function SongCard({
  imgUrl,
  songName,
  artistName,
  genuisLink,
  appleUrl,
  artistLink,
  spotifyUrl,
  youtubeUrl,
}) {
  return (
    <div className="p-5 bg-[#1a1a1a] w-fit space-y-5 rounded">
      <div className="flex items-center justify-center">
        <a target="_blank" href={genuisLink}>
          <img className="rounded" src={imgUrl} />
        </a>
      </div>
      {/* title container */}
      <div className="flex items-center gap-2 max-w-[300px]">
        <h1 className="text-[#fbfbfb] text-2xl text-start font-bold">{songName}</h1>
      </div>
      {/* artist name container */}
      <div className="flex flex-col space-y-5 justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-[#a6a6a6]">Song</span>
          <div className="w-1 h-1 rounded-full bg-[#a6a6a6] mt-1" />
          <span className="text-[#a6a6a6]">
            <a target="_blank" href={artistLink}>{artistName}</a>
          </span>
        </div>
        {/* go to the song buttons */}
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
            <a target="_blank" href={spotifyUrl}>
              <FaSpotify />
            </a>
          </div>
          <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
            <a target="_blank" href={youtubeUrl}>
              <FaYoutube />
            </a>
          </div>
          <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
            <a target="_blank" href={appleUrl}>
              <SiApplemusic />
            </a>
          </div>
          <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
            <a target="_blank" href={genuisLink}>
              <SiGenius />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
