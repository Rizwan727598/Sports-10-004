// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACjNGqfWzOKDdx2Mp8cA4ISQlQedx9bVg",
  authDomain: "careers-b821b.firebaseapp.com",
  projectId: "careers-b821b",
  storageBucket: "careers-b821b.firebasestorage.app",
  messagingSenderId: "141248806939",
  appId: "1:141248806939:web:e597acd3425e9ad7f438be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
