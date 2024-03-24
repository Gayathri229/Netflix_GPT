import { useEffect } from "react";
import { POPULAR_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  
  const getPopularMovies = async () => {
    const popularMoviesData = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const json = await popularMoviesData.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useFetchPopularMovies;
