import React, { useRef } from "react";
import { API_OPTIONS, NETFLIX_BG } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { genAI } from "../utils/geminiai";
import BardAIResultError from "./BardAIResultError";
import { addBardMovieResult } from "../utils/gptSearchSlice";

const GPTSearchBar = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="fixed -z-10">
        <img src={NETFLIX_BG} alt="Sign in background" />
        <div className="absolute bg-black inset-0 opacity-60"></div>
      </div>
      <div className="flex justify-center">
        <form
          className="w-1/2 pt-[8%] grid grid-cols-12"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            ref={searchRef}
            className="p-4 m-4 col-span-9 rounded-sm font-netflixSansRegular bg-black bg-opacity-90 border border-white text-white"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="m-4 px-4 py-2 bg-[#e50914] text-white col-span-3 rounded-sm font-netflixSansBold"
            onClick={handleBardSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
