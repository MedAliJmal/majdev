import React from "react";
import { FaCropAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { IoCodeSlash } from "react-icons/io5";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <IoCodeSlash className="ico" />
            <h2>Web Design</h2>
            <p>
              I can help create an interactive, intuitive, and user-friendly
              website that automatically adjusts itself according to the user's
              needs.
            </p>
            <a href="https://icoxds.vercel.app/">Learn More</a>
          </div>
          <div>
            <FaCropAlt className="ico" />
            <h2>UI/UX Design</h2>
            <p>
              UI (User Interface) and UX (User Experience) are two crucial
              aspects of design in digital products and with my experience in
              Graphic design i can create multiple interfaces that matches the
              user needs.
            </p>
            <a href="https://icoxds.vercel.app/">Learn More</a>
          </div>
          <div>
            <GiTeacher className="ico" />
            <h2>Teaching</h2>
            <p>
              I've been working as a fulltime web dev. instructor and by
              teaching interaction and soft skills offers numerous benefits that
              extend beyond the classroom. These skills, which include effective
              communication, teamwork, empathy, and problem-solving, are
              essential for personal and professional success. You'll find a
              perormance summary down below.
            </p>
            <a href="https://imgur.com/a/0hm4bAI">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
