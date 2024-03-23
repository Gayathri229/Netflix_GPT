import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_TRAILER, API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useFetchMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterTrailerVideos = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailerVideos.length
      ? filterTrailerVideos[0]
      : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};

export default useFetchMovieTrailer;
