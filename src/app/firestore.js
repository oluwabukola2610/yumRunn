// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwhusmTond3cY5Q3MfpTx6w3-xP2XHxOw",
  authDomain: "yumrun-auth.firebaseapp.com",
  projectId: "yumrun-auth",
  storageBucket: "yumrun-auth.appspot.com",
  messagingSenderId: "498605530582",
  appId: "1:498605530582:web:6ff563d34217a16b0e9877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
