import { useEffect, useState } from "react";
import { getCategoriesPlaylist } from "../services/spotifyService";

const useFetchRomancePlaylist = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategoriesPlaylist = async () => {
      try {
        setLoading(true);
        const data = await getCategoriesPlaylist("romance", "5");
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
export default useFetchRomancePlaylist;
