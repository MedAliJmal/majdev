import React from "react";
import MAJLOGO from "../MAJLOGO.png";
import { FaBars, FaTimes } from "react-icons/fa";
const HeaderNav = () => {
  const openmenu = () => {
    let sidemenu = document.getElementById("sidemenu");

    sidemenu.style.right = "0";
  };
  const closemenu = () => {
    let sidemenu = document.getElementById("sidemenu");

    sidemenu.style.right = "-200px";
  };
  return (
    <div id="header">
      <div className="container">
        <nav className="head">
          <img src={MAJLOGO} alt="logo" className="logo" />
          <ul id="sidemenu">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#certification">Certifications</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <FaTimes className="icooo" onClick={() => closemenu()} />
          </ul>
          <FaBars className="icooo" onClick={() => openmenu()} />
        </nav>
        <div className="header-text nav">
          <p>Fullstack Dev.</p>
          <h1>
            Hi, i'm{" "}
            <span style={{ textShadow: "3px 3px 3px black" }}>Mohamed Ali</span>{" "}
            <br /> Jmal From Tunisia
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
