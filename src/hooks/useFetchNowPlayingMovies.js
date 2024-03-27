import { useEffect } from "react";
import { NOW_PLAYING_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    try {
      const nowPlayingMoviesData = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
      const json = await nowPlayingMoviesData.json();
      dispatch(addNowPlayingMovies(json?.results));
    } catch (error) {
      console.error("Error fetching now playing movies: ", error);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useFetchNowPlayingMovies;
