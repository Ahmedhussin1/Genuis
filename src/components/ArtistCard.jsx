import { FaSpotify } from "react-icons/fa";

function ArtistCard({
  artistImgUrl,
  artistName,
  artistGenre,
  artistTotalFollowers,
  artistSpotifyUrl,
  artistUrl,
}) {
    // function to formate the artist follower number 
    function formatFollowersCount(number) {
      if (number >= 1e9) {
        return (number / 1e9).toFixed(1) + "B";
      } else if (number >= 1e6) {
        return (number / 1e6).toFixed(1) + "M";
      } else if (number >= 1e3) {
        return (number / 1e3).toFixed(1) + "K";
      } else {
        return number.toString();
      }
    }
    const followers = formatFollowersCount(artistTotalFollowers)
  return (
    <div className="p-5 bg-[#1a1a1a] w-fit space-y-5 rounded">
      <div className="flex items-center justify-center">
        <a target="_blank" href={artistUrl}>
          <img className="rounded" src={artistImgUrl} />
        </a>
      </div>
      {/* title container */}
      <div className="flex items-center gap-2 max-w-[300px]">
        <h1 className="text-[#fbfbfb] text-2xl text-start font-bold">
          {artistName}
        </h1>
      </div>
      {/* artist name container */}
      <div className="flex flex-col space-y-5 justify-between">
        <div className="flex items-center space-x-2">
          {/* followers number */}
          <div className="flex ">
            <span className="text-[#a6a6a6]">
              Total Followers: {followers}
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
          <a target="_blank" href={artistSpotifyUrl}>
            <div className="bg-[#404040] p-5 rounded-full cursor-pointer">
              <FaSpotify />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
