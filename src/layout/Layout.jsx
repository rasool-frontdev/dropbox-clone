import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import ProtectRoute from "../components/ProtectRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Desktop from "../pages/Desktop/Desktop";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Mobile from "../pages/Mobile/Mobile";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Settings from "../pages/Settings/Settings";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/desktop" element={<Desktop />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route
                    path="/dashboard"
                    element={
                            <Dashboard />
                    }
                />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Layout;
