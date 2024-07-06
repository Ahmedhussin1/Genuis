import { useEffect, useState } from "react";
import { getPlaylist } from "../services/spotifyService";

const useFetchPlaylistById = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const playListsIds = [
    "1EVMtYsNU1YLcMyQNkfB4dY",
    "6vGVIkDqbo5o4u8sToOIlQ",
    "3CzqatwwqjSAq0JwCVEJix",
  ];
  useEffect(() => {
    const fetchPlayList = async () => {
      try {
        setLoading(true);
        const data = await Promise.all(
          playListsIds.map((id) => getPlaylist(id))
        );
        setResults(data);
        console.log("fetching playlist data by id", data);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayList();
  }, []);
  return { results, loading };
};
export default useFetchPlaylistById;
