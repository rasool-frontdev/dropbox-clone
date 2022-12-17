import { auth } from "../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        createUser,
        user,
        signOutUser,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
