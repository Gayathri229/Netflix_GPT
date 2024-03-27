import { useEffect } from "react";
import { TV_SHOWS, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTvShows } from "../utils/moviesSlice";

const useFetchTvShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.movies.tvShows);

  const getTvShows = async () => {
    try {
      const tvShowsData = await fetch(TV_SHOWS, API_OPTIONS);
      const json = await tvShowsData.json();
      dispatch(addTvShows(json?.results));
    } catch (error) {
      console.error("Error fetching TV Shows: ", error);
    }
  };

  useEffect(() => {
    !tvShows && getTvShows();
  }, []);
};

export default useFetchTvShows;
