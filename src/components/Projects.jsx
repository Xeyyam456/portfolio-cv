// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Klima Alarm App",
            description: "An HVAC service management and alarm system application built with modern technologies.",
            image: "https://img.freepik.com/free-vector/air-conditioning-repair-service-abstract-concept-illustration_335657-1874.jpg",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            liveLink: "https://klima-alarm.com",
            githubLink: "https://github.com/Xeyyam456/Klima_alarm_app"
        },
        {
            title: "E-Commerce Website",
            description: "A full-featured e-commerce platform with shopping cart and payment integration.",
            image: "https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34865.jpg",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/yourusername/project1"
        },
        {
            title: "Task Management App",
            description: "A beautiful and intuitive task management application with real-time updates.",
            image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg",
            tech: ["React", "Firebase", "Material-UI"],
            liveLink: "https://project2.com",
            githubLink: "https://github.com/yourusername/project2"
        },
        {
            title: "Weather Dashboard",
            description: "A modern weather dashboard showing real-time weather data and forecasts.",
            image: "https://img.freepik.com/free-vector/weather-concept-illustration_114360-1234.jpg",
            tech: ["JavaScript", "Weather API", "CSS3"],
            liveLink: "https://project3.com",
            githubLink: "https://github.com/yourusername/project3"
        },
        
        {
            title: "Fitness Tracking App",
            description: "A comprehensive fitness tracking application with workout plans and progress monitoring.",
            image: "https://img.freepik.com/free-vector/fitness-tracker-concept-illustration_114360-4522.jpg",
            tech: ["React Native", "Redux", "Node.js", "MongoDB"],
            liveLink: "https://project5.com",
            githubLink: "https://github.com/yourusername/project5"
        },
        {
            title: "Recipe Sharing Platform",
            description: "A community-driven recipe sharing platform with search and filtering capabilities.",
            image: "https://img.freepik.com/free-vector/cooking-concept-illustration_114360-1721.jpg",
            tech: ["React", "GraphQL", "Node.js", "PostgreSQL"],
            liveLink: "https://project6.com",
            githubLink: "https://github.com/yourusername/project6"
        }
    ];

    return (
        <section id="projects" className='projects'>
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index} style={{ height: '450px' }}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 150px)' }}>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech" style={{ marginTop: 'auto', paddingBottom: '10px' }}>
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;