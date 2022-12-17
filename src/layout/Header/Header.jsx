import React, { useContext } from "react";
import { SiDropbox } from "react-icons/si";
import { FaUserCog } from "react-icons/fa";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import { toast } from "react-toastify";

const Header = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const { signOutUser } = useContext(Context);

    const handlerSignOut = async (e) => {
        try {
            await signOutUser();
            navigate("/");
            toast.success("Successfully signed out!");
        } catch (error) {
            toast.error(error.message);
        }
    };

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
                                                <span className="header-nav__link">
                                                    Settings
                                                </span>
                                                <span
                                                    onClick={handlerSignOut}
                                                    className="header-nav__link">
                                                    Sign out
                                                </span>
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
                                            to="/signup">
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
