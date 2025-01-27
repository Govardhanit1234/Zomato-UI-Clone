// Import the Firebase modules you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCfzsGoEjdOYmqdkEECt8_mhhBMyxLiRiE",
  authDomain: "auth-8ba4d.firebaseapp.com",
  projectId: "auth-8ba4d",
  storageBucket: "auth-8ba4d.appspot.com", // Fixed the URL
  messagingSenderId: "681023584943",
  appId: "1:681023584943:web:a8a69a6560e3fc9c5eb25a",
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = firebase.firestore();
const auth = firebase.auth();

// Export the services for use in other parts of your app
export { auth };
export default db;
