import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <nav>

        <Link to ={'/'}>
        <li>Home</li>
        </Link>
        <Link to ={'/about'}>
        <li>About</li>
        </Link>

      <Link to={'/task'}>
        <li>Task</li>
        </Link>

        <Link to={'/contactUs'}>
        <li>ContactUs</li>
        </Link>

      </nav>
    </div>
  )
}

export default NavBar
