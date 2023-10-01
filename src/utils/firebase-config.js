import {initializeApp} from "firebase/app";
import {getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAo_OXQC7R668nYN0OOPKHFZxI07bBV0Eo",
    authDomain: "netlfix-clone-f2d8e.firebaseapp.com",
    projectId: "netlfix-clone-f2d8e",
    storageBucket: "netlfix-clone-f2d8e.appspot.com",
    messagingSenderId: "389734320956",
    appId: "1:389734320956:web:98b784eb228cf1589fec39",
    measurementId: "G-JFX6DN5TCY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth  = getAuth(app);