// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgmpzJz5Sg1uCWd6uXjHIFvkRrFIwdGE",
  authDomain: "park-store-react.firebaseapp.com",
  projectId: "park-store-react",
  storageBucket: "park-store-react.appspot.com",
  messagingSenderId: "980841808339",
  appId: "1:980841808339:web:a4da035087ac5a058cef26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);