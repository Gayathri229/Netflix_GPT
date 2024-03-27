import React from "react";
import { CDN_POSTER_URL } from "../utils/constants";
import brokenImage from "../assets/images/image-vector.png"


const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 mr-2">
      <img
        src={posterPath ? CDN_POSTER_URL + posterPath : brokenImage}
        alt="movie-poster"
        className="rounded-sm"
      />
    </div>
  );
};

export default MovieCard;
