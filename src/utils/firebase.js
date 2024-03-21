// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkdxq0K1ryU9rVWbG65d9wtMM_930GCZg",
  authDomain: "netflixgpt-56505.firebaseapp.com",
  projectId: "netflixgpt-56505",
  storageBucket: "netflixgpt-56505.appspot.com",
  messagingSenderId: "1079211369844",
  appId: "1:1079211369844:web:65f548bcb00f2b42897821",
  measurementId: "G-J2QF1RL349",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();