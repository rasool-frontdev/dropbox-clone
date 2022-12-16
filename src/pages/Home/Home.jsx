import React from "react";
import demoImg from "../../imgs/home-img.jpg";

const Home = () => {
    return (
        <div className="content-home">
            <div className="home">
                <h4 className="home-title">
                    Join over 700 million registered <br /> users who trust Dropbox
                </h4>
                <p className="home-desc">
                    Easy to use, reliable, private, and secure. It’s no wonder
                    Dropbox is the choice for storing and sharing your <br /> most
                    important files.
                </p>
                <img className="home-img" src={demoImg} alt="demo dropbox" />
            </div>
        </div>
    );
};

export default Home;
