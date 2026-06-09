import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'; 
import { Link } from 'react-scroll';
import './App.css';
import './footer.css'

function Footer() {
  // This automatically gets the current year (2026, 2027, etc.)
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Social Icons for quick access */}
        <div className="footer-socials">
          <a href="https://github.com/RakshaPatil66" target="_blank" rel="noreferrer"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/rakshita-r-patil-28703a244/" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
          <a href="mailto:rakshitapatil73@gmail.com"><Mail size={24} /></a>
        </div>

        {/* Dynamic Copyright Statement */}
        <p className="footer-text">
          Copyright &copy; {currentYear} by <span>Rakshita R P</span> | All Rights Reserved
        </p>
        
        {/* Scroll to Top Button */}
        <div className="scroll-top">
          <Link to="home" smooth={true} duration={500}>
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;