import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="ai__footer section__padding">
      <div className="ai__footer-heading">
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, repellat.</h1>
      </div>
      <div className="ai__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="ai__footer-links">
        <div className="ai__footer-links__logo">
          <h1> <span>Art</span>-I</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="ai__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>

        <div className="ai__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>

         <div className="ai__footer-links__div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="ai__footer-copyright">
        <p>© 2023 Art-I. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
