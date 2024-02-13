import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './import'
import './brands.css'

const Brands = () => {
  return (
    <div className="gpt3__brands">
      <div className="gpt3__brands-img">
        <img src={google} alt="google__img" />
      </div>

      <div className="gpt3__brands-img">
        <img src={slack} alt="slack__img" />
      </div>

      <div className="gpt3__brands-img">
        <img src={atlassian} alt="atlassian__img" />
      </div>

      <div className="gpt3__brands-img">
        <img src={dropbox} alt="dropbox__img" />
      </div>

      <div className="gpt3__brands-img">
        <img src={shopify} alt="shopify__img" />
      </div>
    </div>
  )
}

export default Brands
