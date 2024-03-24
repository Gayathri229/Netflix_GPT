import { useEffect } from "react";
import { TV_SHOWS, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTvShows } from "../utils/moviesSlice";

const useFetchTvShows = () => {
  const dispatch = useDispatch();
  const getTvShows = async () => {
    const tvShowsData = await fetch(TV_SHOWS, API_OPTIONS);
    const json = await tvShowsData.json();
    console.log("Tv shows",json)
    dispatch(addTvShows(json?.results));
  };

  useEffect(() => {
    getTvShows();
  }, []);
};

export default useFetchTvShows;
