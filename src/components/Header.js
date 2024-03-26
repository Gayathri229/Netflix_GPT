import React, { useEffect } from "react";
import NETFLIX_LOGO from "../assets/Netflix_Logo_PMS.png";
import { SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSearchSlice";
import { CiSearch } from "react-icons/ci";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSearch.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchToggle = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="absolute w-screen px-8 z-10 flex justify-between bg-gradient-to-b from-black">
      <img src={NETFLIX_LOGO} alt="Netflix logo" className="w-48" />
      {user && (
        <div className="flex m-2 items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-black bg-opacity-80 text-white border border-white border-opacity-60 rounded-sm"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black bg-opacity-90 text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearchToggle}
            className="flex p-2 mx-5 justify-center items-center font-netflixSansBold bg-black bg-opacity-80 border border-white border-opacity-60 text-white rounded-sm"
          >
            <CiSearch size={24} className="mr-2" />
           {showGptSearch ? "Browse" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-8 h-8 mr-2 rounded-sm"
          />
          <button
            className="font-semibold text-white font-netflixSansRegular"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
