import React from "react";

const SongCard = () => {
  const { thumb, title, artist, rating } = data;
  return (
    <div className="song-card">
      <img src={thumb} alt={title} className="st-thumb" />
      <div className="song-title">
        {title} by {artist}
      </div>
    </div>
  );
};

export default SongCard;
