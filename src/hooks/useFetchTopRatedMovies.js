import { useEffect } from "react";
import { TOP_RATED_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useFetchTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const topRatedMoviesData = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await topRatedMoviesData.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useFetchTopRatedMovies;
