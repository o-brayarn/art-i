import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='ai__header section__padding' id='home'>
      <div className='ai__header-content'>
        <h1 className='gradient__text'>Welcome to Art-I. We make art worth your while.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque consequuntur nesciunt deserunt ad maiores dolores illum at corporis atque non? Velit pariatur libero aliquam perferendis? Suscipit ad ullam enim quod?</p>
        
        <div className='ai__header-content__input'>
          <input type='email' placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='ai__header-content__people'>
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='ai__header-image'>
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  )
}

export default Header
