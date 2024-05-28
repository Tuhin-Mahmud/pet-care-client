// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaEgenEZDpX1OAknWUSXlfscHIbQvs7Rk",
    authDomain: "pet-care-ba378.firebaseapp.com",
    projectId: "pet-care-ba378",
    storageBucket: "pet-care-ba378.appspot.com",
    messagingSenderId: "61675336726",
    appId: "1:61675336726:web:dc63a6d48e33f3cd757137",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);