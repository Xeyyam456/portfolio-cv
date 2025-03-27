import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../../src/styles.css';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Portfolio
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a onClick={() => scrollToSection('header')} className="nav-link" style={{cursor: 'pointer'}}>Home</a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('about')} className="nav-link" style={{cursor: 'pointer'}}>About</a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('projects')} className="nav-link" style={{cursor: 'pointer'}}>Projects</a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollToSection('contact')} className="nav-link" style={{cursor: 'pointer'}}>Contact</a>
          </li>
          <li className="nav-item">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
