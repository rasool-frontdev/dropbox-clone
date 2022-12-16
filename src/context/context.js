import { auth } from "../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const value = {
        createUser,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
