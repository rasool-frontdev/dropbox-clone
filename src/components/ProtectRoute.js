import React from "react";
import { Navigate } from "react-router-dom";
const ProtectRoute = ({ children }) => {
    if (!window.localStorage.getItem("loggedIn")) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectRoute;
