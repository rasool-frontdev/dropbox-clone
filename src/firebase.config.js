import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA0zH6-KCYv4uWX_QKal54oF3MnKam_w8M",
    authDomain: "dropbox-clone-b77cd.firebaseapp.com",
    projectId: "dropbox-clone-b77cd",
    storageBucket: "dropbox-clone-b77cd.appspot.com",
    messagingSenderId: "620752312832",
    appId: "1:620752312832:web:7ece09972dd0ad951196e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
