import React from "react";
import { SiDropbox } from "react-icons/si";
import { Link, NavLink, useLocation } from "react-router-dom";

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
                        {/* <div class="dropdown">
                            <button class="dropdown-btn">Dropdown</button>
                            <div class="dropdown-content">
                                <h1 href="#">Desctop app</h1>
                                <Link
                                    to={{
                                        pathname: "https://google.com",
                                    }}
                                    target="_blank">Desctop app</Link>
                               <Link
                                    to={{
                                        pathname: "https://google.com",
                                    }}
                                    target="_blank">Mobile app</Link>
                            </div>
                        </div> */}

                        <div className="dropdown">
                            <div className="dropdown-btn">Get app</div>
                            <div class="dropdown-content">
                                {/* <a
                                    href="https://www.dropbox.com/download?os=win"
                                    target="_blank"
                                    rel="noreferrer">
                                    Desctop app
                                </a> */}
                                {/* <a
                                    href="https://play.google.com/store/apps/details?hl=en&id=com.dropbox.android"
                                    target="_blank"
                                    rel="noreferrer">
                                    Mobile app
                                </a> */}
                                <NavLink
                                    className="header-nav__link"
                                    to="/desktop">
                                    Desktop app
                                </NavLink>
                                <NavLink
                                    className="header-nav__link"
                                    to="/mobile">
                                    Mobile app
                                </NavLink>
                            </div>
                        </div>
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
                            } else {
                                return (
                                    <>
                                        <NavLink
                                            className="header-nav__link"
                                            to="/login">
                                            Sign up
                                        </NavLink>
                                        <NavLink
                                            className="header-nav__link"
                                            to="/register">
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
