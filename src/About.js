import React from 'react';
import './about.css'; // Importing the isolated CSS file

function About() {
  return (
    <section id="about" className="about-specific-section">
      <h2 className="heading">About <span>Me</span></h2>
      
      <div className="about-specific-content">
        
        {/* LEFT SIDE: Code Window */}
        <div className="about-left-visual">
          <div className="about-code-window">
            <div className="about-window-header">
              <div className="about-dots">
                <span className="about-dot red"></span>
                <span className="about-dot yellow"></span>
                <span className="about-dot green"></span>
              </div>
              <span className="about-window-title">AboutMe.java</span>
            </div>
            <pre className="about-code-block">
              <code>
                <span className="kwd">class</span> <span className="cls">Rakshita_Patil</span> &#123;{'\n'}
                {'  '}<span className="kwd">String</span> role = <span className="str">"Software Engineer"</span>;{'\n'}
                {'  '}<span className="kwd">String</span> company = <span className="str">"Tech Mahindra"</span>;{'\n'}
                {'  '}<span className="kwd">int</span> experience = <span className="num">2</span>;{'\n'}
                {'\n'}
                {'  '}<span className="kwd">void</span> <span className="fun">currentFocus</span>() &#123;{'\n'}
                {'    '}learn(<span className="str">"Microservices"</span>);{'\n'}
                {'    '}build(<span className="str">"Spring Boot"</span>);{'\n'}
                {'  '}&#125;{'\n'}
                &#125;
              </code>
            </pre>
          </div>
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="about-right-text">
          <h3>Software Engineer & Java Developer</h3>
      
<p>
    I am a **Java Full Stack Developer** with 2 years of experience building secure, scalable systems. Currently at **Tech Mahindra**, I design optimized **REST APIs** using **Spring Boot** and **Microservices**, while crafting responsive UIs with **React**.
 </p><p> I thrive on mastering new technologies and applying them to solve complex challenges.</p>

          <div className="about-stats-row">
            <div className="about-stat">
              <h4>2</h4>
              <p>Years Exp</p>
            </div>
            <div className="about-stat">
              <h4>5+</h4>
              <p>Projects</p>
            </div>
          </div>

          <a href="#contact" className="btn">Let's Talk</a>
        </div>

      </div>
    </section>
  );
}

export default About;