import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_TRAILER, API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useFetchMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    try {
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
    } catch (error) {
      console.error("Error fetching movie trailer: ", error);
    }
  };

  useEffect(() => {
    movieId && fetchMovieTrailer();
  }, []);
};

export default useFetchMovieTrailer;
