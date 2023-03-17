import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsnQ3HkB9QY2FLJ1JjfyS0g9VL52ZJqdI",
  authDomain: "house-marketplace-app-a35e4.firebaseapp.com",
  projectId: "house-marketplace-app-a35e4",
  storageBucket: "house-marketplace-app-a35e4.appspot.com",
  messagingSenderId: "994553612824",
  appId: "1:994553612824:web:8848ea7e8cc071617f516d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()