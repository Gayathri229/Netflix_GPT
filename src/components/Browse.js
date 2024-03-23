import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const nowPlayingMovies = useFetchNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
