import PlayListCard from "../components/PlayListCard";
import useFetchPlaylistById from "../hooks/useFetchPlaylistById";

function ForYouPlaylists() {
  const { results, loading } = useFetchPlaylistById();

  return <PlayListCard title={"For You"} results={results} loading={loading} />;
}

export default ForYouPlaylists;
