// src/components/Contact.js
import React from 'react';
import Swal from 'sweetalert2'

const Contact = () => {
   
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e824103a-756a-41da-a374-713d6f562519");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Xos gorduk",
                text: "Mesajiniz ugurla gonderildi!",
                icon: "success"});
        }
      };
    

    return (
        <section id="contact" className="contact">
            <h2>Menimle elaqe</h2>
            <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" name='name' placeholder="First Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name='last_name' placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <input type="email" name='email' placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" pattern="[0-9]*" name='phone' placeholder="Phone Number" required />
                    </div>
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" name='message' rows="6" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;