import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchMovieInfo from "../hooks/useFetchMovieInfo";
import { CDN_POSTER_URL } from "../utils/constants";
import { IoCloseOutline } from "react-icons/io5";
import { handleShowMovieInfo, handlePlayTrailer } from "../utils/moviesSlice";
import MovieInfoCardShimmer from "./MovieInfoCardShimmer";
import { FaPlay } from "react-icons/fa";
import NO_IMAGE from "../assets/images/no-image-available.jpg";

const MovieInfoCard = () => {
  const dispatch = useDispatch();
  const movieInfo = useSelector((store) => store.movies.showMovieInfo);
  useFetchMovieInfo(movieInfo?.movieId);

  const handleMovieInfoClose = () => {
    dispatch(
      handleShowMovieInfo({
        showInfo: false,
        movieId: null,
        movieDetails: {},
        movieCredits: {},
        movieKeywords: {},
      })
    );
  };

  const handleWatchTrailer = () => {
    dispatch(handlePlayTrailer(movieInfo?.movieId));
  };

  return Object.keys(movieInfo?.movieDetails).length === 0 ? (
    <MovieInfoCardShimmer />
  ) : (
    <div className="fixed bg-black bg-opacity-90 w-full h-screen z-20 text-white font-netflixSansRegular rounded-sm overflow-y-scroll scrollbar-hide">
      <div className="w-3/5 m-auto left-0 right-0">
        <div className="relative">
          <div className="z-20 absolute m-2 p-1 right-1 top-1 rounded-full bg-black bg-opacity-60 hover:bg-opacity-50 cursor-pointer">
            <IoCloseOutline
              size={24}
              className="cursor-pointer"
              onClick={handleMovieInfoClose}
            />
          </div>
          <div className="z-20 absolute flex bottom-6 mx-8 items-center">
            <p className="text-4xl font-bold mr-4">
              {movieInfo?.movieDetails?.original_title}
            </p>
            <div
              className="flex items-center text-white text-opacity-60 cursor-pointer border border-black border-opacity-10 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full px-2 py-1"
              onClick={handleWatchTrailer}
            >
              <FaPlay size={13} className="mr-1 " />
              <p className="font-semibold text-sm">Watch Trailer</p>
            </div>
          </div>
          <div>
            <img
              src={
                movieInfo?.movieDetails?.backdrop_path !== null
                  ? CDN_POSTER_URL + movieInfo?.movieDetails?.backdrop_path
                  : NO_IMAGE
              }
              alt="movie-backdrop"
              className="w-full h-[490px]"
            />
            <div className="absolute bg-black inset-0 opacity-10"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 my-1 mx-2">
          <div className="col-span-6 m-4">
            <p className="font-bold text-2xl">
              {movieInfo?.movieDetails?.release_date?.split("-")[0]}
            </p>
            <p className="text-[#39ff14] my-2">
              {movieInfo?.movieDetails?.vote_average > 0 && (
                <span>
                  User Score:{" "}
                  {Math.round(movieInfo?.movieDetails?.vote_average * 10)}%
                </span>
              )}
            </p>
            <p className="text-sm my-2">{movieInfo?.movieDetails?.overview}</p>
          </div>
          <div className="col-span-6 m-4">
            <p className="text-sm my-2">
              Run time: {movieInfo?.movieDetails?.runtime} mins
            </p>
            <p className="text-sm">
              {movieInfo?.movieDetails?.release_date && (
                <span>Premiere: {movieInfo?.movieDetails?.release_date} </span>
              )}
            </p>
            <p className="text-sm my-2">
              {movieInfo?.movieCredits?.cast && (
                <span>
                  Cast:{" "}
                  {movieInfo?.movieCredits?.cast
                    ?.filter((_, index) => index < 5)
                    .map((actorName) => actorName?.original_name)
                    .join(", ")}
                </span>
              )}
            </p>
            <p className="text-sm my-2">
              Genre:{" "}
              {movieInfo?.movieDetails?.genres
                ?.map((genre) => genre?.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoCard;
