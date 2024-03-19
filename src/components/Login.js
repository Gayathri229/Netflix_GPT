import Header from "./Header";
import { LANDING_PAGE_BG } from "../utils/constants";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    //Validate form data
    const message = checkValidData(
      isSignInForm,
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LANDING_PAGE_BG} alt="Sign in background" />
        <div className="absolute bg-black inset-0 opacity-60"></div>
      </div>
      <form
        className="absolute bg-black bg-opacity-70 w-4/12 flex flex-col p-12 my-28 mx-auto right-0 left-0 text-white rounded-sm"
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
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 mx-8 bg-white bg-opacity-5 border border-white border-opacity-40 rounded-sm"
          ref={password}
        />
        <p className="mx-8 text-red-700 text-sm"> {errorMessage}</p>
        <button
          type="submit"
          className="p-2 my-2 mx-8 font-semibold bg-[#e50914] rounded-sm"
          onClick={handleFormSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 mx-8">
          {isSignInForm ? (
            <>
              <span className="opacity-70">New to Netflix? </span>
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
      </form>
    </div>
  );
};
export default Login;

//rafce - react arrow function export component
