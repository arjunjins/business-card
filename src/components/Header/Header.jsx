import React from "react";
import logo from "../../assets/IMG_3486.jpg";
import "./Header.css";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import email from "../../assets/Mail.png";
import linkedin from "../../assets/linkedin.png";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="Profile Picture" className="image" />
      </div>
      <div className="header-body">
        <h1 id="main-title">Arjun J</h1>
        <h3 id="job-title">Frontend Developer</h3>
        <a href="www.google.com" id="link">
          arjunj.website
        </a>
        <div>
          <button type="button" className="btn btn-light bton">
            <img src={email} alt="" /> Email
          </button>
          <button type="button" className="btn btn-primary bton">
            <img src={linkedin} alt="" /> LinkedIn
          </button>
        </div>
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Header;
