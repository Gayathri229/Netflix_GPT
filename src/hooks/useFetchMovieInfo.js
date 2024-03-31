import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { handleShowMovieInfo } from "../utils/moviesSlice";

const useFetchMovieInfo = (movieId) => {
  const movieInfo = useSelector((store) => store.movies.showMovieInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieInfo();
  }, []);
  
  const getMovieInfo = async () => {
    if (movieId) {
      const movieDetails = await fetchMovieDetails(movieId);
      const movieCredits = await fetchMovieCredits(movieId);
      const movieKeywords = await fetchMovieKeywords(movieId);
      dispatch(
        handleShowMovieInfo({
          ...movieInfo,
          movieDetails: movieDetails,
          movieCredits: movieCredits,
          movieKeywords: movieKeywords,
        })
      );
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      return json;
    } catch (error) {
      console.error("Error fetching movie details: ", error);
    }
  };

  const fetchMovieCredits = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };

  const fetchMovieKeywords = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/keywords`,
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };
};

export default useFetchMovieInfo;
