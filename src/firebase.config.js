import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDNZLjVI-Uyg-ik8jPlmN-ruK_ILB0nY3A",
    authDomain: "dropbox-qwasar-e6500.firebaseapp.com",
    projectId: "dropbox-qwasar-e6500",
    storageBucket: "dropbox-qwasar-e6500.appspot.com",
    messagingSenderId: "337471523477",
    appId: "1:337471523477:web:184c77703627879d55e99c",
});

const firestore = app.firestore();

export const database = {
    users: firestore.collection("users"),
    docs: firestore.collection("docs"),
    files: firestore.collection("files"),
    date: firebase.firestore.FieldValue.serverTimestamp(),
    // getCurrentTimestamp: app.firestore.FieldValue.serverTimestamp,
};

export const storage = app.storage();
export const auth = app.auth();
export default app;
