import React, { useContext } from "react";
import { SiDropbox } from "react-icons/si";
import { FaUserCog } from "react-icons/fa";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";

const Header = () => {
    // ! Header section
    // ? Header section
    // * Header section

    const location = useLocation();
    const { userInfo, loggedIn, logOutUser } = useContext(Context);

    const handlerSignOut = async (e) => {
        await logOutUser();
        // console.log(isLogged);
    };

    console.log(`header ${loggedIn}`);

    return (
        <>
            <div className="header">
                <div className="header-nav">
                    {loggedIn ? (
                        <>
                            <NavLink
                                to="/dashboard"
                                className="header-nav__logo">
                                <div className="header-nav__box">
                                    <SiDropbox className="header-nav__icon" />
                                </div>
                                <h3 className="header-nav__title">Dropbox</h3>
                            </NavLink>
                            <div className="header-nav__links">
                                {location.pathname === "/dashboard" ||
                                location.pathname === "/desktop" ||
                                location.pathname === "/mobile" ? (
                                    <div className="dropdown">
                                        <div className="dropdown-btn">
                                            Get app
                                        </div>
                                        <div className="dropdown-content">
                                            <NavLink
                                                className="header-nav__link download"
                                                to="/desktop">
                                                Desktop app
                                            </NavLink>
                                            <NavLink
                                                className="header-nav__link download"
                                                to="/mobile">
                                                Mobile app
                                            </NavLink>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                {location.pathname !== "/register" &&
                                location.pathname !== "/login" ? (
                                    <div className="dropdown">
                                        <div className="header-nav__login dropdown-btn">
                                            {userInfo.photoURL ? (
                                                <img
                                                    src={"http://placehold.it/"}
                                                    alt="img"
                                                    style={{
                                                        borderRadius: "50%",
                                                        width: "3rem",
                                                        height: "3rem",
                                                    }}
                                                />
                                            ) : (
                                                <FaUserCog
                                                    style={{
                                                        width: "3rem",
                                                        height: "1.5rem",
                                                    }}
                                                />
                                            )}
                                            <div className="dropdown-content">
                                                <NavLink
                                                    className="header-nav__link user"
                                                    to="/dashboard">
                                                    Dashboard
                                                </NavLink>
                                                <NavLink
                                                    className="header-nav__link user"
                                                    to="/settings">
                                                    Settings
                                                </NavLink>
                                                <span
                                                    onClick={handlerSignOut}
                                                    className="header-nav__link user">
                                                    Sign out
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </>
                    ) : (
                        <>
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
                                        <div className="dropdown-btn">
                                            Get app
                                        </div>
                                        <div className="dropdown-content">
                                            <NavLink
                                                className="header-nav__link download"
                                                to="/desktop">
                                                Desktop app
                                            </NavLink>
                                            <NavLink
                                                className="header-nav__link download"
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
                                    } else if (
                                        location.pathname === "/register"
                                    ) {
                                        return (
                                            <NavLink
                                                className="header-nav__link"
                                                to="/login">
                                                Sign in
                                            </NavLink>
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
                                                    to="/login">
                                                    Sign in
                                                </NavLink>
                                            </>
                                        );
                                    }
                                })()}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
