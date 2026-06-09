import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'; // Importing global styles
import './contact.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(''); // To show success/error message

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_hvr8kxk',    // Replace with your Service ID
        'template_ad7rq2k',   // Replace with your Template ID
        form.current,
        'CWyiRsGCN1mMxJ7s0'     // Replace with your Public Key
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          e.target.reset(); // Clear the form
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="heading">Contact <span>Me!</span></h2>
      
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-box">
            <input type="text" name="user_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
          </div>
          
          <div className="input-box">
            <input type="text" name="subject" placeholder="Email Subject" required />
            <input type="number" name="user_phone" placeholder="Mobile Number" />
          </div>
          
          <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
          
          <button type="submit" className="btn">Send Message</button>
          
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;