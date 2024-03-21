export const checkValidData = (isSignInForm, email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isSignInForm) {
  //   console.log("blaa");
  //   const isNameValid =
  //     //   /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
  //     //   /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/
  //     /^[A-Z]/.test(name);

  //   if (!isNameValid) return "Name is not valid";
  // }

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
