import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchTrackField from "./SearchTrackField";
import { addPosts } from "../features/posts/postSlice";
import { FaPlus } from "react-icons/fa";
import { nanoid } from "@reduxjs/toolkit";
import Rating from "@mui/material/Rating";
import { Alert } from "@mui/material";

function AddPostForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [songName, setSongName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("id");
    const userName = sessionStorage.getItem("userName");
    if (userId) {
      const newPost = {
        id: nanoid(),
        userId: userId,
        title,
        text,
        songName,
        rating,
        userName,
      };
      dispatch(addPosts(newPost));
      console.log(
        "title:" + title,
        "text:" + text,
        "rating:" + rating,
        "song name:" + songName
      );
      setShowPopup(false);
      setTitle("");
      setText("");
      setRating(0);
      setSongName("");
    } else {
      alert("Please log in to add a post.");
    }
  };
  const handleSelectedSong = (song) => {
    setSongName(song);
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    if (userId) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div>
      {alert && (
        <div className="fixed bottom-5 right-5 z-50">
          <Alert severity="error" onClose={() => setAlert(false)}>
            You need to be logged in to delete a post.
          </Alert>
        </div>
      )}
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-4 rounded-full hover:bg-blue-600 transition duration-300"
          onClick={() => (loggedIn ? setShowPopup(true) : setAlert(true))}
        >
          <FaPlus />
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#353935] p-8 rounded shadow-lg w-96">
            <form onSubmit={handleSubmit}>
              {/* post title */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              {/* post text */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Your opinion
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                ></textarea>
              </div>

              {/* post song */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Song name
                </label>
                <SearchTrackField onSelectSong={handleSelectedSong} />
                <p className="mt-2 text-gray-600">Selected Song: {songName}</p>
              </div>

              {/* post rating */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Rating
                </label>
                <Rating
                  style={{
                    display: "flex",
                  }}
                  name="simple-controlled"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  precision={0.5}
                />
              </div>
              {/* submit button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPostForm;
