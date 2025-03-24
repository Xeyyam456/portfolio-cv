// src/components/About.js
import React from 'react';

const About = () => {
    const skills = [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'UI/UX Design', level: 80 }
    ];

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>
                        <p className="about-description">
                            I am a passionate Frontend Developer with a strong foundation in web technologies 
                            and a keen eye for design. My journey in web development started with curiosity 
                            and has evolved into a professional career where I create engaging user experiences.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">2+</span>
                                <span className="highlight-text">Years Experience</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">20+</span>
                                <span className="highlight-text">Projects Completed</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">15+</span>
                                <span className="highlight-text">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-container">
                        <h3>My Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;