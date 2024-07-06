import useFetchRomancePlaylist from "../hooks/useFetchRomancePlaylist";
import PlayListCard from "../components/PlayListCard";

function Romance() {
  const { results, loading } = useFetchRomancePlaylist();

  return <PlayListCard title={'Romance'} results={results} loading={loading} />;
}

export default Romance;
