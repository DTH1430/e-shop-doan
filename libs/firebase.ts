// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcVfEp6haJbAWwZe76H5RsePUmJNcgIyI",
    authDomain: "eshop-doan.firebaseapp.com",
    projectId: "eshop-doan",
    storageBucket: "eshop-doan.firebasestorage.app",
    messagingSenderId: "468652673116",
    appId: "1:468652673116:web:cc79164d9f905edd0efe99"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
