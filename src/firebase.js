// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgMMpRHzK5qSS-BJ8RLosfOZiavokuyAw",
  authDomain: "spam4cut-30b46.firebaseapp.com",
  projectId: "spam4cut-30b46",
  storageBucket: "spam4cut-30b46.appspot.com",
  messagingSenderId: "704520909323",
  appId: "1:704520909323:web:66101c2d5b259532630d0e",
  measurementId: "G-7RKH1DG2SN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
