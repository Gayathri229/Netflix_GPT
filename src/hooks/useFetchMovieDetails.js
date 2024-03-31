import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { handleShowMovieInfo } from "../utils/moviesSlice";

const useFetchMovieDetails = (movieId) => {
  const movieInfo = useSelector((store) => store.movies.showMovieInfo);
  const dispatch = useDispatch();
  const testing = useSelector((store) => store.movies);

  const fetchMovieDetails = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(handleShowMovieInfo({ ...movieInfo, movieDetails: json }));
    } catch (error) {
      console.error("Error fetching movie details: ", error);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);
};

export default useFetchMovieDetails;
