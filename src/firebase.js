// Import Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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
    folders: firestore.collection("folders"),
    files: firestore.collection("files"),
    formatDoc: (doc) => {
        return { id: doc.id, ...doc.data() };
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;
