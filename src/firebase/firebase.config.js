// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi3EnepcKYDKxHLFINtaLuqU1_1fCpkNA",
    authDomain: "the-news-dragon-8df86.firebaseapp.com",
    projectId: "the-news-dragon-8df86",
    storageBucket: "the-news-dragon-8df86.appspot.com",
    messagingSenderId: "345119135462",
    appId: "1:345119135462:web:4d6f6be18db87b6cb9cd27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;