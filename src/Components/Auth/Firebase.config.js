// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD5PU666ESWFtC4hgHBii_8KqrBW5GpRw",
  authDomain: "bistro-boss-ranna-ghor.firebaseapp.com",
  projectId: "bistro-boss-ranna-ghor",
  storageBucket: "bistro-boss-ranna-ghor.firebasestorage.app",
  messagingSenderId: "127451975876",
  appId: "1:127451975876:web:fcb546145f7a6bc8773991",
  measurementId: "G-0W9VFNZJF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// const analytics = getAnalytics(app);