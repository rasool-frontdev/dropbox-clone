import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Desktop from "../pages/Desktop/Desktop";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Mobile from "../pages/Mobile/Mobile";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Header from "./Header/Header";

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/desktop" element={<Desktop />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Layout;
