//  Import React
import React from "react";
import { FaUserAlt, FaUserCog } from "react-icons/fa";
import { SiDropbox } from "react-icons/si";
import { AiOutlineLogin } from "react-icons/ai";

//  Import Bootstrap Components

//  Import Link => React-router-dom
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// Import module css

export default function NavbarComponent() {
    const { currentUser, logout } = useAuth();
    const location = useLocation();

    const handlerSignOut = async (e) => {
        await logout();
    };
    return (
        <>
            <div className="header">
                <div className="header-nav">
                    {currentUser ? (
                        <>
                            <Link to="/" className="header-nav__logo">
                                <div className="header-nav__box">
                                    <SiDropbox className="header-nav__icon" />
                                </div>
                                <h3 className="header-nav__title">Dropbox</h3>
                            </Link>
                            <div className="header-nav__links">
                                {location.pathname === "/" ||
                                location.pathname === "/desktop" ||
                                location.pathname === "/mobile" ? (
                                    <div className="dropdown">
                                        <div className="dropdown-btn">
                                            Get app
                                        </div>
                                        <div className="dropdown-content">
                                            <Link
                                                className="header-nav__link download"
                                                to="/desktop">
                                                Desktop app
                                            </Link>
                                            <Link
                                                className="header-nav__link download"
                                                to="/mobile">
                                                Mobile app
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                {location.pathname !== "/signup" &&
                                location.pathname !== "/login" ? (
                                    <div className="dropdown">
                                        <div className="header-nav__login dropdown-btn">
                                            {currentUser ? (
                                                <FaUserCog
                                                    style={{
                                                        width: "3rem",
                                                        height: "1.5rem",
                                                    }}
                                                />
                                            ) : (
                                                <AiOutlineLogin
                                                    style={{
                                                        width: "3rem",
                                                        height: "1.5rem",
                                                    }}
                                                />
                                            )}
                                            <div className="dropdown-content">
                                                <Link
                                                    className="header-nav__link user"
                                                    to="/">
                                                    Dashboard
                                                </Link>
                                                <Link
                                                    className="header-nav__link user"
                                                    to="/settings">
                                                    Settings
                                                </Link>
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
                            <Link to="/" className="header-nav__logo">
                                <div className="header-nav__box">
                                    <SiDropbox className="header-nav__icon" />
                                </div>
                                <h3 className="header-nav__title">Dropbox</h3>
                            </Link>
                            <div className="header-nav__links">
                                {location.pathname !== "/signup" &&
                                location.pathname !== "/login" ? (
                                    <div className="dropdown">
                                        <div className="dropdown-btn">
                                            Get app
                                        </div>
                                        <div className="dropdown-content">
                                            <Link
                                                className="header-nav__link download"
                                                to="/desktop">
                                                Desktop app
                                            </Link>
                                            <Link
                                                className="header-nav__link download"
                                                to="/mobile">
                                                Mobile app
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                {(() => {
                                    if (location.pathname === "/login") {
                                        return (
                                            <Link
                                                className="header-nav__link"
                                                to="/signup">
                                                Sign up
                                            </Link>
                                        );
                                    } else if (
                                        location.pathname === "/signup"
                                    ) {
                                        return (
                                            <Link
                                                className="header-nav__link"
                                                to="/login">
                                                Sign in
                                            </Link>
                                        );
                                    } else {
                                        return (
                                            <>
                                                <Link
                                                    className="header-nav__link"
                                                    to="/signup">
                                                    Sign up
                                                </Link>
                                                <Link
                                                    className="header-nav__link"
                                                    to="/login">
                                                    Sign in
                                                </Link>
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
}
