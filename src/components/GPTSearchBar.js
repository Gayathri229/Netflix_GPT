import React from "react";
import { NETFLIX_BG } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={NETFLIX_BG} alt="Sign in background" />
        <div className="absolute bg-black inset-0 opacity-60"></div>
      </div>
      <div className="flex justify-center">
        <form className="w-1/2 pt-[8%] grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 col-span-9 rounded-sm font-netflixSansRegular bg-black bg-opacity-90 border border-white text-white"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="m-4 px-4 py-2 bg-[#e50914] text-white col-span-3 rounded-sm font-netflixSansBold">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
