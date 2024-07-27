import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Style.css'
import { useAuth } from './Auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTh, faUsd, faEnvelope, faUserLock, faUserPlus, faUserAlt } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  const auth = useAuth()
  return (
    <div>
      <nav className='Navbar'>
        <div className='logo'>ExamWise</div>
        <div className='nav-container'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/admin'>Admin</NavLink>
          {/* <NavLink to='/signup'>Signup</NavLink> */}
          <NavLink to='/user'>User</NavLink>
          {/* <NavLink to='/login'>Login</NavLink>  */}
          {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
          {!auth.user && <NavLink to='/login'>Login</NavLink>}
          <NavLink to='/contact'>Contact us</NavLink>
          <NavLink to='/about'>About us</NavLink>
        </div>
      </nav>
    </div>

  )
}
