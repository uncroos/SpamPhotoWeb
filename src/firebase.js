// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
const storage = getStorage(app); // Firebase Storage 초기화

export { storage }; // storage 내보내기
