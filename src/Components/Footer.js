import React from 'react';
import './Styles/Footer.css'; // Ensure the correct path to your Footer.css file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/elnatan-tesfa-171a76217/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:elnatantesfa21@gmail.com" className="footer-link">Email</a>
          <p className="footer-link">Phone: 571-331-7536</p>
        </div>
        <p className="footer-copy">© 2024 Elnatan Tesfa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
