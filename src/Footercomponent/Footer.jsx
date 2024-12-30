import React from "react";
import "./_Footer.scss";
import email from "./Icons/email.svg";
import linkedin from "./Icons/linkedin.svg";
import instagram from "./Icons/instagram.svg";
import Footerlogo from "./Icons/footerlogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo-container">
        <img src={Footerlogo} alt="Footer Logo" className="footer__logo-container__logo" />
        <div className="footer__logo-container__thought-cloud">Aha! Caught your attention😎, didn't I? <br/>Hi there!👋😄</div>
      </div>
      <div className="footer__icons">
        <a href="mailto:amulya.a.t007@gmail.com" target="_blank" rel="noopener noreferrer" className="footer__icons-link">
          <img src={email} alt="Email" className="footer__icons__icon" />
        </a>
        <a href="https://www.linkedin.com/in/amulya-a-t-5b522a222" target="_blank" rel="noopener noreferrer" className="footer__icons-link">
          <img src={linkedin} alt="LinkedIn" className="footer__icons__icon" />
        </a>
        <a href="https://www.instagram.com/amulya_at/profilecard/" target="_blank" rel="noopener noreferrer" className="footer__icons-link">
          <img src={instagram} alt="Instagram" className="footer__icons__icon" />
        </a>
      </div>
      <div className="footer__mail">
        <a href="mailto:amulya.a.t007@gmail.com" className="footer__mail-link">amulya.a.t007@gmail.com</a>
      </div>
      <div className="footer__copy">
        <p>&copy; 2024 - Amulya AT</p>
      </div>
    </div>
  );
};

export default Footer;
