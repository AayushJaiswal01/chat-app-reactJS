// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS3Ygo3iETKYqY0qfc678ClWcGS1w1Jhs",
  authDomain: "studeria-b2f0c.firebaseapp.com",
  databaseURL: "https://studeria-b2f0c.firebaseio.com",
  projectId: "studeria-b2f0c",
  storageBucket: "studeria-b2f0c.appspot.com",
  messagingSenderId: "503445861942",
  appId: "1:503445861942:web:6979a0c416650167204a97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
