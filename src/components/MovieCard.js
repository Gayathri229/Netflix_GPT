import React from "react";
import { CDN_POSTER_URL } from "../utils/constants";
import NO_IMAGE from "../assets/images/no-image-available.jpg";
import { useDispatch } from "react-redux";
import { handleShowMovieInfo } from "../utils/moviesSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    movieId &&
      dispatch(
        handleShowMovieInfo({
          showInfo: true,
          movieId: movieId,
          movieDetails: {},
          movieCredits: {},
          movieKeywords: {},
        })
      );
  };

  return (
    <div className="w-20 md:w-32 mr-2 hover:scale-110 transition-transform duration-300 ease-in-out" onClick={handleCardClick}>
      <img
        src={posterPath ? CDN_POSTER_URL + posterPath : NO_IMAGE}
        alt="movie-poster"
        className="rounded-sm w-full h-44"
      />
    </div>
  );
};

export default MovieCard;
