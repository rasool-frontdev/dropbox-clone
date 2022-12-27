import { auth, db } from "../firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.config";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [image, setImage] = useState("");

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const deleteUser = () => {
        return deleteUser(auth);
    };

    const profileInfo = (profile) => {
        return addDoc(collection(db, profile));
    };

    const [showModal, setShowModal] = useState(false);
    const [fileUpload, setFileUpload] = useState(null);
    const [fileList, setFileList] = useState([]);
    const fileListRef = ref(storage, "files/");
    // const Upload = () => {
    const uploadBtn = () => {
        if (fileUpload == null) return;

        const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
        uploadBytes(fileRef, fileUpload)
            .then((snaphsot) => {
                getDownloadURL(snaphsot.ref).then((url) => {
                    setFileList((prev) => [...prev, url]);
                });
                setShowModal(false);
                toast.success("File uploaded successfully");
            })
            .catch((error) => {
                toast.error("Failed to upload file");
            });
    };
    useEffect(() => {
        listAll(fileListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setFileList((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        user,
        setUser,
        createUser,
        signOutUser,
        signInUser,
        deleteUser,
        profileInfo,
        image,
        setImage,
        uploadBtn,
        showModal,
        setShowModal,
        fileList,
        setFileUpload,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
