import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";
import useFetchTrendingData from "../hooks/useFetchTrendingData";
import useFetchTvShows from "../hooks/useFetchTvShows";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);
  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();
  useFetchTrendingData();
  useFetchTvShows();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

/*
 - Main container
    - Video background (Most popular/ most watched movie by netflix)
    - Video title
 - Secondary container
    - Movie list * n
      - Movie cards * n
 */
