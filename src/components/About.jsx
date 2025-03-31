// src/components/About.js
import React from 'react';
import html2pdf from 'html2pdf.js';

const About = () => {
    const skills = [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'ASP.NET Core', level: 70 } // New skill added
    ];

    

    const generatePDF = () => {
        const content = document.querySelector('#root');

        // Set dark theme styles for PDF
        document.documentElement.style.setProperty('--pdf-bg', '#1a1a1a');
        document.documentElement.style.setProperty('--pdf-text', '#ffffff');

        // Dynamically calculate the content height
        const contentHeight = content.offsetHeight;

        const opt = {
            margin: 0, // No margins for full-screen capture
            filename: 'portfolio.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                backgroundColor: '#1a1a1a',
                logging: true,
                scrollX: 0, // Ensure horizontal scrolling is captured
                scrollY: 0, // Ensure vertical scrolling is captured
                windowWidth: content.offsetWidth, // Match content width
                windowHeight: contentHeight, // Match content height
            },
            jsPDF: {
                unit: 'px',
                format: [content.offsetWidth, contentHeight], // Match content dimensions
                orientation: 'portrait',
            },
        };

        // Scroll to top before generating PDF
        window.scrollTo(0, 0);

        html2pdf()
            .from(content)
            .set(opt)
            .save()
            .then(() => {
                // Reset styles after PDF generation
                document.documentElement.style.removeProperty('--pdf-bg');
                document.documentElement.style.removeProperty('--pdf-text');
            })
            .catch((err) => {
                console.error('PDF generation error:', err);
                alert('PDF oluşturulurken bir hata oluştu');
            });
    };

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
                        
                        <button 
                            onClick={generatePDF}
                            className="download-cv-btn"
                            style={{
                                padding: '12px 24px',
                                width: '520px',
                                height: '50px',
                                background: 'linear-gradient(45deg, #6c5ce7, #5a4bd1)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '20px',
                                marginBottom: '20px',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: '0 4px 15px rgba(108, 92, 231, 0.2)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(108, 92, 231, 0.4)';
                                e.currentTarget.style.background = 'linear-gradient(45deg, #5a4bd1, #6c5ce7)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(108, 92, 231, 0.2)';
                                e.currentTarget.style.background = 'linear-gradient(45deg, #6c5ce7, #5a4bd1)';
                            }}
                        >
                            <i className="fas fa-download"></i>
                            Download CV
                        </button>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">1+</span>
                                <span className="highlight-text">Years Experience</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">5+</span>
                                <span className="highlight-text">Projects Completed</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">10+</span>
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
                                        />
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