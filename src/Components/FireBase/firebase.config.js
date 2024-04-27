// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNjda257yOu1p37mHQGKE6IybZuC4fl-M",
  authDomain: "tourista-24a6c.firebaseapp.com",
  projectId: "tourista-24a6c",
  storageBucket: "tourista-24a6c.appspot.com",
  messagingSenderId: "917826872654",
  appId: "1:917826872654:web:46edfbbb841207bd1caa1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;