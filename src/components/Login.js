import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userList, setUserList] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3001/users').then(res => setUserList(res.data)).catch(err => console.log(err))
  }, [])
  const auth = useAuth()
  const handleLogin = () => {
    const userExist = userList.some(u => u.username == username && u.password == password)
    if (userExist) {
      auth.login(username)
      navigate('/')
    }
    else {
      alert("Invalid Username or Password")
    }
  }
  return (
    <div className='login-cont'>
      <form onSubmit={handleLogin} className='log-for-cont'>
        <div className='form-div2'>
          <h1 className='form-head'>Login</h1>
        </div>
        <label>Username</label>
        <input type='text' value={username} className='input-cls' onChange={(e) => { setUsername(e.target.value) }} />
        <br></br>
        <label>Password</label>
        <input type='password' value={password} className='input-cls' onChange={(e) => { setPassword(e.target.value) }} />
        <br></br>
        <button type='submit'>Login</button>
        <br></br>
        <Link to='/signup'>Don't have an account? Sign Up</Link>
      </form>
    </div>
    // <div className="login-container">
    //   <h2>Login</h2>
    //   <form>
    //     <div className="form-control">
    //       <label htmlFor="username">Username</label>
    //       <input
    //         type="text"
    //         id="username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-control">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="button" onClick={handleLogin}>Login</button>
    //   </form>
    // </div>
  )
}
