import React, { useState } from "react";
import { CDN_POSTER_URL } from "../utils/constants";
import NO_IMAGE from "../assets/images/no-image-available.jpg";
import { useDispatch, useSelector } from "react-redux";
import { handleShowMovieInfo, handlePlayTrailer } from "../utils/moviesSlice";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();
  const [isCardHovered, setIsCardHovered] = useState(false);

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

  const handleWatchTrailer = () => {
    dispatch(handlePlayTrailer(movieId));
  };

  return (
    <div
      className="relative w-20 md:w-36 mr-4 hover:scale-110 transition-transform duration-300 ease-in-out"
      // onClick={handleCardClick}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <img
        src={posterPath ? CDN_POSTER_URL + posterPath : NO_IMAGE}
        alt="movie-poster"
        className="rounded-sm w-full h-48"
      />
      {isCardHovered && (
        <>
          <div className="absolute bg-black inset-0 opacity-40"></div>
          <div className="absolute z-10 flex items-center text-white top-20 left-10">
            <FaPlay
              size={22}
              className="m-2 cursor-pointer"
              onClick={handleWatchTrailer}
            />
            <AiOutlineInfoCircle
              size={22}
              className="m-2 cursor-pointer"
              onClick={handleCardClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
