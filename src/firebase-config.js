import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHbsnQaueVfCJM9-HOmWgdA7lKAVdVu0s",
    authDomain: "dropbox-clone-a9f74.firebaseapp.com",
    projectId: "dropbox-clone-a9f74",
    storageBucket: "dropbox-clone-a9f74.appspot.com",
    messagingSenderId: "439155754613",
    appId: "1:439155754613:web:1ca5f59b4293673be95a3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
