import React from "react";
import "./Footer.css";
import twitter from "../../assets/Twitter Icon.png";
import fb from "../../assets/Facebook Icon.png";
import Instagram from "../../assets/Instagram Icon.png";
import Github from "../../assets/GitHub Icon.png";

const Footer = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="www.google.com">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="www.google.com">
            <img src={fb} alt="" />
          </a>
        </li>
        <li>
          <a href="www.google.com">
            <img src={Instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="www.google.com">
            <img src={Github} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
