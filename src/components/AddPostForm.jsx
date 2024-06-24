import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchTrackField from "./SearchTrackField";
import { addPost } from "../features/posts/postSlice";

function AddPostForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [songName, setSongName] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, text, songName, rating }));
    console.log("title:"+title,"text:"+ text,"rating:"+ rating,"song name:"+songName);
    setShowPopup(false);
    setTitle("");
    setText("");
    setRating(0);
    setSongName("");
  };
  const handleSelectedSong = (song) => {
    setSongName(song);
  };
  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Your Take ?</button>
      {showPopup && (
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              {/* post title */}
              <div>
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* post text */}
              <div>
                <label>Your opinion</label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              {/* post song */}
              <div>
                <label>Song name</label>
                <SearchTrackField onSelectSong={handleSelectedSong} />
                <p>Selected Song: {songName}</p>
              </div>
              {/* post rating */}
              <div>
                <label>Rating</label>
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  min="0"
                  max="5"
                />
              </div>
              {/* submit button */}
              <div>
                <button type="submit">Publish</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPostForm;
