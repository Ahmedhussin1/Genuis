import React from 'react'

function TrackCard({ trackImgUrl, trackName }) {
  return (
    <div>
      <div>
        <img src={trackImgUrl} />
      </div>
      <div>
        <h1>{trackName}</h1>
      </div>
    </div>
  );
}

export default TrackCard