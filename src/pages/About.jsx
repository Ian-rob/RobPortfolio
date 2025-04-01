import React from "react";
import "../styles/About.css";
import profileImage from "../images/profile.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
      <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="text-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm a 2nd-year BSIT student with a strong passion for technology. I enjoy solving problems
            with technology and am excited about the future of IT. I'm always learning new skills and
            applying them through personal projects and hands-on experience. During my free time I like
            to play video games,watch anime and read manhwa.
          </p>
        </div>
</div> 
    </section>
  );
};

export default About;
