import React from "react";

const MovieInfoCardShimmer = () => {
  return (
    <div className="fixed bg-black bg-opacity-90 w-full z-20 shimmer-card">
      <div className="w-screen md:w-3/5 m-auto left-0 right-0">
        <div className="relative md:mx-6">
          <div
            className="w-full h-[250px] md:h-[450px] bg-gray-700 md:m-2 rounded-sm shimmer-effect"
            alt="backdrop"
          ></div>
          <div className="absolute w-[250px] h-[30px] bg-gray-600 bottom-6 m-2 mx-10 shimmer-effect"></div>
        </div>
        <div className="md:grid md:grid-cols-12 items-center">
          <div className="md:col-span-7 md:m-4">
            <div className="w-[100px] h-[25px] bg-gray-700 m-4 shimmer-effect"></div>
            <div className="w-[200px] h-[20px] bg-gray-700 m-4 shimmer-effect"></div>
            <div className="w-[350px] md:w-[400px] h-[80px] bg-gray-700 m-4 shimmer-effect"></div>
          </div>
          <div className="md:col-span-5 md:m-4">
            <div className="w-[150px] h-[15px] bg-gray-700 m-4 shimmer-effect"></div>
            <div className="w-[200px] h-[15px] bg-gray-700 m-4 shimmer-effect"></div>
            <div className="w-[300px] h-[25px] bg-gray-700 m-4 shimmer-effect"></div>
            <div className="w-[300px] h-[25px] bg-gray-700 m-4 shimmer-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoCardShimmer;
