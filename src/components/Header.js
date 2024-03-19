import React from "react";
// import { NETFLIX_LOGO } from "../utils/constants";
import NETFLIX_LOGO from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 mx-28 z-10">
      <img src={NETFLIX_LOGO} alt="Netflix logo" className="w-48" />
    </div>
  );
};

export default Header;
