import { useDispatch, useSelector } from "react-redux";
import TrackCard from "./TrackCard";
import { useEffect } from "react";
import { deletePost, fetchPostsByUser } from "../features/posts/postSlice";

function PostList() {
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(fetchPostsByUser(id));
    }
  }, [dispatch]);

   if (status === "loading") {
     return <div>Loading...</div>;
   }

   if (status === "failed") {
     return <div>Error: {error}</div>;
   }

   const handleDeleteButtonClick = (id) =>{
      dispatch(deletePost(id));
   }

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
            <p>@{post.userName}</p>
            <p className="text-start">{post.text}</p>
            <p>Rating: {post.rating}</p>
          </div>
          <div className="flex justify-start items-center">
            <TrackCard trackName={post.songName} />
          </div>
          <div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDeleteButtonClick(post.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
