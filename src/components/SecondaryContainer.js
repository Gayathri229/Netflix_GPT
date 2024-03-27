import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
      <div className="bg-black text-white">
        <div className="-mt-56 pl-8 relative z-10">
          {movies.nowPlayingMovies && (
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          )}
          {movies.trendingAll && (
            <MovieList title="Trending" movies={movies.trendingAll} />
          )}
          {movies.popularMovies && (
            <MovieList title="Popular" movies={movies.popularMovies} />
          )}
          {movies.topRatedMovies && (
            <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          )}
          {movies.tvShows && (
            <MovieList title="TV Shows" movies={movies.tvShows} />
          )}
          {movies.upcomingMovies && (
            <MovieList title="Upcoming movies" movies={movies.upcomingMovies} />
          )}
        </div>
      </div>
  );
};

export default SecondaryContainer;
