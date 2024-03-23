import { useEffect } from "react";
import { NOW_PLAYING_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const nowPlayingMoviesData = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const json = await nowPlayingMoviesData.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useFetchNowPlayingMovies;
