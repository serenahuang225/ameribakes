import React, { useRef } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      "service_ym3xutx",
      "template_e7636j1",
      form.current,
      "YYPtpVxCaKx7vkN1M"
    )
    .then((result) => {
        console.log("Message sent:", result.text);
        alert("Your message has been sent successfully!");
        form.current.reset();
    })
    .catch((error) => {
        console.log("Error:", error.text);
        alert("There was an error sending your message. Please try again later.");
    });
  };

  return (
    <div className="contact-us">
      <div className="header tan-background">
        <h1>Contact Us</h1>
      </div>
      
      <section className="contact-form">
        <h2>Contact Form</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="from_name" name="from_name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="from_email" name="from_email" required />
          
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>
      
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Have questions or special requests? Reach out to us!</p>
        <p><strong>Email:</strong> ameribakes@gmail.com</p>
        <p><strong>Phone:</strong> 314-229-0392</p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/ameribakes/?locale=nl&hl=af" target="_blank" rel="noopener noreferrer">@ameribakes</a></p>
        <p><strong>Youtube:</strong> <a href="https://www.youtube.com/@ChefMeow/videos" target="_blank" rel="noopener noreferrer">@ChefMeow</a></p>
      </section>
    </div>
  )
}

export default Contact