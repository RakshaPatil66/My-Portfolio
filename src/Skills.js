import React from 'react';
import { CheckCircle } from 'lucide-react'; // Using the check icon you already have
import './App.css';
import './skills.css';

function Skills() {
  const skills = [
    { name: "Java", level: "Proficient" },
    { name: "Spring boot", level: "Proficient" },
    { name: "Spring Data JPA", level: "Proficient" },
    { name: "AWS", level: "Intermediate" },
    { name: "REST APIs", level: "Proficient" },
    { name: "React.js", level: "Intermediate" },
    { name: "Microservices", level: "Intermediate" },
    { name: "MySQL / SQL", level: "Proficient" },
    { name: "GitHub", level: "Intermediate" },
    { name: "HTML & CSS", level: "Proficient" },
    { name: "Linux", level: "Proficient" },
    { name: "Maven", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="heading">My <span>Skills</span></h2>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <CheckCircle className="skill-icon" size={24} />
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
     
    