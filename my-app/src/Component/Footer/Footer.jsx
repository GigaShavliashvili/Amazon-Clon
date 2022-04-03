import Button from "../Button/Button";
import React from "react";
import "./footer.scss";
import Amflag from "../../Assets/American.png";
import AmazongLogo from "../../Assets/amazonWhite.png";
import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  return (
    <div className="Footer-Section">
      <button
        className="BackTopBtn"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        Back to Top
      </button>
      <div className="Footer-Section__Items">
        <div className="Footer-Section__Item">
          <h3>Get to Know Us</h3>
          <li>Get to Know Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Amazon Devices</li>
        </div>
        <div className="Footer-Section__Item">
          <h3>Make Money with Us</h3>
          <li>›See More Make Money with Us</li>
          <li>Make Money with Us</li>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Sell apps on Amazon</li>
          <li>Advertise Your Products</li>
          <li>Host an Amazon Hub</li>
        </div>
        <div className="Footer-Section__Item">
          <h3>Amazon Payment Products</h3>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
          <li></li>
          <li></li>
        </div>
        <div className="Footer-Section__Item">
          <h3>Let Us Help You</h3>
          <li>Help</li>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Returns & Replacements</li>
          <li>Shipping Rates & Policies</li>
        </div>
      </div>
      <div className="Footer-Section__Option">
        <img src={AmazongLogo} alt="" />
        <div className="option">
          <LanguageIcon />
          <span>English</span>
        </div>
        <div className="option">
          $ <span>USD - U.S. Dollar</span>
        </div>
        <div className="option">
          <img src={Amflag} alt="" />
          <span>Vereinigte Staaten von Amerika</span>
        </div>
      </div>
      <div className="Footer-Section__Author">
        © 1996-2022, Amazon.com, Inc. oder Tochtergesellschaften
      </div>
    </div>
  );
};

export default Footer;
