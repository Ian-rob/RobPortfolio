import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-container">
        <h2 className="home-title">Hi, I'm <span className="highlight">Ian Michael Robles</span></h2>
          <h3 className="home-subtitle"><span className="highlight">Aspiring IT Specialist & BSIT Student</span></h3>
          <p className="home-description">
          Hi! I'm Ian Michael Robles, a 2nd year BSIT student and a tech enthusiast. I'm currently exploring
          different fields in IT, with a strong interest in Software & Web Development and am excited to create 
          innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;