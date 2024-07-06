import Romance from "../playlists/Romance";
import MoodPlayLists from "../playlists/MoodPlaylists";
import ForYouPlaylists from "../playlists/ForYouPlaylists";

function Home() {
  return (
    <div className="">
      <Romance />
      <MoodPlayLists />
      <ForYouPlaylists/>
    </div>
  );
}

export default Home;
