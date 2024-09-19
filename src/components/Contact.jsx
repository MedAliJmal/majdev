import React from "react";
import { BsSendFill } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
} from "react-icons/fa";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyRtZ4sTFCM4Kt__UG7dYGp-9XsrAF_4si9ADPx9jjHg9FCKsJnLIQUhWgTFyzk7Gyz/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent succesfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(
        (error) => alert("Failed to send the message") && console.log(error)
      );
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>

            <p>
              <BsSendFill className="iconne" /> djemal.design@gmail.com
            </p>

            <p>
              <FaPhoneSquareAlt className="iconne" /> +216 23 26 28 12
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/Jmal.Med.Ali2/">
                <FaFacebook />
              </a>
              <a href="https://github.com/MedAliJmal">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/maj-link/">
                <FaLinkedin />
              </a>
            </div>
            <a href="/cv" download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit} name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div>
        <hr style={{ opacity: "15%" }} />
        <p style={{ textAlign: "center", margin: "15px" }}>
          Copyright &copy;2024: Portfolio made by{" "}
          <span className="designer">Jmal Med Ali</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
