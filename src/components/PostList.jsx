import { useSelector } from "react-redux";
import TrackCard from "./TrackCard";

function PostList() {
  const posts = useSelector((state) => state.post.posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <p>Rating: {post.rating}</p>
          <p>Song Name: {post.songName}</p>
          <TrackCard trackName={post.songName} />
        </div>
      ))}
    </div>
  );
}

export default PostList
