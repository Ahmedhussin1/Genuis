import { Link } from "react-router-dom";
import LoadingAnimation from "./loading/LoadingAnimation";

function PlayListCard({ loading, results,title }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center items-center">
        {!loading && (
          <div className="flex justify-start w-[100%] mt-10">
            <h1>{title}</h1>
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
              className="bg-[#1a1a1a] rounded-lg px-5 py-7 flex flex-col justify-between transition-transform transform hover:scale-105 hover:bg-[#151515]"
            >
              <div>
                <Link target="_blank" to={item.external_urls.spotify}>
                  <img className="" src={item.images[0].url} alt={item.name} />
                </Link>
              </div>
              <div>
                <Link target="_blank" to={item.external_urls.spotify}>
                  <p className="pt-5 font-medium text-xl text-left">
                    {item.name}
                  </p>
                </Link>
                <p className="text-left line-clamp-2 font-light text-[#a9a7a7]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlayListCard;
