import firestore from "firebase/compat/app";
// Auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnNxq2N6kXKm-KNbXZIKNqNanhZejUhEk",
  authDomain: "clone-20305.firebaseapp.com",
  projectId: "clone-20305",
  storageBucket: "clone-20305.appspot.com",
  messagingSenderId: "342769756256",
  appId: "1:342769756256:web:e436550fbf6002b8cdfb05",
};

// Initialize Firebase
const app = firestore.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
