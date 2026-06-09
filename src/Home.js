import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'; // Optional: Install if you want animation
import profileImg from './profile.jpg'; 
import './App.css';

function Home() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h3>Hello, It's Me</h3>
        <h1>Rakshita Patil</h1>
        
        {/* Dynamic Title with Animation */}
        <h3>
          And I'm a{' '}
          <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>
            {/* If you don't want to install the package, just write "Software Engineer" here */}
            <Typewriter
              words={['Software Engineer', 'Java Full Stack Developer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>

        <p>
          Welcome to my creative portfolio! I am a 2023 graduate with <strong>2 years of experience</strong> at Tech Mahindra. 
          A Java Full Stack Developer building secure, scalable backend systems and responsive web applications. Tech Stack: 
          Java | Spring Boot | Microservices | React | MySQL | Linux | AWS | HTML CSS
        </p>
        
        <div className="social-icons">
          <a href="https://github.com/RakshaPatil66/" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/rakshita-r-patil-28703a244/" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="mailto:rakshitapatil73@gmail.com"><Mail /></a>
        </div>

        <a href="/GoogleDocs.pdf" download className="btn">Download CV</a>
      </div>

      <div className="hero-image">
        <div className="image-circle">
          <img src={profileImg} alt="Rakshita R P" />
        </div>
      </div>
    </section>
  );
}

export default Home;