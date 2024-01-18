import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-item" onClick={toggleMenu}>Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-item" onClick={toggleMenu}>About Me</Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-item" onClick={toggleMenu}>Projects</Link>
        <Link to="research" spy={true} smooth={true} offset={-70} duration={500} className="nav-item" onClick={toggleMenu}>Research</Link>
        <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-item" onClick={toggleMenu}>Certifications</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-item" onClick={toggleMenu}>Contact</Link>
      </nav>
    </>
  );
};

export default Navbar;
