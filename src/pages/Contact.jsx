import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="title">Contact <span>Me!</span></h2>
      <div className="contact-info">
        <div className="contact-item">
          <strong>Facebook:</strong> 
          <a href="https://www.facebook.com/ian.robles55/" target="_blank" rel="noopener noreferrer">
          Ian Michael Robles
          </a>
        </div>
        <div className="contact-item">
          <strong>Email:</strong> 
          <a>ianmichaelrobles@gmail.com</a>
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> 
          <span>+63 947 700 5902</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
