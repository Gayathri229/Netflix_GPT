import { useEffect } from "react";
import { POPULAR_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const popularMoviesData = await fetch(POPULAR_MOVIES, API_OPTIONS);
      const json = await popularMoviesData.json();
      dispatch(addPopularMovies(json?.results));
    } catch (error) {
      console.error("Error fetching popular movies: ", error);
    }
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default useFetchPopularMovies;
