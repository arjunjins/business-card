import React from "react";
import logo from "../../assets/IMG_3486.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <img src={logo} alt="Profile Picture" className="image" />
      <h1>Arjun J</h1>
      <h3>Frontend Developer</h3>
      <a href="www.google.com">arjunj.website</a>
      <div>
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
};

export default Header;
