import React from "react";
import InstaGramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footerbar.scss";
import { Link } from "react-router-dom";

export default function FooterBar() {
    return (
        <div className="bar">
            <h1>Sign up for our newsletter!</h1>
            <input className="inputemail" type="text" placeholder="Enter your email address"/>
            <button className="button">Sign Up</button>
            <div className="icons">
                <InstaGramIcon onClick={() => window.open('https://www.instagram.com')}/>
                <FacebookIcon onClick={() => window.open('https://www.facebook.com')}/>
                <TwitterIcon onClick={() => window.open('https://www.twitter.com')}/>
                <PinterestIcon onClick={() => window.open('https://www.pinterest.com')}/>
                <YouTubeIcon onClick={() => window.open('https://www.youtube.com')}/>
            </div>
        </div>
    )
}