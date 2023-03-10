// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLQ8g_ItwKiNd3ByLkvZVX3_XZdfImhvM",
  authDomain: "smancha-db.firebaseapp.com",
  databaseURL: "https://smancha-db-default-rtdb.firebaseio.com",
  projectId: "smancha-db",
  storageBucket: "smancha-db.appspot.com",
  messagingSenderId: "826099417292",
  appId: "1:826099417292:web:fedd97b142f2739980c269",
  measurementId: "G-4DFB14L9ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);