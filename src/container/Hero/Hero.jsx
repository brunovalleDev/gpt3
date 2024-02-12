import React from 'react'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
import './hero.css'

const Hero = () => {
  return (
    <div className="gpt3__hero">
      <div className="gpt3__hero-content">
        <h1 className="gradient__text">Let’s Build Something
          amazing with GPT-3
          OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__hero-content_email">
          <input type="email" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__hero-content_people">
          <img src={people} alt="people__img" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__hero-image">
        <img src={ai} alt="logo__img" />
      </div>
    </div>
  )
}

export default Hero
