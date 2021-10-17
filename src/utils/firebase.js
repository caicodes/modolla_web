import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdWY4ngg7OWC5Z3JsgMf7-aS7zghuWBxg",
  authDomain: "artasce-creative-starter-g4.firebaseapp.com",
  projectId: "artasce-creative-starter-g4",
  storageBucket: "artasce-creative-starter-g4.appspot.com",
  messagingSenderId: "802890541359",
  appId: "1:802890541359:web:d0d696c32a537f894b19da",
  measurementId: "G-53JLB04ZTJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
