import './App.css'
import Navbar from './components/Navbar'
import SongSearch from './components/SongSearch'
import FetchSongById from './pages/FetchSongById'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Spotify from './pages/Spotify';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SongSearch />} />
        <Route path="/random-song" element={<FetchSongById />} />
        <Route path="/spotify" element={<Spotify />} />
      </Routes>
    </Router>
  );
}

export default App
