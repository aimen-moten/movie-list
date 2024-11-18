// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADYeJksYzp4TTReUgAuOD0Bk6Q7YLLqUY",
  authDomain: "movie-list-ab97e.firebaseapp.com",
  projectId: "movie-list-ab97e",
  storageBucket: "movie-list-ab97e.firebasestorage.app",
  messagingSenderId: "1019788207218",
  appId: "1:1019788207218:web:3b9e346a94c49a6b748eeb",
  measurementId: "G-HBSCETLS9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);