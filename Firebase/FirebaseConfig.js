// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZdDWgm1q7yh-8xhAxP5XBicI9FtlJbkg",
  authDomain: "grocerydelivery-b8337.firebaseapp.com",
  projectId: "grocerydelivery-b8337",
  storageBucket: "grocerydelivery-b8337.appspot.com",
  messagingSenderId: "884648175462",
  appId: "1:884648175462:web:145e71648392a5eb084aa7",
  measurementId: "G-Y0LJ4D0F5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);