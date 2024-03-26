import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResults from "./GPTMovieSuggestions";

const GPTSearchPage = () => {
  return (
    <div>
      <GPTSearchBar />
      <GPTSearchResults />
    </div>
  );
};

export default GPTSearchPage;
