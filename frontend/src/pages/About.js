import React from "react";
import "../styles/About.css";
import profileImage from "../assets/Facebook-Profile.png"; // Your profile image

function About() {
  return (
    <div className="about-container" data-aos="fade-up">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Saravanan Ponraj, a passionate full-stack developer with
            expertise in building modern, responsive web applications using the
            MERN stack. I love solving real-world problems through code and
            continuously improving my skills through hands-on projects and
            collaboration.
          </p>
          <p>
            With a strong foundation in both frontend and backend technologies,
            I aim to create seamless user experiences and scalable systems. I'm
            currently exploring advanced JavaScript frameworks and cloud-based
            architectures.
          </p>

          {/* Resume Button */}
          <a
            href="/Saravanan_Ponraj_Resume.pdf"
            download="Saravanan_Ponraj_Resume.pdf"
            className="resume-button"
          >
            Download Resume
          </a>
        </div>

        <div className="about-image">
          <img src={profileImage} alt="About Saravanan Ponraj" />
        </div>
      </div>
    </div>
  );
}

export default About;
