// src/components/Header.js
import React from 'react';
import { useEffect, useState } from 'react';

const Header = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const phrases = ["Frontend Developer", "Web Designer", "UI/UX Developer","React Developer"];
    const [phraseIndex, setPhraseIndex] = useState(0);
    
    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const timeoutVal = isDeleting ? 100 : 200;

        const handleTyping = () => {
            setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
            
            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setPhraseIndex((phraseIndex + 1) % phrases.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, timeoutVal);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, phraseIndex, phrases]);

    return (
        <header id="header" className='header'>
            <div className="header-content">
                <h1>Xeyyam Elizade</h1>
                <div className="typing-text">I'm a <span className="highlight">{text}</span><span className="cursor">|</span></div>
                <p className="header-description">
                    Turning ideas into interactive realities through code and creativity
                </p>
                <div className="header-buttons">
                    <a href="#contact" className="primary-btn">Contact Me</a>
                    <a href="#projects" className="secondary-btn">View Work</a>
                </div>
            </div>
        </header>
    );
};

export default Header;