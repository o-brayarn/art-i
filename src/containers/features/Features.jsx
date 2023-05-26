import React from 'react'
import './feature.css'
import {Feature} from "../../components"

const featuresData = [
  {
    title: "Lorem Ipsum ibsum ipsjkf",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quas."
  },
  {
    title: "Lorem1 Ipsum",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quas."
  },
  {
    title: "Lorem3 Ipsum",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quas."
  },
  {
    title: "Lorem5 Ipsum",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quas."
  }
]
const Features = () => {
  return (
    <div className="ai__features section__padding" id='features'>
      <div className="ai__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="ai__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={ item.text } key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
