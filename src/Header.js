import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">Portfolio</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="home" smooth={true} duration={500} spy={true} offset={-70}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} spy={true} offset={-70}>About</Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} spy={true} offset={-70}>Experience</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} spy={true} offset={-70}>Projects</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} spy={true} offset={-70}>Skills</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} spy={true} offset={-70}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;