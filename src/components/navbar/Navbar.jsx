import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/'
import './navbar.css'

// We use BEM (Block Element Modifier) for our classNames)
const Navbar = () => {
  return (
    <div className='ai__navbar'>
      <div className='ai__navbar-links'>
        <div className='ai__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar