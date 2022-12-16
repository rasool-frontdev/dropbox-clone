import React from "react";
import { SiDropbox } from "react-icons/si";
import { FaUserCog } from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <>
            <div className="header">
                <div className="header-nav">
                    <NavLink to="/" className="header-nav__logo">
                        <div className="header-nav__box">
                            <SiDropbox className="header-nav__icon" />
                        </div>
                        <h3 className="header-nav__title">Dropbox</h3>
                    </NavLink>
                    <div className="header-nav__links">
                        {location.pathname !== "/register" &&
                        location.pathname !== "/login" ? (
                            <div className="dropdown">
                                <div className="dropdown-btn">Get app</div>
                                <div className="dropdown-content">
                                    <NavLink
                                        className="header-nav__link"
                                        to="/">
                                        Desktop app
                                    </NavLink>
                                    <NavLink
                                        className="header-nav__link"
                                        to="/mobile">
                                        Mobile app
                                    </NavLink>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {(() => {
                            if (location.pathname === "/login") {
                                return (
                                    <NavLink
                                        className="header-nav__link"
                                        to="/register">
                                        Sign up
                                    </NavLink>
                                );
                            } else if (location.pathname === "/register") {
                                return (
                                    <NavLink
                                        className="header-nav__link"
                                        to="/login">
                                        Sign in
                                    </NavLink>
                                );
                            } else if (location.pathname === "/dashboard") {
                                return (
                                    <div className="dropdown">
                                        <div className="header-nav__login dropdown-btn">
                                            <FaUserCog
                                                style={{ width: "3rem" }}
                                            />
                                            <div className="dropdown-content">
                                                <NavLink
                                                    className="header-nav__link"
                                                    to="/settings">
                                                    Settings
                                                </NavLink>
                                                <NavLink
                                                    className="header-nav__link"
                                                    to="/">
                                                    Sign out
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <>
                                        <NavLink
                                            className="header-nav__link"
                                            to="/register">
                                            Sign up
                                        </NavLink>
                                        <NavLink
                                            className="header-nav__link"
                                            to="/sign up">
                                            Sign in
                                        </NavLink>
                                    </>
                                );
                            }
                        })()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
