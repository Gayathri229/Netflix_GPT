import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { handleShowMovieInfo, handlePlayTrailer } from "../utils/moviesSlice";

const VideoTitle = ({ title, overview, movieId }) => {
  const dispatch = useDispatch();

  const handleMoreInfo = () => {
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

  const playTrailer = () => {
    dispatch(handlePlayTrailer(movieId));
  };

  return (
    <div className="w-screen aspect-video pt-[18%] px-6 md:px-16 absolute bg-gradient-to-r from-black font-netflixSansRegular">
      <h1 className="text-xl md:text-6xl font-netflixSansBold text-white ">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-[40%] text-white">
        {overview}
      </p>
      <div className="flex items-center md:m-0 my-4">
        <button
          className="flex items-center bg-white text-black px-3 md:px-8 py-[6px] md:py-[10px] rounded-sm hover:bg-opacity-70"
          onClick={playTrailer}
        >
          <FaPlay size={22} className="mr-2" />
          <p className="text-base md:text-lg font-bold">Play</p>
        </button>
        <button className="hidden md:flex items-center bg-white bg-opacity-30 text-white px-7 py-[10px] ml-4 rounded-sm hover:bg-opacity-10">
          <AiOutlineInfoCircle size={28} className="mx-2" />
          <p className="text-lg font-semibold" onClick={handleMoreInfo}>
            More Info
          </p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
