import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-16 absolute bg-gradient-to-r from-black font-netflixSansRegular">
      <h1 className="text-6xl font-netflixSansBold text-white ">{title}</h1>
      <p className="py-6 text-lg w-[40%] text-white">{overview}</p>
      <div className="flex items-center">
        <button className="flex items-center bg-white text-black px-8 py-[10px] rounded-sm hover:bg-opacity-70">
          <FaPlay size={24} className="mr-2" />
          <p className="text-lg font-bold">Play</p>
        </button>
        <button className="flex items-center bg-white bg-opacity-30 text-white px-7 py-[10px] ml-4 rounded-sm hover:bg-opacity-10">
          <AiOutlineInfoCircle size={28} className="mx-2"/>
          <p className="text-lg font-semibold">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
