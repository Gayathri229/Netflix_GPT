import React from "react";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { handlePlayTrailer } from "../utils/moviesSlice";
import { FaChevronLeft } from "react-icons/fa6";

const Trailer = ({ trailerMovieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useFetchMovieTrailer(trailerMovieId);

  const handleCloseTrailer = () => {
    dispatch(handlePlayTrailer(null));
  };
  
  return (
    <div>
      <div className="w-screen">
        <div
          className="absolute flex items-center left-2 top-12 text-white z-10 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer hover:scale-110"
          onClick={handleCloseTrailer}
        >
          <FaChevronLeft size={18} className="mr-1" />
          <p className="font-netflixSansRegular">Back</p>
        </div>
        <iframe
          className="w-screen h-screen"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?version=3&si=tK5IaWncafZ0vSx8&amp;controls=0&autoplay=1&mute=0&loop=1&playlist=" +
            trailerVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <div className="absolute inset-0"></div>
      </div>
    </div>
  );
};

export default Trailer;
