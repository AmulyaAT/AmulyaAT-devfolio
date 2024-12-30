import React from "react";
import "./_Header.scss";
import "./_Mediaheader.scss";
import email from "./Icon/email.svg";
import linkedin from "./Icon/linkedin.svg";
import instagram from "./Icon/instagram.svg";
import Logo from "./Icon/Logo.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <a href="#main">
            <img src={Logo} alt="Logo" className="header__logo-image" />
          </a>
        </div>
        <nav className="header__nav">
          <a href="#skills" className="header__nav-link">Skills</a>
          <a href="#Journey" className="header__nav-link">Journey</a>
          <a href="#project" className="header__nav-link">Projects</a>
          <a href="#certificate" className="header__nav-link">Certificates</a>
          <a href="#contactme" className="header__nav-link">Contact</a>
        </nav>
        <div className="header__icons">
          <a href="mailto:amulya.a.t007@gmail.com" target="_blank" rel="noopener noreferrer" className="header__icons-link">
            <img src={email} alt="Email" className="header__icons-image" />
          </a>
          <a href="https://www.linkedin.com/in/amulya-a-t-5b522a222" target="_blank" rel="noopener noreferrer" className="header__icons-link">
            <img src={linkedin} alt="LinkedIn" className="header__icons-image" />
          </a>
          <a href="https://www.instagram.com/amulya_at/" target="_blank" rel="noopener noreferrer" className="header__icons-link">
            <img src={instagram} alt="Instagram" className="header__icons-image" />
          </a>
        </div>
      </header>
      <hr className="header__line" />
    </div>
  );
};

export default Header;
