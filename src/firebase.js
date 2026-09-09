// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClDZU7Pw0TH6Sj2AJdT32SrZMHYKfk-AU",
  authDomain: "clone-twitter-c791c.firebaseapp.com",
  projectId: "clone-twitter-c791c",
  storageBucket: "clone-twitter-c791c.firebasestorage.app",
  messagingSenderId: "352932313391",
  appId: "1:352932313391:web:ec21cecc14c0f0c94589da",
  measurementId: "G-06LNPB006M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app)