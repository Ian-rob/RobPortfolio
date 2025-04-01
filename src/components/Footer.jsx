import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ian Michael Robles. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
