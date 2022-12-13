import React from "react";
import logo from "../../assets/IMG_3486.jpg";
import "./Header.css";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
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
          <button>Email</button>
          <button>LinkedIn</button>
        </div>
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Header;
