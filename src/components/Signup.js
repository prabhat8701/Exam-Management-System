import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignup = () => {
    axios.post('http://localhost:3001/users', { "username": username, "email": email, "password": password }).then(res => console.log(res)).catch(err => console.log(err))
  }
  return (
    <div className='signup-cont'>
      <form onSubmit={handleSignup} className='sign-cont'>
        <div className='form-div1'>
          <h1 className='form-head'>Sign up</h1>
        </div>
        <label>Username</label><br></br>
        <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <br></br>
        <label>E-mail</label><br></br>
        <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <br></br>
        <label>Password</label><br></br>
        <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <br></br>
        <button type='submit'>Signup</button>
        <br></br>
        <Link to='/login'>Already have an account? Log In</Link>
      </form>
    </div>
  )
}
