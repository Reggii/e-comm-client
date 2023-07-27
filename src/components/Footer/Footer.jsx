import React from "react";
import './footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Ideas</span>
                    <span>Clothes</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">cmd FASHION</span>
                    <span className="copyright">© Copyright 2023</span>
                </div>
                <div className="right">
                    <img src='http://localhost:3000/img/payment.png' alt=''/>
                </div>
            </div>
        </div>
    );
    }