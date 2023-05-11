import React from "react";
import {FaTwitter, FaInstagram} from "react-icons/fa";




function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                  <div className="row justifyContent">
                    <div className="footer-content">
                        <div className="footer-section-logo">
                            <img src="" alt="" />
                        </div>
                        <ul className="footerCircles">
                            <li><FaTwitter className="footerIcon"/></li>
                            <li><FaInstagram className="footerIcon"/></li>
                        </ul>
                        <div className="copy-right-content">
                            <p className="copy-right">Copyright {new Date().getFullYear()} Ajdev.web.app || All Righs Reserved</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;