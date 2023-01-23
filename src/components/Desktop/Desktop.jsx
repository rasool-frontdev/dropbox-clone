import React from "react";
import { HiArrowRight } from "react-icons/hi";
import desktopImg from "../../imgs/destop.png";
import NavbarComponent from "../../../src/components/Navbar/Navbar";

const Desktop = () => {
    return (
        <>
            <NavbarComponent />
            <div className="desktop">
                <div className="desktop-desc">
                    <h1 className="desktop-desc__title">
                        Good the destktop <br /> experience <br /> today
                    </h1>
                    <p className="desktop-desc__text">
                        One organized place that brings work into focus and{" "}
                        <br /> keeps teams in sync—right from your desktop.
                    </p>
                    <a
                        href="https://www.dropbox.com/download?os=win"
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                        className="desktop-desc__btn">
                        Download now
                        <HiArrowRight className="arrow" />
                    </a>
                </div>
                <div className="desktop-right">
                    <img src={desktopImg} alt="desktop img" />
                </div>
            </div>
        </>
    );
};

export default Desktop;
