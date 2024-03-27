import { useEffect } from "react";
import { UPCOMING_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useFetchUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    try {
      const upcomingMoviesData = await fetch(UPCOMING_MOVIES, API_OPTIONS);
      const json = await upcomingMoviesData.json();
      dispatch(addUpcomingMovies(json?.results));
    } catch (error) {
      console.error("Error fetching Upcoming movies: ", error);
    }
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useFetchUpcomingMovies;
