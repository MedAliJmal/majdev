import React from "react";
import certif1 from "../certif1.png";
import certif2 from "../certif2.png";
import certif3 from "../certif3.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <div id="certification">
      <div className="container">
        <h1 className="sub-title">My Certifications</h1>
        <div className="certif-list">
          <div className="certif">
            <img src={certif1} alt="certi" />
            <div className="layer">
              <h3>Responsive Web Design</h3>
              <p>
                I learned the approach that suggests that design and development
                should respond to the user's behavior and environment based on
                screen size, platform and orientation
              </p>
              {/* <a href="">
                <FaExternalLinkAlt />
              </a> */}
            </div>
          </div>
          <div className="certif">
            <img src={certif2} alt="certi" />
            <div className="layer">
              <h3>Postman API Fundamentals Student Expert certification</h3>
              <p>
                Master basics of APIs, handling requests & interacting with them
                using Postman
              </p>
              {/* <a href="">
                <FaExternalLinkAlt />
              </a> */}
            </div>
          </div>
          <div className="certif">
            <img src={certif3} alt="certi" />
            <div className="layer">
              <h3>The Fullstack JavaScript Bootcamp</h3>
              <p>
                Master the HTML/CSS/JS/React.JS as a front-end library & linking
                it with Node.js / Express.js & MongoDB to create MERN Stack
                Applications
              </p>
              <a href="https://diploma.gomycode.app/?id=39cf10d90d10b12a8">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
