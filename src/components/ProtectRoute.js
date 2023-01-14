import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/context";

const ProtectRoute = ({ children }) => {
    const { loggedIn } = useContext(Context);
    console.log(loggedIn);
    if (!loggedIn) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectRoute;
