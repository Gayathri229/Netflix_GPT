import { useEffect } from "react";
import { TRENDING_ALL, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingAll } from "../utils/moviesSlice";

const useFetchTrendingData = () => {
  const dispatch = useDispatch();
  const trendingAll = useSelector((store) => store.movies.trendingAll);

  const getTrendingAllData = async () => {
    try {
      const trendingAllData = await fetch(TRENDING_ALL, API_OPTIONS);
      const json = await trendingAllData.json();
      dispatch(addTrendingAll(json?.results));
    } catch (error) {
      console.error("Error fetching Trending All data: ", error);
    }
  };

  useEffect(() => {
    !trendingAll && getTrendingAllData();
  }, []);
};

export default useFetchTrendingData;
