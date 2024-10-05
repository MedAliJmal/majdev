import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsSendFill } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // to client
    emailjs
      .sendForm("service_msovfu6", "template_lg6artv", form.current, {
        publicKey: "aEhaNbaTvpUrA4nmV",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // to me
    emailjs
      .sendForm("service_br81klm", "template_ky9wgxq", form.current, {
        publicKey: "aEhaNbaTvpUrA4nmV",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
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
            <form ref={form} onSubmit={sendEmail} name="submit-to-google-sheet">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" value="Send" className="btn btn2">
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
