import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import './App.css';
import './projects.css'

// Placeholder images - replace these with actual screenshots of your apps later!
// You can put images in your 'src' folder and import them like: import project1 from './project1.png'

function Projects() {
  const projectList = [

       {
      id: 1, 
      title: "Doctor Database Management System",
      description: "A comprehensive backend system for managing doctors' records. Leveraged Spring Data JPA for complex derived queries (e.g., filtering by speciality & experience greater than), implemented @Transactional for data integrity, and handled edge cases with Custom Exceptions and Optional class.",
      techStack: ["Spring Boot", "Spring Data JPA", "MySQL", "REST API"],
      githubLink: "https://github.com/RakshaPatil66/Doctor-Management-system/",
      liveLink: null,
    },

 {
      id: 2, 
      title: "IRCTC Ticket Provider App",
      description: "A high-performance backend simulation of a railway system with O(1) in-memory data storage. Features fully documented REST endpoints using Swagger UI for real-time API testing and interaction.",
      techStack: ["Spring Boot", "Swagger UI", "REST API", "Data Structures"],
      githubLink: "https://github.com/RakshaPatil66/IRCTC-App", 
      liveLink: "#", 
    },
   {
      id: 3, // Check your ID number
      title: "MakeMyTrip Consumer App",
      description: "A backend microservice acting as a third-party ticket aggregator. It consumes external REST APIs from the IRCTC Provider using RestTemplate to facilitate seamless ticket booking and data retrieval between disparate systems.",
      techStack: ["Spring Boot", "RestTemplate", "Microservices", "Java"],
      githubLink: "https://github.com/RakshaPatil66/Make-My-Trip",
      liveLink: "#", // No UI to show, so keep this null or link to a demo video
    },

 
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="heading">My <span>Projects</span></h2>
      
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            {/* If you have images, put an <img /> tag here */}
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="card-links">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="link-btn">
                  <Github size={18} /> Code
                </a>
                {/* <a href={project.liveLink} target="_blank" rel="noreferrer" className="link-btn">
                  <ExternalLink size={18} /> Live Demo
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;