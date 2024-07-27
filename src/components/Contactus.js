import React from 'react'
import './Contactus.css'
export default function Contactus() {
  return (
    <div className="contact-container">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you. Reach out to us with any questions, feedback, or concerns.</p>
    <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: contact@exammanagementsystem.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Violet Street, Cityville, State, ZIP</p>
    </div>
    <div className="contact-form">
        <form>
             <h2 className='sendtext'>Send us a Message</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</div>
  )
}
