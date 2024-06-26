import Header from "./Header";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleViewPassword = () => {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const handleFormSubmit = () => {
    //Validate form data
    const message = checkValidData(
      isSignInForm,
      // name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_BG}
          alt="Sign in background"
          className="h-screen md:h-auto object-cover"
        />
        <div className="absolute bg-black inset-0 opacity-60"></div>
      </div>
      <form
        className="absolute bg-black bg-opacity-70 w-full md:w-4/12 flex flex-col py-2 md:p-12 my-28 mx-auto right-0 left-0 text-white rounded-sm"
        onSubmit={(event) => event.preventDefault()}
      >
        <h1 className="text-3xl font-bold mb-6 mx-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 mx-8 bg-white bg-opacity-5 border border-white border-opacity-40 rounded-sm"
            ref={name}
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-4 my-2 mx-8 bg-white bg-opacity-5 border border-white border-opacity-40 rounded-sm"
          ref={email}
        />
        <div className="relative my-2 mx-8">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-4 w-full bg-white bg-opacity-5 border border-white border-opacity-40 rounded-sm"
            ref={password}
          />
          <FaEye
            className="absolute right-5 bottom-5 cursor-pointer"
            onClick={handleViewPassword}
          />
        </div>
        <p className="mx-8 text-red-700 text-sm"> {errorMessage}</p>
        <button
          type="submit"
          className="p-2 my-2 mx-8 font-semibold bg-[#e50914] rounded-sm"
          onClick={handleFormSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex items-center my-2 mx-8">
          <input type="checkbox" value="Remember password" className="mr-1" />
          <p className="opacity-70 text-sm">Remember Me</p>
        </div>

        <p className="my-2 mx-8">
          {isSignInForm ? (
            <>
              <span className="opacity-70">New to Bardflix? </span>
              <button className="font-semibold" onClick={toggleSignInForm}>
                Sign up now.
              </button>
            </>
          ) : (
            <>
              <span className="opacity-70">Already registered? </span>
              <button className="font-semibold" onClick={toggleSignInForm}>
                Sign in Now.
              </button>
            </>
          )}
        </p>
        {/* <p className="my-2 mx-8 text-sm ">This is not a real Netflix </p> */}
      </form>
    </div>
  );
};
export default Login;

//rafce - react arrow function export component
