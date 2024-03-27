import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-4">
      <h1 className="font-bold text-lg font-netflixSansBold pl-2 py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide pl-2">
        <div className="flex">
          {movies.length > 0 && movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
