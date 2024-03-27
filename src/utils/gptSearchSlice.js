import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addBardMovieResult: (state, action) => {
      const { bardMovies, tmdbMovieResults } = action.payload;
      state.movieNames = bardMovies;
      state.movieResults = tmdbMovieResults;
    },
  },
});

export const { toggleGPTSearchView, addBardMovieResult } =
  gptSearchSlice.actions;
export default gptSearchSlice.reducer;
