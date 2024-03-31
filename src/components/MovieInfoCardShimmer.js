import React from "react";

const MovieInfoCardShimmer = () => {
  console.log("Movie info card shimmer");
  return (
    <div className="fixed bg-black bg-opacity-90 w-full z-20 shimmer-card">
      <div className="w-3/5 m-auto left-0 right-0">
        <div className="relative mx-6">
          <div
            className="w-full h-[450px] bg-gray-700 m-2 rounded-sm shimmer-effect"
            alt="backdrop"
          ></div>
          <div className="absolute w-[250px] h-[30px] bg-gray-600 bottom-6 m-2 mx-10 shimmer-effect"></div>
        </div>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-7 m-4">
            <div className="w-[100px] h-[25px] bg-gray-700 m-4 shimmer-effect"></div>
            <div className="w-[200px] h-[20px] bg-gray-700 m-4 shimmer-effect"></div>
            <div className="w-[400px] h-[80px] bg-gray-700 m-4 shimmer-effect"></div>
          </div>
          <div className="col-span-5 m-4">
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
