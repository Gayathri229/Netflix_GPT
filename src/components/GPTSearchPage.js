import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";


const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img src={NETFLIX_BG} alt="Sign in background" className="h-screen object-cover md:h-auto" />
        <div className="absolute bg-black inset-0 opacity-60"></div>
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearchPage;
