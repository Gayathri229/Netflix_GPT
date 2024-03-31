import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trendingAll: null,
    tvShows: null,
    showMovieInfo: {
      showInfo: false,
      movieId: null,
      movieDetails: {},
      movieCredits: {},
      movieKeywords: {},
    },
    playTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingAll: (state, action) => {
      state.trendingAll = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    handleShowMovieInfo: (state, action) => {
      state.showMovieInfo = action.payload;
    },
    handlePlayTrailer: (state, action) => {
      state.playTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingAll,
  addTvShows,
  handleShowMovieInfo,
  handlePlayTrailer,
} = moviesSlice.actions;
export default moviesSlice.reducer;
