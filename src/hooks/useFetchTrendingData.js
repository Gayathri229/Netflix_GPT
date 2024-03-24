import { useEffect } from "react";
import { TRENDING_ALL, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingAll } from "../utils/moviesSlice";

const useFetchTrendingData = () => {
  const dispatch = useDispatch();
  const getTrendingAllData = async () => {
    const trendingAllData = await fetch(TRENDING_ALL, API_OPTIONS);
    const json = await trendingAllData.json();
    dispatch(addTrendingAll(json?.results));
  };

  useEffect(() => {
    getTrendingAllData();
  }, []);
};

export default useFetchTrendingData;
