import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/context";

const ProtectRoute = ({ children }) => {
    const { user } = useContext(Context);

    if (!user) {
        return <Navigate to="/" />;
    }
    // if(user){
    //     return <Navigate to="/dashboard" />;

    // }
    return children;
};

export default ProtectRoute;
