import React from 'react'
import './whatArtI.css'
import {Feature} from "../../components"

const WhatArtI = () => {
  return (
    <div className='ai__whatai section__margin' id='wai'>
      <div className="ai__whatai-feature">
        <Feature title="What is Art-I" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius consequatur similique animi, id nulla sint et voluptas ipsa! Consequatur voluptatum minus natus placeat perferendis quisquam necessitatibus ipsum veniam? Repellendus."/>
      </div>
      <div className="ai__whatai-heading">
        <h1 className="gradient__text">The Possibilities are beyond imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="ai__whatai-container">
        <Feature title="Artistic Fever" text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque eius consequatur similique animi, id nulla sint et voluptas ipsa! Consequatur"/>
        <Feature title="The Know-How" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius consequatur similique animi, id nulla sint et voluptas ipsa! Consequatur voluptatum minus natus placeat perferendis quisquam necess" />
      </div>
    </div>
  )
}

export default WhatArtI
