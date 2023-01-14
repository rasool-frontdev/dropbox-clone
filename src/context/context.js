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
    const [loggedIn, setLoggedIn] = useState(false);
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
                    setLoggedIn(true);
                    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
                    toast.success("User registered successfully");
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
                setLoggedIn(true);
                localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
                toast.success(" Successfully logged in");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const logOutUser = () => {
        auth.signOut()
            .then(() => {
                setUserInfo({});
                localStorage.clear("isLogin");
                setLoggedIn(false);
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

    useEffect(() => {});

    const value = {
        userInfo,
        loggedIn,
        createUser,
        loginUser,
        logOutUser,
        deleteUser,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
