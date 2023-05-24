import React from 'react'
import './whatArtI.css'
import {Feature} from "../../components"

const WhatArtI = () => {
  return (
    <div className='ai__whatai section__margin' id='wai'>
      <div className="ai__whatai-feature">
        <Feature />
      </div>
      <div className="ai__whatai-heading">
        <h1 className="gradient__text">The Possibilities are beyond imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="ai__whatai-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatArtI
