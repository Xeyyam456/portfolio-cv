// src/components/Contact.js
import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" placeholder="First Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" pattern="[0-9]*" placeholder="Phone Number" required />
                    </div>
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" rows="6" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;