// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXae61vKYgrXqQMmvZQWAa77YF442V8Mk",
  authDomain: "spamnecut.firebaseapp.com",
  projectId: "spamnecut",
  storageBucket: "spamnecut.appspot.com",
  messagingSenderId: "1035861133387",
  appId: "1:1035861133387:web:af303c0e2286f72524a5ce",
  measurementId: "G-VZHJ4JFE14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
