import { auth, database } from "../firebase.config";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserStructure from "../components/UserStructure";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});

    const setUser = (data) => ({
        type: "",
        payload: data,
    });

    const createUser = ({ firstName, email, password }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUserInfo(user.user);
                const newUser = UserStructure(email, firstName, user.user.uid);
                database.users.add(newUser).then((data) => {
                    setUser({
                        userId: user.user.uid,
                        user: { data: user.user.providerData[0] },
                    });
                    navigate("/dashboard");
                    toast.success("User registered successfully");
                    localStorage.setItem("user", JSON.stringify(user.user));
                });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const loginUser = ({ email, password }) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(async (user) => {
                await database.users.where("uid", "==", user.user.uid).get();
                navigate("/dashboard");
                localStorage.setItem("user", JSON.stringify(user.user));
                toast.success(" Successfully logged in");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const logOutUser = () => {
        auth.signOut()
            .then(() => {
                setUserInfo(null);
                localStorage.clear("user");
                navigate("/");
                toast.success(" Successfully logged out");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const deleteUser = () => {
        return deleteUser(auth);
    };

    const value = {
        userInfo,
        createUser,
        loginUser,
        logOutUser,
        deleteUser,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
