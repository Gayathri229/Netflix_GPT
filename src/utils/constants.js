export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_ICON =
  "https://occ-0-6059-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const USER_AVATAR =
  "https://occ-0-6059-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDVlYTk0OWU2MDE4YjAxM2Y0ODRiNmExZjkyOThiNCIsInN1YiI6IjY1ZmQ3MTFiMDkyOWY2MDE2NDk5Y2UxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ccr591R-q1SDuCKjooStLevMUT8qiKSSiedMMT7Pl88",
  },
};

export const NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const MOVIE_TRAILER =
  "https://api.themoviedb.org/3/movie/1011985/videos?language=en-US";

export const CDN_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const TRENDING_ALL = "https://api.themoviedb.org/3/trending/all/day";

export const TV_SHOWS =
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "tamil",
    name: "தமிழ்",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "french",
    name: "French",
  },
];

export const GEMINIAI_KEY = process.env.REACT_APP_BARD_KEY;