import { useEffect } from "react";
import { TOP_RATED_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useFetchTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const topRatedMoviesData = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
      const json = await topRatedMoviesData.json();
      dispatch(addTopRatedMovies(json?.results));
    } catch (error) {
      console.error("Error fetching Top rated movies: ", error);
    }
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useFetchTopRatedMovies;
