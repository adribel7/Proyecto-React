import React from "react";
import Facebook from "./fbB.svg";
import Instagram from "./igB.svg";
import Twitter from "./twB.svg";
import Youtube from "./youtubeB.svg";
import Twitch from "./twichB.svg";

const Footer =() => {
    return (<footer>
        <div className="footer-container">
            <div className="footer-content-container">
                <div className="social-container">
                    <a href="#" className="social-link" target="_blank"><img src={Facebook} alt="icono"/></a>
                    <a href="#" className="social-link" target="_blank"><img src={Instagram} alt="icono"/></a>
                    <a href="#" className="social-link" target="_blank"><img src={Twitter} alt="icono"/></a>
                    <a href="#" className="social-link" target="_blank"><img src={Youtube} alt="icono"/></a>
                    <a href="#" className="social-link" target="_blank"><img src={Twitch} alt="icono"/></a>
                </div>
            <div className="footer-content-container">
                <span className="footer-info">copyright @ 2022 by Boom news</span>
            </div>
            </div>
        </div>
    </footer>)
};

export default Footer;