import { useSelector } from "react-redux";
import TrackCard from "./TrackCard";

function PostList() {
 
  const posts = useSelector((state) => state.post.posts);
  console.log("song name :" + posts.songName)


  return (
    <div className="grid grid-cols-3 gap-10">
      {posts.map((post) => (
        <div className="bg-[black] max-w-[500px] p-5 rounded" key={post.id}>
          <h2 className="text-2xl font-bold ">{post.title}</h2>
          <p>{post.text}</p>
          <p>Rating: {post.rating}</p>
          <p>Song Name: {post.songName}</p>
          <TrackCard trackName={post.songName} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
