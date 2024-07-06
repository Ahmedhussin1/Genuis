import useFetchMoodPlaylist from "../hooks/useFetchMoodPlaylist";
import PlayListCard from "../components/PlayListCard";

function MoodPlayLists() {
  const { results, loading } = useFetchMoodPlaylist();

  return <PlayListCard title={'Mood'} results={results} loading={loading} />;
}

export default MoodPlayLists;
