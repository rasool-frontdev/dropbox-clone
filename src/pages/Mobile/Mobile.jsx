import React from "react";
import qrCode from "../../imgs/qrcode.jpg";
import appStore from "../../imgs/app-store.svg";
import googlePlay from "../../imgs/google-play.png";

const Mobile = () => {
    function closeWindow() {
        let win = window.open(
            "http://dropbox.com/go",
            "windowname",
            "_blank",
            "width=600,height=600"
        );
        setTimeout(function () {
            win.close();
        }, 5000);
    }
    return (
        <div className="mobile">
            <div className="mobile-desc">
                <div className="mobile-desc__header">
                    <h4 className="mobile-desc__head">Dropbox Mobile App</h4>
                    <h3 className="mobile-desc__title">
                        Keep work flowing—on the go
                    </h3>
                    <p className="mobile-desc__text">
                        The free Dropbox mobile app helps you keep projects
                        moving from anywhere, so you can stay focused on <br />{" "}
                        what matters. Access work, collaborate with co-workers
                        and clients, and quickly take care of tasks—all from{" "}
                        <br /> your phone or tablet.
                    </p>
                </div>
            </div>
            <div className="mobile-content">
                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/716181544?h=78a6252e8d?autoplay=1&loop=1&autopause=0"
                    width="700"
                    height="476"
                    frameborder="0"
                    allowfullscreen
                />
                <div className="mobile-content__download">
                    <img src={qrCode} alt="qr code" />
                    <p>
                        Scan the QR code or go <br />
                        <span onClick={closeWindow}>dropbox.com/go</span>
                    </p>
                    <div className="mobile-content__links">
                        <a
                            href="https://apps.apple.com/us/app/dropbox/id327630330"
                            target="_blank"
                            rel="noreferrer">
                            <img src={appStore} alt="app store" />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?hl=en&id=com.dropbox.android"
                            target="_blank"
                            rel="noreferrer">
                            <img src={googlePlay} alt="app store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mobile;
