import { useEffect } from "react";
import { UPCOMING_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useFetchUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const upcomingMoviesData = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await upcomingMoviesData.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useFetchUpcomingMovies;
