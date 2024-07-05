import { useEffect, useState } from "react";
import { getCategoriesPlaylist } from "../services/spotifyService";

const useFetchMoodPlaylist = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategoriesPlaylist = async () => {
      try {
        setLoading(true);
        const data = await getCategoriesPlaylist("mood", "5",'5');
        setResults(data);
        console.log(results);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesPlaylist();
  }, []);
  return { results, loading };
};
export default useFetchMoodPlaylist;
