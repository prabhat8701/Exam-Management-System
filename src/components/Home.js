import React from 'react'
import homeimg from './Mainimage.png'
import './Home.css'
import { Link } from 'react-router-dom';
import regiimage from './Userimage.png'
import client1 from './Google.png'
import client2 from './Amazon.png'
export default function Home() {
  return (
    // <div className='container'>
    //   <div className='content-texts'>
    //     <h1 >Exam Management System</h1>
    //     <p>we're revolutionizing the way exams are conducted and experienced,<br></br> paving the way for a future where success is accessible to all.</p>
    //     <button className='home-btn'>Get Started</button>
    //   </div>
    //   <div className='image-container'>
    //     <img src={homeimg} style={{ display: 'block', marginLeft: 'auto', marginRight: '50px', width: '600px', height: '550px' }} />
    //   </div>
    //   <div className='hme-cont-two'><h1>title</h1><p>lorem dvdsvksdl ln jklansd vlsdkndmckljs ddddddddds</p></div>
    // </div>

    <div className="home-page">

      {/* <link to="/stumngpge"><button className='hme-gs-btn'>Get Started</button></link> */}

      {/* Main content section */}
      <section className="main-content">
        <div className="content" >
          <h1 style={{ fontSize: "35px" }}>Welcome to the <span className='hme-main-hdng' style={{ fontSize: "35px" }}>Exam Management System</span></h1>
          <p style={{ marginLeft: "" }}>We're revolutionizing the way exams are conducted and experienced, paving the way for a future <br></br>where success is accessible to all.</p>
          {/* <div> */}
          <Link to="/feature">
            <button className='hme-gs-btn' style={{ marginTop: "20px" }}>Get Started</button>
          </Link>
          {/* </div> */}
        </div>
        <div className="image-section">
          <img src={homeimg} alt="Exam" />
        </div>
      </section>
      <section className="additional-content">
        <div className="feature">
          <h2 style={{ paddingLeft: "50px" }}>Features</h2>

          <ul>
            <li>Exam creation and scheduling</li>

            <li>Automated grading and result generation</li>
            <li>Real-time monitoring and analytics</li>
          </ul>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Services</h2>

          <ul>
            <li>Effortlessly create and customize exams</li>
            <li>Schedule exams with ease</li>
            <li>Monitor exams in real-time</li>
          </ul>
        </div>
      </section>
      <div className='Register-section'>
        <div className='regiimg-cont'>
          <img className='regiimage' src={regiimage} style={{ textAlign: "center" }} />
        </div>
        <p style={{ fontWeight: "bolder", fontSize: "25px" }}>Join our exam management system today to unlock a world of educational opportunities. Register now and embark on your path to academic success!</p>
        <Link to='/registerpge'><button className='registr-btn'>Register now</button></Link>
      </div>
      <div className="our-clients-section">
        <h2 style={{ textAlign: "center" }}>Our Clients</h2>
        <div className="client-logos">
          <img src={client1} alt="Company 1" />
          <img src={client2} alt="Company 2" />

        </div>
        <p>Our exam management system is trusted by leading educational institutions, certification bodies, and corporate organizations around the world. Here are just a few of our valued clients:</p>
        <ul style={{ textAlign: "center" }}>
          <li>IIT Madras</li>
          <li>SRM University,chennai</li>
          <li>PSG college of Engineering</li>
          <li>Loyola Engineering college</li>
          <li>VIT,vellore</li>
          <li>CIT,chennai</li>

        </ul>
      </div>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-container">

          <div className="testimonial">
            <p>"The Education Management System has completely transformed how we conduct exams. It's incredibly intuitive and has saved us countless hours of administrative work."</p>
            <p className="author">- John Doe, School Administrator</p>
          </div>
          <div className="testimonial">
            <p>"I love how easy it is to create exams and track student progress with this platform. It has made my job as a teacher so much easier!"</p>
            <p className="author">- Jane Smith, High School Teacher</p>
          </div>
          <div className="testimonial">
            <p>"I love how easy it is to create exams and track student progress with this platform. It has made my job as a teacher so much easier!"</p>
            <p className="author">- Jane Smith, High School Teacher</p>
          </div>
        </div>
      </section>

    </div>

  )
}
