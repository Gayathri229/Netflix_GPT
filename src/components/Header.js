import React from "react";
import NETFLIX_LOGO from "../assets/Netflix_Logo_PMS.png";
import { USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 z-10 flex justify-between">
      <img src={NETFLIX_LOGO} alt="Netflix logo" className="w-48" />
      {user && (
        <div className="flex m-2 items-center">
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-8 h-8 mr-2 rounded-sm"
          />
          <button className="font-semibold" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
