import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import GPTSearchShimmer from "./GPTSearchShimmer";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gptSearch);
  const showSearchResults = useSelector(
    (store) => store.gptSearch.showSearchResults
  );

  // if (!movieNames) return;

  if (movieResults?.length === 1)
    <p className="font-netflixSansRegular text-white font-semibold text-xl">
      No results found. Search for a different query.
    </p>;

  return showSearchResults && movieResults === null ? (
    <GPTSearchShimmer />
  ) : (
    <div className="bg-black bg-opacity-30 text-white ">
      {movieResults?.length > 0 && (
        <div className="p-2">
          {movieNames?.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
