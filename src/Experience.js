import React from 'react';
import './experience.css';

const Experience = () => {
  // -----------------------------------------------------
  // DATA: Edit this section to update your experience
  // -----------------------------------------------------
  const workHistory = [
{
      id: 1,
      role: "Java Full Stack Developer",
      company: "Tech Mahindra",
      date: "Feb 2024 - Jan 2025",
      description: "Developed a secure Shipment Management system using Spring Boot for RESTful backend services and React.js for the frontend. Implemented comprehensive unit testing with JUnit and Mockito to ensure reliability and collaborated in an Agile environment to deliver scalable features.",
      skills: ["Spring Boot", "React.js", "REST API", "Spring Data JPA","AWS", "JUnit", "Mockito", "Git"]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">My Experience</h2>
      
      <div className="timeline">
        {workHistory.map((job) => (
          <div className="timeline-item" key={job.id}>
            <div className="timeline-dot"></div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{job.role}</h3>
                <span className="company-name">@ {job.company}</span>
                <span className="timeline-date">{job.date}</span>
              </div>
              
              <p className="timeline-description">{job.description}</p>
              
              <div className="tech-stack">
                {job.skills.map((skill, index) => (
                  <span key={index} className="tech-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;