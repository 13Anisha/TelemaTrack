// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "telematrack.firebaseapp.com",
  projectId: "telematrack",
  storageBucket: "telematrack.appspot.com",
  messagingSenderId: "264391702934",
  appId: "1:264391702934:web:698e1632ba9833fbe545b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);