import React from 'react'
import './Feature.css'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <div>

      <div className='about'>
        <div class="job-board">
          <h2 style={{ textAlign: "center" }}>Features</h2>
          <p>Upgrade your skill set to possess a prospective future in your career path</p>
          <div class="job">
            <h3>Exam Creation and Scheduling</h3>
            <p>Users can create and schedule exams, including setting the date, time, duration, and other parameters</p>
            <Link to='/examcreat'> <button className='feat-btn1'>Get Started</button></Link>

          </div>
          <div class="job">
            <h3>Question Bank Management
            </h3>
            <p>Ability to create, store, organize, and manage a repository of exam questions for reuse in multiple exams</p>
            <Link to='/quesmanage'><button className='feat-btn2'>Get Started</button></Link>
          </div>

          <div class="job">
            <h3>RealTime Monitoring</h3>
            <p>Monitor exams in real-time, track student progress, and identify any issues or anomalies during the exam</p>
            <Link to='/realtimemon'><button className='feat-btn3'>Get Started</button></Link>
          </div>
          <div class="job">
            <h3>Offline Exam Support</h3>
            <p>Allow students to download exams, complete them offline, and submit responses when they regain connectivity, ideal for remote or low-bandwidth environments</p>
            <Link to='/offexm'><button className='feat-btn4'>Get Started</button></Link>
          </div>

        </div>


      </div>

    </div>

  )
}
