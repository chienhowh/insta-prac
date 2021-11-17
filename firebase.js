// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBckzvBSQnUGvqSOHyhNe3oRXVQ-vKTBQI",
    authDomain: "insta-prac.firebaseapp.com",
    projectId: "insta-prac",
    storageBucket: "insta-prac.appspot.com",
    messagingSenderId: "1033967302862",
    appId: "1:1033967302862:web:46ea5d3cf79e7c8ed3f89f",
    measurementId: "G-ZY7TF1WCTS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const store = getStorage();
const analytics = getAnalytics(app);

export { db, app, store };