import React from "react";

function AlbumCard({ albumUrl,albumName }) {
  return (
    <div>
      <div>
        <img src={albumUrl} />
      </div>
      <div>
        <h1>{albumName}</h1>
      </div>
    </div>
  );
}

export default AlbumCard;
