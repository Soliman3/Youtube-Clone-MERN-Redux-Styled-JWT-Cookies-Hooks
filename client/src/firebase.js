// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiiFv7x4NTQi04Zf7imMenFEhZJdUPK0k",
  authDomain: "clone-ba19e.firebaseapp.com",
  projectId: "clone-ba19e",
  storageBucket: "clone-ba19e.appspot.com",
  messagingSenderId: "57073593290",
  appId: "1:57073593290:web:b9235c3c6da57e3a87fd33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;