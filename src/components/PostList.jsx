import { useSelector } from "react-redux";
import TrackCard from "./TrackCard";

function PostList() {
  const posts = useSelector((state) => state.post.posts);
  console.log("song name :" + posts.songName);

  return (
    <div className="grid grid-cols-2 gap-10">
      {posts.map((post) => (
        <div
          className="bg-[black] min-w-[500px] p-5 rounded flex flex-col justify-between gap-3"
          key={post.id}
        >
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold ">{post.title}</h2>
            <p className="text-start">{post.text}</p>
            <p>Rating: {post.rating}</p>
            <p>Song Name: {post.songName}</p>
          </div>
          <div className="flex justify-start items-center">
            <TrackCard trackName={post.songName} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
