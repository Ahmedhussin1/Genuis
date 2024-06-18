import React from 'react'

function ArtistCard({ artistImgUrl, artistNameUrl }) {
  return (
    <div>
      <div>
        <img src={artistImgUrl} />
      </div>
      <div>
        <h1>{artistNameUrl}</h1>
      </div>
    </div>
  );
}

export default ArtistCard