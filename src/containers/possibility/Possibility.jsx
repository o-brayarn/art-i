import React from 'react'
import './possibility.css'
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className="ai__possibility section__padding" id="possibility">
      <div className="ai__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="ai__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilities are beyond imagination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolore ullam nobis deserunt praesentium sunt consequatur? Libero fuga, aliquid ea in reprehenderit officiis mollitia doloribus similique nostrum vitae porro autem.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
