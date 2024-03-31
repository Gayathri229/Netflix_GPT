import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieResults: null,
    showSearchResults: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    handleShowSearchResults: (state, action) => {
      state.showSearchResults = action.payload;
    },
    addBardMovieResult: (state, action) => {
      const { bardMovies, tmdbMovieResults } = action.payload;
      state.movieNames = bardMovies;
      state.movieResults = tmdbMovieResults;
      state.showSearchResults = false;
    },
    clearBardMovieResult: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const {
  toggleGPTSearchView,
  addBardMovieResult,
  handleShowSearchResults,
  clearBardMovieResult
} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
