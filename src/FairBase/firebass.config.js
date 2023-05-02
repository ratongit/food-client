// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA99o6wXrW4W6pLZ4mrFY5xB4a4dOYUYtA",
  authDomain: "chef-recipe-6eeab.firebaseapp.com",
  projectId: "chef-recipe-6eeab",
  storageBucket: "chef-recipe-6eeab.appspot.com",
  messagingSenderId: "1050657931262",
  appId: "1:1050657931262:web:5803aca7fae87d73ab4aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;