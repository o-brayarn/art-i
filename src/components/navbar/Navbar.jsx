import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

// We use BEM (Block Element Modifier) for our classNames)
const Menu = () => {
  <>
   <p> <a href="#home">Home</a></p>
          <p> <a href="#wai">What is Art-I</a> </p>
          <p> <a href="#possibility">Artack</a></p>
          <p> <a href="#features">Case Studies</a></p>
          <p> <a href="#blog">Library</a></p>
  </>
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='ai__navbar'>
      <div className='ai__navbar-links'>
        <div className='ai__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='ai__navbar-links_container'>
         <Menu />
        </div>
      </div>
      <div className='ai__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>SignUp</button>
      </div>

      <div className='ai__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='ai__navbar-menu_container scale-up-center'>
            <div className='ai__navbar-menu_container-links'>
              <Menu />
              <div className='ai__navbar-menu_container-links-sign'>
              <p>Sign In</p>
              <button type='button'>SignUp</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar