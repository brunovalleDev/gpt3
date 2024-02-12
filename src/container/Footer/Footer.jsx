import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">Do you want to step in to the future before others</h2>
        <button type="button">Request Early Access</button>
      </div>

      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container_logo">
          <img src={logo} alt="logo__img" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-container_info">
          <div className="gpt3__footer-container_links">
            <h4>Links</h4>

            <ul className="gpt3__footer-container_links-list">
              <li><a href="#">Overons</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Counters</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="gpt3__footer-container_company">
            <h4>Company</h4>

            <ul className="gpt3__footer-container_links-list">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="gpt3__footer-container_contact">
            <h4>Get in touch</h4>

            <div className="gpt3__footer-container_contact-info">
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
