import { useDispatch, useSelector } from "react-redux";
import TrackCard from "./TrackCard";
import { useEffect, useState } from "react";
import { deletePost, fetchPosts } from "../features/posts/postSlice";
import { Rating } from "@mui/material";
import Alert from "@mui/material/Alert";

function PostList() {
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    // const id = sessionStorage.getItem("id");
    // if (id) {
    //   dispatch(fetchPostsByUser(id));
    // }
    dispatch(fetchPosts());
    const userId = sessionStorage.getItem("id");
    if (userId) {
      setLoggedIn(true);
    }
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleDeleteButtonClick = (id) => {
    dispatch(deletePost(id));
  };

  console.log("song name :" + posts.songName);

  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
      {alert && (
        <div className="fixed bottom-5 right-5 z-50">
          <Alert severity="error" onClose={() => setAlert(false)}>
            You need to be logged in to delete a post.
          </Alert>
        </div>
      )}
      {posts.map((post) => (
        <div
          className="bg-[black] min-w-[300px] p-5 rounded flex flex-col justify-center gap-3 xl:justify-between xl:min-w-[500px]"
          key={post.id}
        >
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold ">{post.title}</h2>
            <p>@{post.userName}</p>
            <p className="text-start">{post.text}</p>
            <p>
              <Rating
                name="read-only"
                value={post.rating}
                readOnly
                precision={0.5}
              />
            </p>
          </div>
          <div className="flex justify-start items-center">
            <TrackCard trackName={post.songName} />
          </div>
          <div className="flex">
            {post.userId === sessionStorage.getItem("id") && (
              <button
                className="text-red-500 px-3 py-1 rounded underline"
                onClick={() =>
                  loggedIn ? handleDeleteButtonClick(post.id) : setAlert(true)
                }
              >
                delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
