import React from "react";
import "../styles/Portfolio.css";
import project1 from "../images/logo.png";

const projects = [
  {
    image: project1,
    title: "Codigo",
    description: "Coding web-application",
    liveDemo: "https://codigo-v1.onrender.com"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="title">Latest <span>Portfolio</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <div className="button-wrapper">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;