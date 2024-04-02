import React from "react";
import MovieCard from "./MovieCard";
import { LuChevronRight } from "react-icons/lu";

const MovieList = ({ title, movies }) => {
  return (
    <div className="md:pl-6 pb-4 md:py-4">
      {movies.length > 0 && (
        <>
          <div className="flex items-center">
            <h1 className="font-bold text-lg font-netflixSansBold pl-2 py-4">
              {title}
            </h1>
            <LuChevronRight
              size={21}
              className="cursor-pointer hover:scale-125"
            />
          </div>
          <div className="flex overflow-x-scroll scrollbar-hide pl-2">
            <div className="flex">
              {movies?.map((movie) => (
                <MovieCard
                  key={movie?.id}
                  posterPath={movie?.poster_path}
                  movieId={movie?.id}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;
