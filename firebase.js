import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIGKUoOat21Mdjz6l6mObxvZX9pNzz1yY",
  authDomain: "uber-next-clone-live-a021f.firebaseapp.com",
  projectId: "uber-next-clone-live-a021f",
  storageBucket: "uber-next-clone-live-a021f.appspot.com",
  messagingSenderId: "852462273294",
  appId: "1:852462273294:web:fd76fcc45ff658585bcd5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export { app, provider, auth }