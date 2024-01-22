import React from 'react';
import './Styles/Footer.css';
import email from './Images/email.png'; 
import linkedin from './Images/linkedin.png'; 
import github from './Images/github.png'; 
import phone from './Images/phone.png';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-items">
          <div className="contact-item">
            <a href="mailto:elnatantesfa21@gmail.com">
              <img src= {email} alt="Email Icon" className="icon" />
              <p>Email</p>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/elnatan-tesfa-171a76217/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Icon" className="icon" />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/elnatan3" target="_blank" rel="noopener noreferrer">
              <img src= {github} alt="GitHub Icon" className="icon" />
              <p>GitHub</p>
            </a>
          </div>
          <div className="contact-item">
            <a href="tel:+15713317536">
              <img src= {phone} alt="Phone Icon" className="icon" />
              <p>Phone</p>
            </a>
          </div>
        </div>
        <p className="footer-copy">© 2024 Elnatan Tesfa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
