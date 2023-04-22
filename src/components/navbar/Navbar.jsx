import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

// We use BEM (Block Element Modifier) for our classNames)
const Navbar = () => {
  return (
    <div className='ai__navbar'>
      <div className='ai__navbar-links'>
        <div className='ai__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='ai__navbar-links_container'>
          <p> <a href="#home">Home</a></p>
          <p> <a href="#wai">What is Art-I</a> </p>
          <p> <a href="#possibility">Artack</a></p>
          <p> <a href="#features">Case Studies</a></p>
          <p> <a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar