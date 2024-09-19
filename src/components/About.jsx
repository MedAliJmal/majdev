import React from "react";
import dali from "../dali.png";
const About = () => {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  const opentab = (tabname, e) => {
    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    e.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  };
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={dali} alt="daliimg" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hello, I'm a passionate graphic designer, teacher and web
              developer whose creativity knows no bounds. With a keen eye for
              aesthetics and a deep understanding of user experience, I love to
              transform abstract ideas into visually stunning digital
              landscapes. Constantly exploring the latest design trends and
              technologies, and as a full stack developer & graphic designer
              with 2+ years of experience, I specialize in building responsive
              web applications using modern technologies such as React JS,
              Node.JS , and MongoDB.
            </p>
            <div className="tab-titles">
              <p
                className="tab-links active-link"
                onClick={(e) => opentab("skills", e)}
              >
                Skills
              </p>
              <p
                className="tab-links"
                onClick={(e) => opentab("experience", e)}
              >
                Experience
              </p>
              <p className="tab-links" onClick={(e) => opentab("education", e)}>
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>UI/UX</span> <br /> Designing Web interfaces
                </li>
                <li>
                  <span>Web Development</span> <br /> Create web apps with MERN
                  stack.
                </li>
                <li>
                  <span>Instructor</span> <br /> Teaching students about
                  programming
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>2022 - 2024</span> <br /> Fulltime teaching at{" "}
                  <a href="https://gomycode.com/tn/fr/">GoMyCode</a>.
                </li>
                <li>
                  <span>2019 - 2021</span> <br /> Methodist at{" "}
                  <a href="https://www.facebook.com/Fabco.tn">FABCO</a>.
                </li>
                <li>
                  <span>2018 - 2019</span> <br /> A freelancer Graphic designer.
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>2021</span> <br /> Studied Fullstack JS Track at
                  <a href="https://gomycode.com/tn/fr/"> GoMyCode</a>.
                </li>
                <li>
                  <span>2019</span> <br /> Civil engineering technician from
                  <a href="https://isetsf.rnu.tn/"> ISET Sfax</a>.
                </li>
                <li>
                  <span>2013</span> <br /> Self-study Graphic design.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
