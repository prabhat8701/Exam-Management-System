import React from 'react'
import './About.css'
import proimg from './Man1.png'
import proimg1 from './man3.png'
export default function Aboutus() {
    return (
        <div className="about-us-page">
            <h1 style={{ textAlign: "center" }}>About Us</h1>
            <section className="overview-section">
                <h2>Overview</h2>
                <p>Welcome to our Exam Management System! We are dedicated to providing a robust platform that simplifies exam administration, enhances security, and improves the overall testing experience.</p>
                <p>Our team is passionate about innovation and education, and we strive to empower organizations of all sizes to conduct exams efficiently and effectively.</p>
            </section>
            <section className="mission-vision-values-section">
                <h2>Mission, Vision, and Values</h2>
                <h3>Mission</h3>
                <p>Our mission is to revolutionize the way exams are conducted by providing innovative technology solutions that streamline the testing process and promote academic and professional success.</p>
                <h3>Vision</h3>
                <p>Our vision is to become the leading provider of exam management solutions worldwide, trusted by educational institutions, certification bodies, and corporate organizations alike.</p>
                <h3>Values</h3>
                <ul>
                    <li>Excellence: We strive for excellence in everything we do, from product development to customer support.</li>
                    <li>Innovation: We embrace innovation and continuously seek new ways to improve our platform and services.</li>
                    <li>Integrity: We conduct business with honesty, transparency, and integrity, earning the trust of our clients and partners.</li>
                    <li>Collaboration: We believe in the power of collaboration and work closely with our clients and partners to achieve mutual success.</li>
                    <li>Accessibility: We are committed to making our platform accessible to organizations of all sizes, ensuring equal opportunities for education and certification.</li>
                </ul>
            </section>
            <section className="team-section">
                <h2>Our Team</h2>
                <div className="team-member">
                    <img src={proimg} alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>CEO & Co-Founder</p>
                    <p>John is passionate about education and technology. With over 10 years of experience in software development, he leads our team in creating innovative solutions for exam management.</p>
                </div>
                <div className="team-member">
                    <img src={proimg1} alt="Team Member 2" />
                    <h3>Jane </h3>
                    <p>CTO & Co-Founder</p>
                    <p>Jane is an expert in system architecture and security. She oversees the technical aspects of our platform, ensuring the highest level of reliability and data protection.</p>
                </div>
                {/* Add more team members */}
            </section>

        </div>
    )
}
