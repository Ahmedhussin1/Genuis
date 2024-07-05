import { Link } from "react-router-dom";
import useFetchRomancePlaylist from "../hooks/useFetchRomancePlaylist";
import LoadingAnimation from "../components/loading/LoadingAnimation";

function Romance() {
  const { results, loading } = useFetchRomancePlaylist();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center items-center">
        {!loading && (
          <div className="flex justify-start w-[100%] mt-10">
            <h1>Romance</h1>
          </div>
        )}
        {loading && (
          <div className="mt-52">
            <LoadingAnimation />
          </div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-5">
        {!loading &&
          results.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg px-5 py-7 flex flex-col justify-between"
            >
              <Link target="_blank" to={item.external_urls.spotify}>
                <img src={item.images[0].url} alt={item.name} />
              </Link>
              <Link target="_blank" to={item.external_urls.spotify}>
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Romance;
