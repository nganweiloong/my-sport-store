import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBCxAeK_8reMYID__9xDaM5ZsBvFWr-ow8",
  authDomain: "portfolio-sport-ecommerce.firebaseapp.com",
  projectId: "portfolio-sport-ecommerce",
  storageBucket: "portfolio-sport-ecommerce.appspot.com",
  messagingSenderId: "297557532055",
  appId: "1:297557532055:web:5cf5560ce3de95ba1a78d2",
});

// Initialize Firebase
export const auth = app.auth();
export const fs = firebase.firestore();
export const storage = firebase.storage();
export default app;
