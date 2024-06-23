import { useState } from "react"
import Spotify from "./Spotify"
import SearchField from "../components/SearchField"

function Home() {
  const [clicked, setClicked] = useState(false)
  const [title, setTitle] = useState('')
  const [text,setText] = useState('')
  const [songName,setSongName] = useState('')

  const togglePopup = () =>{
    setClicked(!clicked)
  }
 const handleSelectSong = (song) => {
    setSongName(song.name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ title, text, songName });
    // Close the popup after submission
    setClicked(false);
  };
  return (
    <div>
      <button onClick={togglePopup}>Add Post</button>
      {clicked && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#404040]rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Text</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Song Name
                </label>
                {/* <input
                  type="text"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                /> */}
                <SearchField onSelectSong={handleSelectSong}/>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home