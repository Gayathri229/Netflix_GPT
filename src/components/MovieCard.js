import React from "react";
import { CDN_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 mr-2">
      <img
        src={CDN_POSTER_URL + posterPath}
        alt="movie-poster"
        className="rounded-sm"
      />
    </div>
  );
};

export default MovieCard;
