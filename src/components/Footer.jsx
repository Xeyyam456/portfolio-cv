// src/components/Footer.js
import React from 'react';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p><i className="fas fa-envelope"></i> Xeyyamelizade5@gmail.com</p>
                    <p><i className="fas fa-phone"></i> +994 (70) 256-43-17</p>
                    <p><i className="fas fa-map-marker-alt"></i> Baku, Azerbaijan</p>
                </div>
                <div className="footer-section">
                    <h3>Social Media</h3>
                    <div className="social-links">
                        <a href="https://github.com/Xeyyam456" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/+994702564317" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100077898452629" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/@xeyyamelizade3713" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a onClick={() => scrollToSection('header')} style={{cursor: 'pointer'}}>Home</a></li>
                        <li><a onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>About</a></li>
                        <li><a onClick={() => scrollToSection('projects')} style={{cursor: 'pointer'}}>Projects</a></li>
                        <li><a onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;