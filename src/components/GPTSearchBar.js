import React, { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { genAI } from "../utils/geminiai";
import BardAIResultError from "./BardAIResultError";
import {
  addBardMovieResult,
  clearBardMovieResult,
  handleShowSearchResults,
} from "../utils/gptSearchSlice";

const GPTSearchBar = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const { movieNames, movieResults } = useSelector((store) => store.gptSearch);

  const searchTMDBMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleBardSearch = async () => {
    try {
      dispatch(handleShowSearchResults(true));
      dispatch(clearBardMovieResult());
      console.log(searchRef.current.value);
      const geminiQuery =
        "Act as a movie recommendation system and suggest some movies for this query: " +
        searchRef.current.value +
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Anbe Sivam, Varanam Aayiram, Nanban, Mangatha, Siva Manasula Sakthi";

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(geminiQuery);
      const response = await result.response;
      const geminiResult = response.text();

      if (!geminiResult) {
        <BardAIResultError />;
      }

      const geminiMovies = geminiResult.split(",");
      console.log(geminiMovies);
      const promiseArray = geminiMovies.map((movie) => searchTMDBMovies(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addBardMovieResult({
          bardMovies: geminiMovies,
          tmdbMovieResults: tmdbResults,
        })
      );

      console.log("GPT Search bar movie names", movieResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center pt-[40%] md:pt-[8%]">
      <form
        className="md:w-1/2 w-full grid grid-cols-12 "
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          ref={searchRef}
          className="p-4 my-4 mx-2 md:m-4 col-span-9 rounded-sm font-netflixSansRegular bg-black bg-opacity-90 border border-white text-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="my-4 mx-2 px-0 py-2 md:px-4 md:m-4 bg-[#e50914] text-white col-span-3 rounded-sm font-netflixSansBold"
          onClick={handleBardSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
