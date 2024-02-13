import React from 'react'
import possibility from '../../assets/possibility.png'
import './possibilities.css'

const Possibilities = () => {
  return (
    <div className="gpt3__possibilities" id="possibilities">
      <div className="gpt3__possibilities-image">
        <img src={possibility} alt="possibility__img" />
      </div>

      <div className="gpt3__possibilities-content">
        <div className="gpt3__possibilities-content_heading">
          <h4>Request Early Access to Get Started</h4>
          <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        </div>

        <div className="gpt3__possibilities-content_text">
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>

        <div className="gpt3__possibilities-content_access">
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  )
}

export default Possibilities
