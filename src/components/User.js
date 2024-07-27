import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import './user.css'
// import { Studentimg } from './Userimage.png'
export default function User() {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/students').then(res => { setPost(res.data) }).catch(err => { console.log(err) })
  })
  return (
    <div>
      {/* <div><img src={Studentimg} /></div> */}
      <h1 style={{ textAlign: "center" }}>Welcome {auth.user}</h1><br></br>
      <p>Welcome to your personalized user page, where you can access important information, view your courses, check your grades, and manage your schedule effortlessly..</p>
      <div className='flex-container'>
        {post.map(x => (
          <div className='flex-items'>
            <h1>{x.name}</h1>

            {/* <h1>{x.name}</h1>
            <h1>{x.age}</h1>
            <h1>{x.cgpa}</h1>
            <h1>{x.inter}</h1>
            <h1>{x.pro}</h1> */}
          </div>
        ))}
      </div>


      <div className="user-page">
      <h2>Welcome, </h2>
      <div className="functions">
        <div className="function">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>View Schedule</span>
        </div>
        <div className="function">
          <FontAwesomeIcon icon={faUser} />
          <span>View Profile</span>
        </div>
        {/* Add more functions as needed */}
      </div>
      <div className="exam-list">
        <h3>Upcoming Exams</h3>
        <ul>
          <li>Mathematics - April 15, 2024</li>
          <li>English Literature - April 17, 2024</li>
          {/* Add more exam entries as needed */}
        </ul>
      </div>
      <div className="profile-info">
        <h3>Profile Information</h3>
        <p>Name: -</p>
        <p>Email: -</p>
        <p>Role: -</p>
        {/* Add more profile information as needed */}
      </div>
    </div>





      <button onClick={handleLogout} className='button3'>Log Out</button>
      <div>lorem</div>
      <div></div>
    </div>
  )
}
